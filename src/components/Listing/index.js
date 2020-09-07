import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Listing(props) {
  console.log("props:", props)

  return (
    <Jumbotron>
      <h1>{props.title}</h1>
      <p>Level: {props.minimumLevel}</p>
      <p>Description: {props.description}</p>
      {props.showLink ? (
        <Link to={`/listings/${props.id}`}>
          <Button>Details</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
