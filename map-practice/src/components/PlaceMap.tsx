import { useMemo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutocomplete";

export interface Location {
  lat: number;
  lng: number;
}

const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
        {
          weight: "1.00",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
        {
          gamma: "1.00",
        },
        {
          lightness: "-20",
        },
        {
          saturation: "0",
        },
        {
          invert_lightness: true,
        },
        {
          weight: "1.00",
        },
        {
          hue: "#fffe00",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fce805",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          weight: "1.00",
        },
        {
          gamma: "1.00",
        },
        {
          lightness: "0",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.stroke",
      stylers: [
        {
          weight: "1.00",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#fce805",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "labels.icon",
      stylers: [
        {
          saturation: "43",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          visibility: "on",
        },
        {
          weight: "1.00",
        },
        {
          gamma: "1.00",
        },
        {
          lightness: "0",
        },
        {
          saturation: "0",
        },
        {
          hue: "#fffe00",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#646464",
        },
        {
          lightness: 17,
        },
      ],
    },
  ],
};

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
        options={mapOptions}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}
