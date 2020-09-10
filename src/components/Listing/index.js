import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

export default function Listing(props) {
  console.log("props:", props)
  const token = useSelector(selectToken);

  const levelsList = [null, 'beginner', 'intermediate', 'advanced', 'semi-professional', 'professional']

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
