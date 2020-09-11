import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";

export default function Profile(props) {
  console.log("PROPS:", props)
  const userType = props.isBand ? "Band or Group" : "Individual Musician"
  const instrumentsList = props.instruments ? props.instruments : []
  const stylesList = props.styles ? props.styles : []


  return (
    <Jumbotron>
      <div className="container">
        <img alt="profile" className="mb-4" src="https://www.uokpl.rs/fpng/f/346-3462839_round-profile-image.png" width={150}/>
        <h1>Name: {props.name}</h1>
        <ListGroup className="text-left">
          <ListGroup.Item>
            <strong>Type:</strong> {userType}
          </ListGroup.Item>
          {userType === "Band or Group" ? null : (
            <ListGroup.Item>
              <strong>Instruments: </strong> 
              {instrumentsList.map(i => i.title).join(", ")}
            </ListGroup.Item>
          )}
          <ListGroup.Item>
            <strong>Level:</strong> {props.level}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Styles: </strong> 
            {stylesList.map(s => s.title).join(", ")}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Jumbotron>
  )
}
