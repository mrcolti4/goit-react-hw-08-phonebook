import RedButton from 'components/RedButton/RedButton';

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
    <>
      <p>Hello, {userData.name}</p>
      <RedButton handleLogout={handleLogout}>Log out</RedButton>
    </>
  );
}

export default UserMenu;
