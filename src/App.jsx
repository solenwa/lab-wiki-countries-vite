import "./App.css";
import React, { useState } from "react";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const [countriesList] = useState(countries);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countriesList={countriesList} />
        </div>
      </div>
      <Routes>
        <Route
          path="/:countryId"
          element={<CountryDetails countriesList={countriesList} />}
        />
      </Routes>
    </div>
  );
}
export default App;
