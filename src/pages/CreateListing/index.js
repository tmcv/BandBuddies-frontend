import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { createListing } from '../../store/listings/actions';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { selectUser } from "../../store/user/selectors";
import { selectStyles } from "../../store/styles/selectors";
import { selectInstruments } from "../../store/instruments/selectors";
import { fetchStyles } from "../../store/styles/actions";
import { fetchInstruments } from "../../store/instruments/actions";
import { Col } from "react-bootstrap";


export default function CreateListing() {
  const [title, setTitle] = useState("")
  const [minimumLevel, setMinimumLevel] = useState(1)
  const [description, setDescription] = useState("")
  const [style, setStyle] = useState()
  const [instrument, setInstrument] = useState(1)
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(selectUser)
  const styles = useSelector(selectStyles);
  const instruments = useSelector(selectInstruments);
  const isBand = !user.isBand;
  console.log("isBand for listing:", isBand)
  console.log({user})
  
  useEffect (() => {
    dispatch(fetchStyles());
    dispatch(fetchInstruments());
  }, [dispatch]);


  async function submitForm () {
    try {
      await dispatch(createListing(title, minimumLevel, isBand, description, style, instrument))
      history.push("/listing-created")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5 text-left">
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

        <Form.Group controlId="form.styles">
          <Form.Label>Select desired style</Form.Label>
          <Form.Control as="select" onChange={event => {
            console.log("style is currently:", event.target.value)
            setStyle(event.target.value)
          }}>
            <option />
            {styles.map(s => {
              return <option key={s.id} value={s.id}>{s.title}</option>
            })}
          </Form.Control>
        </Form.Group>
        
        {user.isBand===false ? null : (
          <Form.Group controlId="form.instruments">
            <Form.Label>Select desired instrument</Form.Label>
            <Form.Control as="select" onChange={event => {
              console.log("instrument is currently:", event.target.value)
              setInstrument(event.target.value)
            }}>
              <option />
              {instruments.map(i => {
                return <option key={i.id} value={i.id}>{i.title}</option>
              })}
            </Form.Control>
          </Form.Group>
        )}
{/* 
        <input type = "checkbox" id = "checkBand" value = {!isBand} onChange={event => {
          console.log("EVENT-TARGET-VALUE", event.target.value)
          setIsBand(event.target.value)
        }}/>
        <label for = "checkBand"> We are a band </label>
         */}
        <Form.Group className="mt-5">
          <Button variant="dark" type="submit" onClick={submitForm}>
            Create Listing
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}