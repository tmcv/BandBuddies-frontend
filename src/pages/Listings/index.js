import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { fetchListings } from "../../store/listings/actions";
import { selectListings } from "../../store/listings/selectors";
import { selectUser } from "../../store/user/selectors";
import Listing from "../../components/Listing";

export default function Listings() {
  const dispatch = useDispatch();
  const fetchedListings = useSelector(selectListings);
  const user = useSelector(selectUser);
  const [filterForUser, setFilterForUser] = useState(user.token ? true : false)
  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
  
  console.log("listings:", fetchedListings)
 
  console.log("USER:", user)

  const userInstrumentsList = filterForUser ? (
    user.instruments.map(instrument => {
      return instrument.id
    })
  ) : []

  console.log("USERINSTRUMENTSLIST:", userInstrumentsList)
  
  const filteredListings = filterForUser ? (
    fetchedListings.filter(listing => {
      console.log("filtering listing with ID:", listing.id)
      return (userInstrumentsList.includes(listing.instruments[0]))
    })
  ) : fetchedListings

  console.log("new list of listings:", filteredListings)

  const visibleListings = filterForUser ? filteredListings.filter(listing => {
    return listing.minimumLevel <= user.level && listing.isBand === user.isBand
  }) : fetchedListings;

  return (
    <>
      <Jumbotron>
        <h1>Listings</h1>
      </Jumbotron>
      <Container>
        {user.token ? 
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check checked={filterForUser} type="checkbox" label="Filter for me!" onChange={() => setFilterForUser(!filterForUser)}/>
          </Form.Group> : <div> <strong>Please login to filter or to see more details</strong> </div>
        }
        <p></p>
        {visibleListings.map(listing => {
          return (
            <Listing
              key={listing.id}
              id={listing.id}
              title={listing.title}
              isBand={listing.isBand}
              minimumLevel={listing.minimumLevel}
              description={listing.description}
              showLink={user.token ? true : false}
            />
          );
        })}
      </Container>
    </>
  );
}