import React from 'react';

/**
 * Reusable text input field that matches the Figma design.
 * Props:
 *   label      – field label text
 *   name       – input name / key in formData
 *   value      – controlled value
 *   onChange   – change handler
 *   placeholder
 *   optional   – shows "(Optional)" in gray next to the label
 *   disabled   – grays out the field (used for Country)
 *   type       – input type, defaults to "text"
 */
export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  optional    = false,
  disabled    = false,
  type        = 'text',
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-reelax-text">
        {label}
        {optional && (
          <span className="text-reelax-muted font-normal ml-1 text-xs">(Optional)</span>
        )}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2.5 text-sm border rounded-md transition
          placeholder:text-reelax-placeholder
          focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
          ${disabled
            ? 'bg-gray-50 text-reelax-muted border-reelax-border cursor-not-allowed'
            : 'bg-white text-reelax-text border-reelax-border hover:border-gray-400'
          }`}
      />
    </div>
  );
}
