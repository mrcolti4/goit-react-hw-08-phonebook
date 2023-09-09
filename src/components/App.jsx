import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ErrorPage from 'pages/ErrorPage';
import HomePage from 'pages/HomePage';
import Layout from './Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute redirect="/contacts">
        <LoginPage />
      </RestrictedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: (
      <RestrictedRoute redirect="/contacts">
        <RegisterPage />
      </RestrictedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
];

export const App = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(refreshUser());
  }, []);
  return (
    <Layout>
      <Routes>
        {router.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Layout>
  );
};
