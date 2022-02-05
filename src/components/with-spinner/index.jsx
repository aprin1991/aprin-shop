import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

function WithSpinner({ isLoading }) {
  return (
    isLoading && (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
  );
}

export default WithSpinner;
