import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails({ countriesList }) {
  const { countryId } = useParams();

  // const foundCountry = countriesList.find((oneCountry) => {
  //   return oneCountry.alpha3Code === countryId;
  // });

  function findCountry(code3char) {
    const newCountry = countriesList.find((oneCountry) => {
      return oneCountry.alpha3Code === code3char;
    });
    return newCountry;
  }

  const [foundCountry, setFoundCountry] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      const parsed = await response.json();
      setFoundCountry(parsed);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (countryId) {
      fetchData();
    }
  }, [countryId]);

  if (!countryId) {
    return (
      <div className="col-7">
        <h1>Pick a country!</h1>
      </div>
    );
  }

  if (foundCountry.length === 0 || countriesList.length === 0) {
    return (
      <div className="col-7">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="col-7">
      <h1>{foundCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((element, i) => (
                  <li key={element + i}>
                    <Link to={`/${element}`}>
                      {findCountry(element).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
