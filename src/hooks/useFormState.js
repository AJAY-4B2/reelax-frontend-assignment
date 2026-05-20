import { useState } from 'react';

/**
 * useFormState – generic controlled form state hook.
 * @param {Object} initialValues
 * @returns {{ formData, handleChange, setFormData, resetForm }}
 */
export default function useFormState(initialValues = {}) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setFormData(initialValues);

  return { formData, handleChange, setFormData, resetForm };
}
