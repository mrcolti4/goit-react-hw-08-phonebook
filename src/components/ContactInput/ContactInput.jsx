import clsx from 'clsx';
import React from 'react';

function ContactInput({ error, ...field }) {
  return (
    <input
      className={clsx(
        'pl-1 py-1 border-2 border-black rounded  focus:outline-none',
        { 'border-red': error },
        { 'focus:border-emerald-400': !error }
      )}
      {...field}
    />
  );
}

export default ContactInput;
