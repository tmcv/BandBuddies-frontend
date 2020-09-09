import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { selectStyles } from "../../store/styles/selectors";
import { selectInstruments } from "../../store/instruments/selectors";
import { fetchStyles } from "../../store/styles/actions";
import { fetchInstruments } from "../../store/instruments/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isBand, setIsBand] = useState(false);
  const [level, setLevel] = useState(1);
  const [style, setStyle] = useState();
  const [instrument, setInstrument] = useState();
  console.log("ISBAND AT THE START", isBand)
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const styles = useSelector(selectStyles);
  const instruments = useSelector(selectInstruments);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  useEffect (() => {
    dispatch(fetchStyles());
    dispatch(fetchInstruments());
  }, [dispatch]);

  console.log({styles})
  console.log({instruments})

  function submitForm(event) {
    event.preventDefault();

    console.log("new user details:", {
      username,
      email,
      password,
      name,
      isBand,
      level
    })

    dispatch(signUp(username, email, password, name, isBand, level, style, instrument));

    setUsername("");
    setEmail("");
    setPassword("");
    setName("");
    setIsBand(isBand);
    setLevel(1);
    setStyle();
    setInstrument();
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={event => setUsername(event.target.value)}
            type="text"
            placeholder="Enter username"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={event => setName(event.target.value)}
            type="name"
            placeholder="Name"
            required
          />
        </Form.Group>

        <Form.Group controlId="form.level">
          <Form.Label>Select your level</Form.Label>
          <Form.Control as="select" onChange={event => {
            console.log("level is currently:", event.target.value)
            setLevel(event.target.value)
          }}>
            <option value={1}>1: beginner</option>
            <option value={2}>2: intermediate</option>
            <option value={3}>3: advanced</option>
            <option value={4}>4: semi-professional</option>
            <option value={5}>5: professional</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="form.styles">
          <Form.Label>Select your style</Form.Label>
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
        
        {isBand ? null : (
          <Form.Group controlId="form.instruments">
            <Form.Label>Select your instrument</Form.Label>
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

        <Form.Group controlId="form.isBand">
          <Form.Check checked={isBand} type="checkbox" label="We are a band" onChange={() => setIsBand(!isBand)}/>
        </Form.Group>
        
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
