import React, { useEffect } from 'react';
import './App.css';

import {Switch, Route} from "react-router-dom";
import Loading from "./components/Loading";
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

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/listings" component={Listings} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/create-listing" component={CreateListing} />
        <Route path="/listing-created" component={ListingCreated} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
