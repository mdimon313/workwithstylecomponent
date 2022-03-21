import React from "react";
import { Link } from "react-router-dom";

function Links({ to, name }) {
  return <Link to={to}>{name}</Link>;
}

export default Links;
