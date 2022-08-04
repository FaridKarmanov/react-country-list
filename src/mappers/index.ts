import countries from "../country-data.json";
import { ICountry } from "../types";

export const transformedCountry: ICountry[] = countries.map(
  (country): ICountry => {
    return {
      name: country.name.common,
      capital: country.capital[0],
      population: country.population,
      flag: country.flags.svg,
      area: country.area,
      region: country.region,
    };
  }
);
