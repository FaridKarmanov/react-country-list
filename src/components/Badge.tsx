import React from "react";
import { BadgeLabelType, Color } from "../types";

interface IProps {
  value: number;
  type: BadgeLabelType;
  color: Color;
}

export const Badge = ({ value, type, color }: IProps) => {
  return (
    <span
      className={`badge bg-${color} py-2
    `}
    >
      {type}: {value}
    </span>
  );
};
