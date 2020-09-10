import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { sendMail } from '../../store/mail/actions';
import { useHistory } from 'react-router-dom';
import { selectUser } from "../../store/user/selectors";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectListingDetails } from "../../store/listingDetails/selectors";
import { Col } from "react-bootstrap";

export default function SendMail() {
  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const user = useSelector(selectUser)
  const fetchedListing = useSelector(selectListingDetails)
  const history = useHistory()

  function checkForListing() {
    if (!fetchedListing.id) {
      history.push("/listings")
    }
  }

  useEffect (() => { 
    checkForListing()
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  console.log("user:", user)
  console.log("specific listing:", fetchedListing)

  //This is just for now. I still need to add a way to make this 'to' email address dynamic
  const to = fetchedListing.email ? fetchedListing.email : "bandbuddiesonline@gmail.com"   
  const subject = fetchedListing.title ? `Your BandBuddies listing: ${fetchedListing.title}` : 'Response to your BandBuddies listing'

  async function submitForm () {
    try {
      await dispatch(sendMail(to, user.email, subject, text))
      history.push("/mail/sent")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Write your message:</h1>
          <div><strong>From: </strong>{user.email}</div>
          <div><strong>To: </strong>{to}</div>
          <div><strong>Subject: </strong>{subject}</div>
          <Form.Group controlId="formBasicText">
            <Form.Control
              value={text}
              onChange={event => setText(event.target.value)}
              type="text"
              placeholder="Enter text"
              required
            />
          </Form.Group>

          <Form.Group className="mt-5">
            <Button variant="dark" type="submit" onClick={submitForm}>
              Send Message
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}
