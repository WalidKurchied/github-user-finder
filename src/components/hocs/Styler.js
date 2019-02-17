import React from "react";

const Styler = WrappedComponent => {
  return props => {
    return <WrappedComponent {...props} classes="beautify bordify" />;
  };
};

export default Styler;
