import React from "react";
import styled from "styled-components";

const PlanetCard = styled.div`
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  text-align: left;
`;

const Planet = ({ name, orbital_period, climate, terrain }) => {
  return (
    <PlanetCard>
      <div style={{ margin: "2px" }}>
        <div>
          <strong>Name: </strong>
          {name}
        </div>
        <div>
          <strong>Orbital period: </strong>
          {orbital_period}
        </div>
      </div>
      <div style={{ margin: "2px" }}>
        <div>
          <strong>Climate: </strong>
          {climate}
        </div>
        <div>
          <strong>Terrain: </strong>
          {terrain}
        </div>
      </div>
    </PlanetCard>
  );
};

export default Planet;
