import React, { useState } from 'react';
import { Tag, ChevronUp, ChevronDown } from 'lucide-react';

const PRESET_COUPONS = [
  { code: 'WELCOME20', description: '20% off on your first month' },
  { code: 'ANNUAL50',  description: '50% off on annual plans'     },
];

/**
 * Collapsible coupon accordion with preset coupons + manual entry.
 * Props:
 *   selectedCoupon  – currently active coupon code ('' if none)
 *   onSelectCoupon  – setter
 */
export default function CouponSection({ selectedCoupon, onSelectCoupon }) {
  const [open, setOpen]           = useState(true);
  const [manualCode, setManualCode] = useState('');

  const handleManualApply = () => {
    const code = manualCode.trim().toUpperCase();
    if (code) onSelectCoupon(code);
  };

  const toggleCoupon = (code) => {
    onSelectCoupon(selectedCoupon === code ? '' : code);
  };

  return (
    <div className="border-b border-reelax-border">
      {/* Header toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-reelax-text">
          <Tag className="w-4 h-4 text-gray-400" />
          Apply Coupon
        </span>
        {open
          ? <ChevronUp   className="w-4 h-4 text-gray-400" />
          : <ChevronDown className="w-4 h-4 text-gray-400" />
        }
      </button>

      {open && (
        <div className="pb-4 flex flex-col gap-3">
          {/* Manual entry */}
          <div className="flex items-center gap-2 border border-reelax-border rounded-md overflow-hidden">
            <input
              type="text"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleManualApply()}
              placeholder="Enter coupon code"
              className="flex-1 px-3 py-2 text-sm text-reelax-text placeholder:text-reelax-placeholder
                focus:outline-none bg-white"
            />
            <button
              onClick={handleManualApply}
              className="px-3 py-2 text-sm font-semibold text-brand-600 hover:text-brand-700
                transition-colors border-l border-reelax-border bg-white"
            >
              Apply
            </button>
          </div>

          {/* Preset coupons */}
          {PRESET_COUPONS.map((coupon) => {
            const isSelected = selectedCoupon === coupon.code;
            return (
              <button
                key={coupon.code}
                onClick={() => toggleCoupon(coupon.code)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md
                  border text-left transition-all ${
                    isSelected
                      ? 'border-brand-500 bg-blue-50'
                      : 'border-reelax-border hover:border-gray-300 bg-white'
                  }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm font-bold text-reelax-text whitespace-nowrap">
                    {coupon.code}
                  </span>
                  <span className="text-xs text-reelax-muted truncate">
                    {coupon.description}
                  </span>
                </div>

                {/* Radio indicator */}
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                  flex-shrink-0 ml-2 transition-all ${
                    isSelected ? 'border-brand-500 bg-brand-500' : 'border-gray-300 bg-white'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
