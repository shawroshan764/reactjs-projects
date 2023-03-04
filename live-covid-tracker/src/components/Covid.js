import React, { useEffect, useState } from "react";
import "../App.css";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json");
      const actualData = await response.json();
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // [] it will call only when page is loaded or refresh, else it always re-render
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>Live</h1>
      <h2>INDIA COVID-19 CORONAVIRUS TRACKER</h2>
      <div class="wrapper">

        <div class="card">
          <h3 class="card-title">TOTAL RECOVERED</h3>
          <p class="card-content">{data.recovered}</p>
        </div>

        <div class="card">
          <h3 class="card-title">TOTAL CONFIRMED</h3>
          <p class="card-content">{data.confirmed}</p>
        </div>

        <div class="card">
          <h3 class="card-title">TOTAL DEATHS</h3>
          <p class="card-content">{data.deaths}</p>
        </div>


        <div class="card">
          <h3 class="card-title">TOTAL ACTIVE</h3>
          <p class="card-content">{data.active}</p>
        </div>


        <div class="card">
          <h3 class="card-title">TOTAL UPDATED</h3>
          <p class="card-content">{data.lastupdatedtime}</p>
        </div>
      </div>
    </>
  );
};

export default Covid;
