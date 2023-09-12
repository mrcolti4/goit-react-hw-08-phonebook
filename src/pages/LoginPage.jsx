import ContactLabel from 'components/ContactLabel/ContactLabel';
import LoginInput from 'components/LoginInput/LoginInput';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';
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
    <form onSubmit={formik.handleSubmit} className="flex flex-col items-start">
      <ContactLabel>
        <span>Email</span>
        <LoginInput
          type="email"
          required
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </ContactLabel>
      <ContactLabel>
        <span>Password</span>
        <LoginInput
          type="password"
          minLength={7}
          required
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </ContactLabel>
      <label>
        <span>Stay signed</span>
        <input
          type="checkbox"
          checked={stayAuth}
          onChange={e => dispatch(setStayAuth(e.target.checked))}
        />
      </label>
      <PrimaryButton type="submit">Log in</PrimaryButton>
    </form>
  );
}

export default LoginPage;
