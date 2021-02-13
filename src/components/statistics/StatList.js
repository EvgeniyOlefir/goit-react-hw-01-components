import React from "react";
import Statistic from "./Statistic";

const StatList = ({ statisics }) => (
  <ul>
    {statisics.map((statisic) => (
      <li key={statisic.id}>
        <Statistic id={statisics.id} label={statisics.label} percentage={statisics.percentage} />
      </li>
    ))}
  </ul>
);

export default StatList;
