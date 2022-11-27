import { Grid } from "react-loader-spinner";

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <Grid
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
