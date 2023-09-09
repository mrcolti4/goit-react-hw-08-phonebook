import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      Created by Kyrylo Bulyhin
      <p>{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
