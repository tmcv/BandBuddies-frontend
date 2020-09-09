import React, {useState} from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Profile(props) {
  console.log("PROPS:", props)
  const userType = props.isBand ? "Band or Group" : "Individual Musician"
  const instrumentsList = props.instruments ? props.instruments : []
  const stylesList = props.styles ? props.styles : []


  return (
    <Jumbotron>
      <h1>Name: {props.name}</h1>
      <p>Type: {userType}</p>
      <ul><strong>Instruments:</strong> {instrumentsList.map(i => {
        return <li>{i.title}</li>
      })}</ul>
      <p>Level: {props.level}</p>
      <ul><strong>Styles:</strong> {stylesList.map(s => {
        return <li>{s.title}</li>
      })}</ul>
      {/* {props.showLink ? (
        <Link to={`/listings/${props.id}`}>
          <Button>Contact User</Button>
        </Link>
      ) : null} */}
    </Jumbotron>
  )
}
