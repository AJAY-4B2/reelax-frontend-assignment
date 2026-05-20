import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Reusable dropdown select matching Figma style.
 * Props:
 *   label      – field label
 *   name       – select name
 *   value      – controlled value
 *   onChange   – change handler
 *   placeholder – first disabled option text
 *   options    – [{ value, label }]
 */
export default function SelectField({
  label,
  name,
  value,
  onChange,
  placeholder = 'Select…',
  options     = [],
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-reelax-text">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2.5 text-sm border border-reelax-border rounded-md
            appearance-none bg-white
            focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
            hover:border-gray-400 transition cursor-pointer
            ${value === '' ? 'text-reelax-placeholder' : 'text-reelax-text'}`}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}
