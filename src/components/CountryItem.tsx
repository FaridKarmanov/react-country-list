import React from "react";
import { ICountry, Color } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-row justify-content-between align-items-center">
        <img
          src={country.flag}
          alt="flag"
          className="img-thumbnail"
          width="100"
        />
        <p>{country.name}</p>
        <p>{country.capital}</p>
        <p>{country.region}</p>
        <Badge value={country.area} type="area" color={Color.Primary} />
        <Badge
          value={country.population}
          type="population"
          color={Color.Secondary}
        />
      </div>
    </li>
  );
};
