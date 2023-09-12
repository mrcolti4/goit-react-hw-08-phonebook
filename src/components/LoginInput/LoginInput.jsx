import clsx from 'clsx';
import React from 'react';

function LoginInput({ ...field }) {
  return (
    <input
      className={clsx('pl-1 border-2 border-black rounded focus:outline-none')}
      {...field}
    />
  );
}

export default LoginInput;
