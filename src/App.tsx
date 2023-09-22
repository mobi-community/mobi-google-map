import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./component/map";
import Marker from "./component/marker";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};
function App() {
  const center = { lat: 37.5665, lng: 126.978 };
  const zoom = 20.3;
  const position = { lat: 37.569227, lng: 126.9777256 };

  return (
    <Wrapper apiKey={"API KEY"} render={render}>
      <Map center={center} zoom={zoom}>
        <Marker position={position} />
      </Map>
    </Wrapper>
  );
}

export default App;
