import React from 'react';
import { Wallet } from 'lucide-react';

/**
 * Shows wallet balance with an Apply / Remove toggle.
 * Props:
 *   applied  – boolean
 *   onApply  – toggle handler
 */
export default function WalletBalance({ applied, onApply }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-reelax-border">
      {/* Icon + text */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
          <Wallet className="w-4 h-4 text-brand-500" />
        </div>
        <div>
          <p className="text-sm font-semibold text-reelax-text leading-tight">Wallet Balance</p>
          <p className="text-xs text-reelax-muted mt-0.5">₹500.00 available</p>
        </div>
      </div>

      {/* Apply button */}
      <button
        onClick={onApply}
        className={`text-sm font-semibold transition-colors ${
          applied
            ? 'text-reelax-green hover:text-green-700'
            : 'text-brand-600 hover:text-brand-700'
        }`}
      >
        {applied ? 'Applied ✓' : 'Apply'}
      </button>
    </div>
  );
}
