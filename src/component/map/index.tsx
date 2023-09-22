import React from "react";

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: { lat: 37.569227, lng: 126.9777256 },
        zoom: 16,
        // mapId: "18d61ed6773b0570",
      });
      setMap(newMap);
    }
  }, [map]);

  return (
    <>
      <div ref={ref} id="map" style={{ width: "800px", height: "800px" }}></div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
