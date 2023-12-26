import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const token =
  "pk.eyJ1IjoicHJhbmFsaS0xNSIsImEiOiJjbHE2NXZzajkwMTZ1MmpxcTQwMndmb3MxIn0.wLp1pz8Sdzo5ul5S7GtnGA";
console.log(token);

const App = () => {
  const [viewPort, setviewPort] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 6,
  });

  return (
    <div
      className="p-8 ml-50 pl-80"
      style={{ width: "100vw", height: "100vh" }}
    >
      <ReactMapGl
        {...viewPort}
        mapboxAccessToken={token}
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/pranali-15/clq656hvd000k01pk5qvhd94m"
      ></ReactMapGl>
    </div>
  );
};

export default App;
