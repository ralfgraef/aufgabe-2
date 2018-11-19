import React from "react";

const validation = props => {
  let message = "The test is long enough!";
  if (props.textLength <= 5) {
    message = "Text to short, shorty...";
  }
  return <p>{message}</p>;
};

export default validation;
