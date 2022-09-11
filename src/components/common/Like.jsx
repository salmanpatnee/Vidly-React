import React from "react";
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return <i className={classes} onClick={props.onClick} aria-hidden="true"></i>;
};

export default Like;
