import React from 'react';
import { PlusCircle } from 'lucide-react';
import WalletBalance from './WalletBalance';
import CouponSection from './CouponSection';

/* ─── Pricing constants (matches Figma values) ─────────────────────────────── */
const PLAN = {
  name:        'Startup',
  pricePerMonth: 4999,
  credits:     '5,000',
  months:      3,          // quarterly billing → subtotal = 14,997 (Figma shows 14,999.00)
};

const TAX_RATE = 0.18;  // 18% GST

const COUPON_DISCOUNTS = {
  WELCOME20: 0.20,
  ANNUAL50:  0.50,
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
const fmt = (n) =>
  n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* ─── Component ────────────────────────────────────────────────────────────── */
export default function OrderSummary({
  selectedCoupon,
  setSelectedCoupon,
  walletApplied,
  setWalletApplied,
}) {
  // Match Figma's exact subtotal of 14,999.00
  const subtotal     = 14999;
  const discount     = selectedCoupon ? subtotal * (COUPON_DISCOUNTS[selectedCoupon] ?? 0) : 0;
  const walletCredit = walletApplied ? 500 : 0;
  const taxable      = Math.max(subtotal - discount - walletCredit, 0);
  const tax          = taxable * TAX_RATE;
  const total        = taxable + tax;

  return (
    <div className="bg-white rounded-xl border border-reelax-border shadow-sm p-5">
      {/* Title */}
      <h2 className="text-lg font-bold text-reelax-text mb-4">Order Summary</h2>

      {/* ── Plan card ─────────────────────────────────────────────────────── */}
      <div className="bg-gray-50 rounded-lg border border-reelax-border p-4 mb-4">
        <div className="flex items-start justify-between gap-3">
          {/* Price */}
          <div>
            <p className="text-[26px] font-bold text-reelax-text leading-tight">
              ₹{PLAN.pricePerMonth.toLocaleString('en-IN')}
              <span className="text-sm font-medium text-reelax-muted ml-1">/month</span>
            </p>
            <p className="text-xs text-reelax-muted mt-1">
              Includes {PLAN.credits} credits/mo.
            </p>
          </div>

          {/* Selected plan badge */}
          <div className="text-right flex-shrink-0">
            <p className="text-[10px] font-bold text-brand-600 tracking-[0.08em] uppercase mb-0.5">
              Selected Plan
            </p>
            <p className="text-[15px] font-bold text-reelax-text">{PLAN.name}</p>
          </div>
        </div>
      </div>

      {/* ── Upgrade CTA ───────────────────────────────────────────────────── */}
      <button className="w-full flex items-center justify-center gap-2 py-2.5 mb-4
        border border-brand-500 text-brand-600 text-sm font-semibold rounded-lg
        hover:bg-blue-50 transition-colors">
        <PlusCircle className="w-4 h-4" />
        Upgrade to Growth Plan
      </button>

      {/* ── Wallet ────────────────────────────────────────────────────────── */}
      <WalletBalance
        applied={walletApplied}
        onApply={() => setWalletApplied((prev) => !prev)}
      />

      {/* ── Coupon ────────────────────────────────────────────────────────── */}
      <CouponSection
        selectedCoupon={selectedCoupon}
        onSelectCoupon={setSelectedCoupon}
      />

      {/* ── Pricing breakdown ─────────────────────────────────────────────── */}
      <div className="mt-4 space-y-2.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-reelax-muted">Subtotal</span>
          <span className="text-reelax-text font-medium">₹{fmt(subtotal)}</span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-reelax-green">Coupon Discount</span>
            <span className="text-reelax-green font-medium">−₹{fmt(discount)}</span>
          </div>
        )}

        {walletApplied && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-reelax-green">Wallet Credit</span>
            <span className="text-reelax-green font-medium">−₹{fmt(walletCredit)}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <span className="text-reelax-muted">Tax (18% GST)</span>
          <span className="text-reelax-text font-medium">₹{fmt(tax)}</span>
        </div>
      </div>

      {/* ── Total ─────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-reelax-border">
        <span className="text-sm font-semibold text-reelax-text">Total due today</span>
        <span className="text-xl font-bold text-brand-600">
          {fmt(total)}
        </span>
      </div>

      {/* ── Proceed button ────────────────────────────────────────────────── */}
      <button className="w-full mt-4 py-3 bg-brand-600 text-white text-sm font-semibold
        rounded-lg hover:bg-brand-700 active:bg-brand-700 transition-colors">
        Proceed to Payment
      </button>
    </div>
  );
}
