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
  const listings = useSelector(selectListings);
  const user = useSelector(selectUser);
  const [filterForUser, setFilterForUser] = useState(true)

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
  
  // console.log("listings:", listings)

  // console.log(user)
  const visibleListings = filterForUser ? listings.filter(listing => {
    return listing.minimumLevel <= user.level && listing.isBand !== user.isBand
  }) : listings;

  return (
    <>
      <Jumbotron>
        <h1>Listings</h1>
      </Jumbotron>
      <Container>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check checked={filterForUser} type="checkbox" label="Filter for me!" onChange={() => setFilterForUser(!filterForUser)}/>
        </Form.Group>
        {visibleListings.map(listing => {
          return (
            <Listing
              key={listing.id}
              id={listing.id}
              title={listing.title}
              minimumLevel={listing.minimumLevel}
              description={listing.description}
              showLink={true}
            />
          );
        })}
      </Container>
    </>
  );
}