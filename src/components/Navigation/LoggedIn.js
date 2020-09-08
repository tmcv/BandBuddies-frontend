import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // console.log("USER IS:", user)

  return (
    <>
      {user ? <NavbarItem path="/create-listing" linkText="Create a Listing" /> : null}
      {user ? <NavbarItem path="/profile" linkText="My Profile" /> : null}
      {/* <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.username}</Nav.Item> */}
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
