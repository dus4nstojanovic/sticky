import React, { FC } from "react";
import "./style.css";
import Column from "./Column";

const Playground: FC = () => {
  return (
    <div className="playground">
      <div className="overflow-container">
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
};

export default Playground;
