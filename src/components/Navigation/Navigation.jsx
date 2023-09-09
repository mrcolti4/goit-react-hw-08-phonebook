import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/slice';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="navigation">
      <ul className="header__menu">
        <li className="header__item">
          <Link to={'/'} className="header__Link">
            Home
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="header__item">
              <Link to={'/contacts'} className="header__Link">
                Contacts
              </Link>
            </li>
            <li>
              <UserMenu />
            </li>
          </>
        ) : (
          <>
            <li className="header__item">
              <Link to={'/login'} className="header__Link">
                Log in
              </Link>
            </li>
            <li className="header__item">
              <Link to={'/register'} className="header__Link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
