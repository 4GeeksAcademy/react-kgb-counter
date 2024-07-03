import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = (props) => {
  return (
    <>
      <div>{props.hundredThousands}</div>
      <div>{props.tenThousands}</div>
      <div>{props.thousands}</div>
      <div>{props.hundreds}</div>
      <div>{props.tens}</div>
      <div>{props.ones}</div>
    </>
  );
};
export default SimpleCounter;
