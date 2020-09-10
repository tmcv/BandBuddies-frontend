import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";

export default function Homepage() {
  const history = useHistory()

  function clickFunction() {
    history.push("/listings")
  }

  return (
    <div>
      <div>
        <h1>Welcome to Band Buddies!</h1>
      </div>
      <img height={720} src="https://cdn.pixabay.com/photo/2017/07/31/22/32/concert-2561646_1280.jpg" alt="Image of band performing" />
      <p></p>
      <div>
        <Button onClick={clickFunction}>
          Find A Band!
        </Button>      
      </div>
    </div>
  )
}
