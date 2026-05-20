import React from 'react';

/**
 * Reusable Button component.
 * variant: 'primary' | 'secondary' | 'outline'
 */
export default function Button({
  children,
  onClick,
  variant  = 'primary',
  type     = 'button',
  fullWidth = false,
  className = '',
}) {
  const base = `inline-flex items-center justify-center gap-2 px-5 py-2.5
    text-sm font-semibold rounded-md transition-colors focus:outline-none
    focus:ring-2 focus:ring-offset-1 focus:ring-brand-500`;

  const variants = {
    primary:   'bg-brand-600 text-white hover:bg-brand-700',
    secondary: 'bg-white text-reelax-text border border-reelax-border hover:bg-gray-50',
    outline:   'bg-white text-brand-600 border border-brand-500 hover:bg-blue-50',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
