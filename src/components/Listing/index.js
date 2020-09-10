import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

export default function Listing(props) {
  console.log("props:", props)
  const token = useSelector(selectToken);

  const levelsList = [null, 'beginner', 'intermediate', 'advanced', 'semi-professional', 'professional']

  return (
    <Jumbotron>
      <h1>{props.title}</h1>
      <p>Type: {props.isBand ? "Musician looking for a band" : "Band or group looking for a musician"}</p>
      {props.showLink ? (
        <div>
          <Link to={`/listings/${props.id}`}>
            <Button>Details</Button>
          </Link>
        </div>
      ) : null}
    </Jumbotron>
  );
}
