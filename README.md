# Reelax – Pixel-Perfect React Assignment

A high-fidelity, fully responsive implementation of the **Review Your Details / Billing** screen from the Reelax Figma design, built with **React JS + Vite + Tailwind CSS**.

---

## 🚀 Live Demo
- **Hosted App:** _[Add your Vercel / Netlify URL here]_

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| **Vite** | Fast dev server & production build |
| **React JS 18** | Component-based UI |
| **Tailwind CSS 3** | Utility-first styling with custom design tokens |
| **lucide-react** | Figma-matched vector icons |
| **Inter (Google Fonts)** | Typography matching the Figma design |

---

## ⚙️ How to Run Locally

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd figma-assignment

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → http://localhost:5173

# 4. Build for production
npm run build
```

---

## 📁 Project Structure

```
figma-assignment/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/          # InputField, SelectField, Button
│   │   ├── layout/          # Header
│   │   └── billing/         # BillingForm, OrderSummary, WalletBalance, CouponSection
│   ├── hooks/               # useFormState
│   ├── utils/               # formatCurrency
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Design Decisions

| Decision | Reason |
|----------|--------|
| `useState` in App.jsx | Single source of truth for form, coupon & wallet |
| City resets on state change | UX correctness – city belongs to a state |
| `optional` prop on InputField | Renders gray "(Optional)" label, keeps component DRY |
| Custom Tailwind tokens (`reelax.*`) | Avoids arbitrary values, keeps Figma colors consistent |
| `disabled` Country field | Country is pre-filled as India per Figma |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Mobile `< 640px` | Single column, full-width cards |
| Tablet `640px – 1024px` | 2-col form grid, stacked summary |
| Desktop `≥ 1024px` | Side-by-side form + order summary |

---

*Submitted for the Reelax React JS Assignment – May 2026*
