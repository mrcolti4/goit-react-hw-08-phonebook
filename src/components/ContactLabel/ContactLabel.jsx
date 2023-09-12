import clsx from 'clsx';
import React from 'react';

import style from '../ContactForm/ContactForm.module.css';

function ContactLabel({ children }) {
  return (
    <label
      className={clsx(
        style.contact__label,
        'relative mb-8 flex justify-between'
      )}
    >
      {children}
    </label>
  );
}

export default ContactLabel;
