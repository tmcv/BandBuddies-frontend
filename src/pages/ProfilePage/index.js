import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "../../components/Profile";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export default function ProfilePage() {
  const user = useSelector(selectUser);
  const levelsList = [null, 'beginner', 'intermediat', 'advanced', 'semi-professional', 'professional']
  const userLevel = `${levelsList[user.level]}`
  console.log('USER DETAILS', user)
  
  return (
    <div>
      {user ? 
      <Profile
         id={user.id}
         name={user.name}
         instruments={user.instruments}
         styles={user.styles}
         level={userLevel}
         isBand={user.isBand}
         showLink={true}
      /> : <p>Loading...</p>}
    </div>
  )
}
