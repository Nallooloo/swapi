import React from "react";
import Planet, { PlanetProps } from "./Planet";
const DataDisplay: React.FC<{ planetList: PlanetProps[] }> = ({
  planetList,
}) => {
  return (
    <div
      style={{
        alignContent: "center",
        width: "450px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {planetList
        ? planetList.map((planet, index) => <Planet {...planet} key={index} />)
        : null}
    </div>
  );
};

export default DataDisplay;
