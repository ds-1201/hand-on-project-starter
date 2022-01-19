import React from "react";

const Button = ({ className, ...rest }) => {
  return <button className={className} {...rest}></button>;
};

export default Button;
