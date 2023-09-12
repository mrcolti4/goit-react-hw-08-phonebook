import React from 'react';

function ContactError({ children }) {
  return <p className="absolute bottom-[-30px] left-0 text-red">{children}</p>;
}

export default ContactError;
