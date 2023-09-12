import UserMenu from 'components/UserMenu/UserMenu';
import NavigationListItem from './NavigationListItem';

import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/slice';
import clsx from 'clsx';
import { useRef } from 'react';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const ref = useRef(null);
  const classes = 'bg-emerald-700 shadow-lg shadow-emerald-500 text-white';

  return (
    <nav className="navigation">
      <ul className="header__menu flex gap-10 items-start">
        <NavigationListItem>
          <NavLink
            ref={ref}
            to={'/'}
            className={clsx('header__Link px-5 py-1.5')}
          >
            Home
          </NavLink>
        </NavigationListItem>
        {isLoggedIn ? (
          <>
            <NavigationListItem>
              <NavLink
                ref={ref}
                to={'/contacts'}
                className={clsx('header__Link px-5 py-1.5')}
              >
                Contacts
              </NavLink>
            </NavigationListItem>
            <li className="inline-flex items-center justify-center gap-5">
              <UserMenu />
            </li>
          </>
        ) : (
          <>
            <NavigationListItem>
              <NavLink
                ref={ref}
                to={'/login'}
                className={clsx('header__Link px-5 py-1.5')}
              >
                Log in
              </NavLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavLink
                ref={ref}
                to={'/register'}
                className={clsx('header__Link px-5 py-1.5')}
              >
                Register
              </NavLink>
            </NavigationListItem>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
