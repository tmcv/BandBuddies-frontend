import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  const history = useHistory()

  function clickFunction() {
    history.push("/listings")
  }

  return (
    <div className="homepage">
      <Jumbotron className="mb-0">
        <h1>Welcome to Band Buddies!</h1>
      </Jumbotron>
      <header className="d-flex justify-content-center align-items-center">
        <Button variant="danger" size="lg" onClick={clickFunction}>
          Find A Band!
        </Button>
      </header>
      
      {/* <img height={720} src="https://cdn.pixabay.com/photo/2017/07/31/22/32/concert-2561646_1280.jpg" alt="Image of band performing" /> */}
      <p></p>
    </div>
  )
}
