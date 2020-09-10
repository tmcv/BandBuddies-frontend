import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Profile from "../../components/Profile";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser, selectToken } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

export default function ProfilePage() {
  const user = useSelector(selectUser);
  const levelsList = [null, 'beginner', 'intermediate', 'advanced', 'semi-professional', 'professional']
  const userLevel = `${levelsList[user.level]}`
  console.log('USER DETAILS', user)
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(token);
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  useEffect (() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const instruments = user.instruments
  
  return (
    <div>
      {user ? 
      <Profile
         id={user.id}
         name={user.name}
         instruments={instruments}
         styles={user.styles}
         level={userLevel}
         isBand={user.isBand}
         showLink={true}
      /> : <p>Loading...</p>}
    </div>
  )
}
