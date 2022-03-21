import React from "react";
import { A } from "./styles/Elements.styles";

function Nav() {
  return (
    <ul>
      <li>
        <A to={"/"} name="Home" />
      </li>
      <li>
        <A to={"/about"} name="About" />
      </li>
      <li>
        <A to={"/service"} name="Services" />
      </li>
      <li>
        <A to={"/contact"} name="Contact" />
      </li>
    </ul>
  );
}

export default Nav;
