import ContactLabel from 'components/ContactLabel/ContactLabel';
import LoginInput from 'components/LoginInput/LoginInput';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';
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
      <ContactLabel>
        <span>Name</span>
        <LoginInput
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </ContactLabel>
      <ContactLabel>
        <span>Email</span>
        <LoginInput
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </ContactLabel>
      <ContactLabel>
        <span>Password</span>
        <LoginInput
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </ContactLabel>
      <PrimaryButton type="submit">Register</PrimaryButton>
    </form>
  );
}

export default RegisterPage;
