import "./App.css";
import React, { useEffect, useState } from "react";
// import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  // const [countriesList] = useState(countries);
  const [countriesList, setCountriesList] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      console.log(response);
      setCountriesList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesList={countriesList} />
          <Routes>
            <Route
              path="/"
              element={<CountryDetails countriesList={countriesList} />}
            />
            <Route
              path="/:countryId"
              element={<CountryDetails countriesList={countriesList} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
