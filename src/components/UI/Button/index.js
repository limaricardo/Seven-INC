import React from "react";
import { ButtonComp } from "./styles";

const Button = ({ children, ...props }) => {
  return (
    <div>
      <ButtonComp {...props}>{children}</ButtonComp>
    </div>
  );
};

export default Button;
