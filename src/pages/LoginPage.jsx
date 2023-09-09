import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import { selectStayAuth, setStayAuth } from 'redux/auth/slice';

function LoginPage() {
  const dispatch = useDispatch();
  const stayAuth = useSelector(selectStayAuth);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(loginThunk(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        <span>Email</span>
        <input
          type="email"
          required
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          minLength={7}
          required
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </label>
      <label>
        <span>Stay signed</span>
        <input
          type="checkbox"
          checked={stayAuth}
          onChange={e => dispatch(setStayAuth(e.target.checked))}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginPage;
