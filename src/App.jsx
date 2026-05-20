import React, { useState } from 'react';
import Header from './components/layout/Header';
import BillingForm from './components/billing/BillingForm';
import OrderSummary from './components/billing/OrderSummary';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    companyName: 'abhigyan',
    email:       'abhigyan.pandey@getreelax.com',
    gstNumber:   '',
    panNumber:   '',
    premise:     '',
    street:      '',
    state:       '',
    city:        '',
    country:     'India',
    pinCode:     '',
  });

  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20');
  const [walletApplied, setWalletApplied]   = useState(false);

  return (
    <div className="min-h-screen bg-reelax-bg font-sans">
      <Header />

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Back link */}
        <button className="flex items-center gap-1.5 text-sm text-reelax-muted hover:text-reelax-text mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to plans
        </button>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left – Billing Form */}
          <div className="flex-1 w-full">
            <BillingForm formData={formData} setFormData={setFormData} />
          </div>

          {/* Right – Order Summary */}
          <div className="w-full lg:w-[340px] flex-shrink-0">
            <OrderSummary
              selectedCoupon={selectedCoupon}
              setSelectedCoupon={setSelectedCoupon}
              walletApplied={walletApplied}
              setWalletApplied={setWalletApplied}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
