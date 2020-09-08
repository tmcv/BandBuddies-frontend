import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { createListing } from '../../store/listings/actions';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { selectUser } from "../../store/user/selectors";
import { Col } from "react-bootstrap";


export default function CreateListing() {
  const [title, setTitle] = useState("")
  const [minimumLevel, setMinimumLevel] = useState(0)
  const [description, setDescription] = useState("")
  const [style, setStyle] = useState("")
  const [instrument, setInstrument] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(selectUser)
  const isBand = !user.isBand
  console.log("isBand for listing:", isBand)


  async function submitForm () {
    try {
      await dispatch(createListing(title, minimumLevel, style, instrument, description, isBand))
      history.push("/listing-created")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Create a Search Listing</h1>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={event => setTitle(event.target.value)}
            type="text"
            placeholder="Enter title"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={event => setDescription(event.target.value)}
            type="description"
            placeholder="Enter description"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicStyle">
          <Form.Label>Style</Form.Label>
          <Form.Control
            value={style}
            onChange={event => setStyle(event.target.value)}
            type="style"
            placeholder="style"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicInstrument">
          <Form.Label>Instrument</Form.Label>
          <Form.Control
            value={instrument}
            onChange={event => setInstrument(event.target.value)}
            type="instrument"
            placeholder="instrument"
            required
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Minimum level</Form.Label>
          <Form.Control as="select" onChange={event => {
            console.log("level is currently:", event.target.value)
            setMinimumLevel(event.target.value)
          }}>
            <option value={1}>1: beginner</option>
            <option value={2}>2: intermediate</option>
            <option value={3}>3: advanced</option>
            <option value={4}>4: semi-professional</option>
            <option value={5}>5: professional</option>
          </Form.Control>
        </Form.Group>
{/* 
        <input type = "checkbox" id = "checkBand" value = {!isBand} onChange={event => {
          console.log("EVENT-TARGET-VALUE", event.target.value)
          setIsBand(event.target.value)
        }}/>
        <label for = "checkBand"> We are a band </label>
         */}
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Create Listing
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}