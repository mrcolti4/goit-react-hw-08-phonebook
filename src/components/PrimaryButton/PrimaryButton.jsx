import clsx from 'clsx';
import React from 'react';

function PrimaryButton({ children, ...field }) {
  const { disabled } = field;
  return (
    <button
      className={clsx(
        'mt-3 py-2 px-3 rounded-md border-2',
        {
          'bg-sky-500  text-white hover:bg-sky-600 transiiton-colors duration-200':
            !disabled,
        },
        {
          'border-gray-500 text-gray-500 cursor-not-allowed': disabled,
        }
      )}
      {...field}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
