import { useMemo, useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutocomplete";
import { mapOptions } from "@/constants/mapOptions";
import MarkerClusterer from "@googlemaps/markerclustererplus";

export interface Location {
  lat: number;
  lng: number;
}

export default function PlaceMap() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState<Location | null>(null);
  const [mapZoom, setMapZoom] = useState<number>(2);
  const [markers, setMarkers] = useState<Location[]>([]);
  const [markerCluster, setMarkerCluster] = useState<MarkerClusterer | null>(
    null
  );

  useEffect(() => {
    // markers 배열이 업데이트될 때마다 클러스터를 업데이트
    if (markerCluster) {
      markerCluster.clearMarkers();
      markerCluster.addMarkers(
        markers.map(
          (markerLocation, index) =>
            new google.maps.Marker({
              position: markerLocation,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "red",
                fillOpacity: 1,
                strokeWeight: 0.4,
                strokeColor: "black",
                scale: 5,
              },
            })
        )
      );
    }
  }, [markers, markerCluster]);

  const clustererOptions = {
    // 클러스터 아이콘(구글 기본)
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",

    // 클러스터 그리드 크기 설정
    gridSize: 50, // 기본값 60, 숫자 작아질수록 크기 작아짐
  };

  const handleMapLoad = (map: google.maps.Map | null) => {
    // 구글 지도가 로드될 때 호출되는 콜백 함수
    if (map) {
      const mc = new MarkerClusterer(map, [], clustererOptions); // 마커 클러스터 객체 생성
      setMarkerCluster(mc); // 마커 클러스터 객체 상태 설정
    }
  };

  // 입력 input 장소로 지도 zoom 이벤트
  const zoomToLocation = (location: Location) => {
    setSelected(location);
    setMapZoom(10);
  };

  // Marker추가
  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const clickedLocation = {
      lat: event.latLng?.lat() || 0,
      lng: event.latLng?.lng() || 0,
    };
    zoomToLocation(clickedLocation);
    const newMarkers = [...markers, clickedLocation];
    setMarkers(newMarkers);
  };

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete
          setSelected={setSelected}
          zoomToLocation={zoomToLocation}
        />
      </div>

      <GoogleMap
        zoom={mapZoom}
        center={selected || center}
        mapContainerClassName="map-container"
        options={mapOptions}
        onClick={handleMapClick}
        onLoad={handleMapLoad} // 지도 로드 시 콜백 함수 호출
      >
        {selected && <Marker position={selected} />}
        {markers.map((markerLocation, index) => (
          <Marker
            key={index}
            position={markerLocation}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "red",
              fillOpacity: 1,
              strokeWeight: 0.4,
              strokeColor: "black",
              scale: 5,
            }}
          />
        ))}
      </GoogleMap>
    </>
  );
}
