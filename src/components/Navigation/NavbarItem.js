import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <Nav.Link className="text-light" as={NavLink} to={props.path}>
        <strong>{props.linkText}</strong>
      </Nav.Link>
    </Nav.Item>
  );
}
