import React from "react";

const Styler = WrappedComponent => {
  return props => {
    return <WrappedComponent {...props} classes="beautify" />;
  };
};

export default Styler;
