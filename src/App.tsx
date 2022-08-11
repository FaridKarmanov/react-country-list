import React from "react";
import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformedCountries } from "./mappers";

export const App = () => {
  return (
    <div className="container">
      <h1 className="my-5">Country List</h1>
      <CountryList countries={transformedCountries(countries)} />
    </div>
  );
};
