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

export interface PlanetProps {
  name: string;
  orbital_period: string;
  climate: string;
  terrain: string;
  population: string;
}

const Planet: React.FC<PlanetProps> = ({
  name,
  orbital_period,
  climate,
  terrain,
  population,
}) => {
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
        <div>
          <strong>Population: </strong>
          {population}
        </div>
      </div>
    </PlanetCard>
  );
};

export default Planet;
