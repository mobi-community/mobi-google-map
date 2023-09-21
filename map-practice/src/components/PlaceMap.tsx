import { useMemo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutocomplete";

export interface Location {
  lat: number;
  lng: number;
}

export default function PlaceMap() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState<Location | null>(null);
  const [mapZoom, setMapZoom] = useState<number>(2);

  const zoomToLocation = (location: Location) => {
    setSelected(location);
    setMapZoom(10); // 입력한 input의 장소로 지도 확대
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
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}
