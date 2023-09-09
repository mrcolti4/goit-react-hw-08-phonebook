import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';

function RegisterPage() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(registerThunk(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;
