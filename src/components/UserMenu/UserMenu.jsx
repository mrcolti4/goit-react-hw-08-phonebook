import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/slice';

function UserMenu() {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <p>Hello, {userData.name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserMenu;
