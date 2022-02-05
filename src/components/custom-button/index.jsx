import React from "react";
import { ButtonContainer } from "./CustomButton.style";

function CustomButton({
  children,

  ...props
}) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default CustomButton;
