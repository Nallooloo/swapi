import React, { useEffect, useState } from "react";
import SearchStuff from "./Components/SearchStuff";
import DataDisplay from "./Components/DataDisplay";
import "./App.css";

async function getData(planetSearch) {
  const dataHolder = [];
  let data = await fetch(
    `https://swapi.dev/api/planets/?search=${planetSearch}`
  );
  let dataJson = await data.json();

  console.log(dataJson);
  dataHolder.push(...dataJson.results);

  while (dataJson.next) {
    data = await fetch(dataJson.next);
    dataJson = await data.json();
    dataHolder.push(...dataJson.results);
  }

  return dataHolder;
}

function App() {
  const [myFilter, setMyFilter] = useState("");
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [excludeColumns, setExcludeColumns] = useState([
    "films",
    "edited",
    "residents",
    "url",
  ]);

  useEffect(() => {
    getData("").then((data) => setFullData(data));
  }, []);

  useEffect(() => {
    const filterData = () => {
      const lowercasedValue = myFilter.toLowerCase().trim();
      if (lowercasedValue === "") setFilteredData([]);
      else {
        const filteredData = fullData.filter((item) => {
          return Object.keys(item).some((key) =>
            excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setFilteredData(filteredData);
      }
    };
    filterData();
  }, [myFilter, fullData, excludeColumns]);

  const handleValue = (e) => {
    setMyFilter(e.target.value);
  };

  const clickMe = (e) => {
    e.preventDefault();
    getData(myFilter);
  };

  return (
    <div className="App">
      Hello world
      <SearchStuff
        value={myFilter}
        onSubmit={(e) => clickMe(e)}
        change={handleValue}
      />
      <DataDisplay planetList={filteredData} />
    </div>
  );
}

export default App;
