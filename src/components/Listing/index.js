import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Listing(props) {
  console.log("props:", props)

  return (
    <Card bg="light" className="mb-4 text-left">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <p>Type: {props.isBand ? "Musician looking for a band" : "Band or group looking for a musician"}</p>
        {props.showLink ? (
          <div>
            <Link to={`/listings/${props.id}`}>
              <Button variant="dark">Details</Button>
            </Link>
          </div>
        ) : null}
      </Card.Body>
    </Card>
  );
}
