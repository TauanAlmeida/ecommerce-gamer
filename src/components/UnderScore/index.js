import React from "react";
import { Bar } from "./styles";

function UnderScore({ width }) {
  return width ? <Bar style={{ width: width }}></Bar> : <Bar></Bar>;
}

export default UnderScore;
