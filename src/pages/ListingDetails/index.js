import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ListingDetails from "../../components/ListingDetails";
import { fetchListingById } from "../../store/listingDetails/actions";
import { selectListingDetails } from "../../store/listingDetails/selectors";

export default function ListingDetailsPage() {
  const { id } = useParams();
  // console.log("ID:", id)
  const listingDetails = useSelector(selectListingDetails);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchListingById(id));
  }, [dispatch, id]);

  console.log('LISTINGDETAILS', listingDetails)

  const listing = listingDetails;
  // console.log("Listing test:", listing)
  // console.log('Listing Type TEST:', typeof listing === 'object')

  return (
    <>
      {listing && listing.id ? 
      <ListingDetails
        id={listing.id}
        title={listing.title}
        type={listing.isBand ? "Musician looking for a band" : "Band or group looking for a musician"}
        description={listing.description}
        minimumLevel={listingDetails.minimumLevel}
        showLink={true}
      /> : <p>Loading...</p>}
    </>
  );
}
