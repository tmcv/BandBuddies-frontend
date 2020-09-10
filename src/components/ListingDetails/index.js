import React, {useState} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";


export default function ListingDetails(props) {
  console.log("props:", props)
  const token = useSelector(selectToken);

  const levelsList = [null, 'beginner', 'intermediate', 'advanced', 'semi-professional', 'professional']
  // const dispatch = useDispatch();
  // const [amount, setAmount] = useState()

  // const bids = props.bids
  // // console.log("BIDS", bids)
  // const highestBid = bids ? bids[bids.length-1] : "no bids yet"
  // // console.log("highest bid", highestBid)

  // const onClick = () => {
  //   dispatch(artworkUpdated(props))
  // }

  // const token = useSelector(selectToken);
  // // console.log("login token", token)
  
  return (
    // <div>TESTING...</div>
    <Jumbotron>
      <h1>{props.title}</h1>
      <p>Type: {props.isBand ? "Musician looking for a band" : "Band or group looking for a musician"}</p>
      <p>Level: {levelsList[props.minimumLevel]}</p>
      <p>Description: {props.description}</p>
      {props.showLink ? (
        <div>
          <Link to={token ? `/mail` : `/login`}>
            <Button variant="dark">Get in Touch!</Button>
          </Link>
        </div>
      ) : null}
    </Jumbotron>
  );
}
