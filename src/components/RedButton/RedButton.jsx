import React from 'react';

function RedButton({ children, handleLogout }) {
  return (
    <button
      className="border-red border-2 px-4 py-2 transition-all duration-300 hover:bg-red hover:text-white"
      onClick={handleLogout}
    >
      {children}
    </button>
  );
}

export default RedButton;
