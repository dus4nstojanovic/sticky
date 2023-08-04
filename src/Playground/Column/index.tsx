import React, { FC } from "react";
import Cell from "./Cell";

const Column: FC = () => {
  return (
    <div className="column">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
};

export default Column;
