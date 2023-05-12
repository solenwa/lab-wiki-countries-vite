import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countriesList }) {
  return (
    <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
      <div className="list-group">
        {countriesList.map((country) => (
          <Link
            key={country.name.common}
            className="list-group-item list-group-item-action"
            to={`/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="Country's flag"
              style={{ height: "15px" }}
            ></img>
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
