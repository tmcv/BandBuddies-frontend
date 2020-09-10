import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Profile(props) {
  console.log("PROPS:", props)
  const userType = props.isBand ? "Band or Group" : "Individual Musician"
  const instrumentsList = props.instruments ? props.instruments : []
  const stylesList = props.styles ? props.styles : []


  return (
    <Jumbotron>
      <h1>Name: {props.name}</h1>
      <p><strong>Type:</strong> {userType}</p>
      {userType === "Band or Group" ? null : 
        (<ul><strong>Instruments:</strong> {instrumentsList.map(i => {
          return <li key={i.id}>{i.title}</li>
        })}</ul>)}
      <p><strong>Level:</strong> {props.level}</p>
      <ul><strong>Styles:</strong> {stylesList.map(s => {
        return <li key={s.id}>{s.title}</li>
      })}</ul>
      {/* {props.showLink ? (
        <Link to={`/listings/${props.id}`}>
          <Button>Contact User</Button>
        </Link>
      ) : null} */}
    </Jumbotron>
  )
}
