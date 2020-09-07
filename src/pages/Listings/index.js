import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchListings } from "../../store/listings/actions";
import { selectListings } from "../../store/listings/selectors";
import Listing from "../../components/Listing";

export default function Listings() {
  const dispatch = useDispatch();
  const listings = useSelector(selectListings);

  useEffect(() => {
    dispatch(fetchListings());
  }, [dispatch]);
  
  // console.log("listings:", listings)

  return (
    <>
      <Jumbotron>
        <h1>Listings</h1>
      </Jumbotron>
      <Container>
        {listings.map(listing => {
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