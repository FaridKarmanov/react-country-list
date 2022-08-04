export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

export type BadgeLabelType = "area" | "population";

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Light = "light",
  Dark = "dark",
}
