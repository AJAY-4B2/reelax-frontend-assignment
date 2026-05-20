import React from 'react';
import InputField  from '../common/InputField';
import SelectField from '../common/SelectField';
import Button      from '../common/Button';

/* ─── Static data ─────────────────────────────────────────────────────────── */
const STATES = [
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AR', label: 'Arunachal Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CG', label: 'Chhattisgarh' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'ML', label: 'Meghalaya' },
  { value: 'MZ', label: 'Mizoram' },
  { value: 'NL', label: 'Nagaland' },
  { value: 'OD', label: 'Odisha' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'SK', label: 'Sikkim' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TS', label: 'Telangana' },
  { value: 'TR', label: 'Tripura' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'UK', label: 'Uttarakhand' },
  { value: 'WB', label: 'West Bengal' },
  { value: 'DL', label: 'Delhi' },
];

const CITIES = {
  AP: [{ value: 'VIJ', label: 'Vijayawada' }, { value: 'VSK', label: 'Visakhapatnam' }],
  KA: [{ value: 'BLR', label: 'Bengaluru' }, { value: 'MYS', label: 'Mysuru' }],
  MH: [{ value: 'MUM', label: 'Mumbai' }, { value: 'PUN', label: 'Pune' }, { value: 'NGP', label: 'Nagpur' }],
  TN: [{ value: 'CHE', label: 'Chennai' }, { value: 'CBE', label: 'Coimbatore' }],
  TS: [{ value: 'HYD', label: 'Hyderabad' }, { value: 'WGL', label: 'Warangal' }],
  DL: [{ value: 'NDL', label: 'New Delhi' }],
  GJ: [{ value: 'AMD', label: 'Ahmedabad' }, { value: 'SUR', label: 'Surat' }],
  UP: [{ value: 'LKO', label: 'Lucknow' }, { value: 'NOD', label: 'Noida' }, { value: 'AGR', label: 'Agra' }],
  WB: [{ value: 'KOL', label: 'Kolkata' }],
  RJ: [{ value: 'JAI', label: 'Jaipur' }, { value: 'JDH', label: 'Jodhpur' }],
};

/* ─── Component ────────────────────────────────────────────────────────────── */
export default function BillingForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset city when state changes
      ...(name === 'state' ? { city: '' } : {}),
    }));
  };

  const cityOptions = formData.state ? (CITIES[formData.state] ?? []) : [];

  return (
    <div className="bg-white rounded-xl border border-reelax-border shadow-sm p-6 sm:p-8">
      {/* Page heading */}
      <h1 className="text-[22px] font-bold text-reelax-text leading-tight mb-1">
        Review your details
      </h1>

      {/* Section sub-heading */}
      <h2 className="text-[15px] font-semibold text-reelax-text mb-6 mt-4">
        Billing Information
      </h2>

      {/* Form grid – 2 cols on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        <InputField
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="abhigyan"
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="abhigyan.pandey@getreelax.com"
        />
        <InputField
          label="GST Number"
          name="gstNumber"
          value={formData.gstNumber}
          onChange={handleChange}
          placeholder="GST Number"
          optional
        />
        <InputField
          label="PAN Number"
          name="panNumber"
          value={formData.panNumber}
          onChange={handleChange}
          placeholder="PAN Number"
          optional
        />
        <InputField
          label="Premise/House no."
          name="premise"
          value={formData.premise}
          onChange={handleChange}
          placeholder="Premise/House no."
        />
        <InputField
          label="Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <SelectField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Select state"
          options={STATES}
        />
        <SelectField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Select city"
          options={cityOptions}
        />
        <InputField
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="India"
          disabled
        />
        <InputField
          label="Pin Code"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          placeholder="Pincode"
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-end gap-3 mt-8">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save Details</Button>
      </div>
    </div>
  );
}
