import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <Triangle
      height="80"
      width="80"
      color="#5c7bcf"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
}
