import React, {useState} from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Profile(props) {
  const userType = props.isBand ? "Band or Group" : "Individual Musician"

  return (
    <Jumbotron>
      <h1>Name: {props.name}</h1>
      <p>Level: {props.level}</p>
      <p>Type: {userType}</p>
      {/* {props.showLink ? (
        <Link to={`/listings/${props.id}`}>
          <Button>Contact User</Button>
        </Link>
      ) : null} */}
    </Jumbotron>
  )
}
