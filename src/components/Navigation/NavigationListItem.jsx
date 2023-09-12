import React from 'react';

function NavigationListItem({ children }) {
  return (
    <li className="inline-flex text-emerald-400 border-2 border-emerald-400 hover:bg-emerald-950 hover:cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500 hover:text-white">
      {children}
    </li>
  );
}

export default NavigationListItem;
