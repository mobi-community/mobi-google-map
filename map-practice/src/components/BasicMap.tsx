import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export default function BasicMap() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap zoom={2} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
