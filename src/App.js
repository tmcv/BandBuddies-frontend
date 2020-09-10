import React, { useEffect } from 'react';
import './App.css';

import {Switch, Route} from "react-router-dom";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import Homepage from './pages/Homepage';
import Listings from './pages/Listings';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreateListing from './pages/CreateListing';
import ListingCreated from './pages/CreateListing/listingCreated';
import ProfilePage from './pages/ProfilePage';
import SendMail from './pages/Mail';
import MailSent from './pages/Mail/MailSent';
import ListingDetailsPage from './pages/ListingDetails';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/listings" component={Listings} />
        <Route path="/listings/:id" component={ListingDetailsPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/create-listing" component={CreateListing} />
        <Route path="/listing-created" component={ListingCreated} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/mail" component={SendMail} />
        <Route path="/mail/sent" component={MailSent} />
      </Switch>
    </div>
  );
}

export default App;
