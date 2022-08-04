import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CountryList } from "./components/CountryList";
import { transformedCountry } from "../src/mappers";

export const App = () => {
  return (
    <div className="container">
      <h2 className="my-3">Country List</h2>
      <CountryList countries={transformedCountry} />
    </div>
  );
};
