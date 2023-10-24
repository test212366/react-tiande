import React from 'react';

export default function Button({ label, ...props }) {
  return (
    <button className="bg-primary px-2 py-1 rounded-lg text-white">
      {label}
    </button>
  );
}
