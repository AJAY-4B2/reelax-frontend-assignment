import React, { useState } from 'react';
import { Search, Plus, TrendingUp, User, Menu } from 'lucide-react';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="bg-white border-b border-reelax-border">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 gap-4">

        {/* Search Bar */}
        <div className="flex-1 max-w-[340px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-reelax-placeholder pointer-events-none" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Find influencers to collaborate with"
            className="w-full pl-9 pr-3 py-2 text-sm border border-reelax-border rounded-md
              text-reelax-text placeholder:text-reelax-placeholder bg-white
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Upgrade */}
          <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5
            bg-reelax-orange text-white text-sm font-medium rounded-md
            hover:bg-amber-500 transition-colors">
            <TrendingUp className="w-3.5 h-3.5" />
            Upgrade
          </button>

          {/* Create Campaign */}
          <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5
            bg-brand-600 text-white text-sm font-medium rounded-md
            hover:bg-brand-700 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Create Campaign
          </button>

          {/* Avatar */}
          <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center
            hover:bg-gray-300 transition-colors flex-shrink-0">
            <User className="w-4 h-4 text-gray-500" />
          </button>

          {/* Hamburger */}
          <button className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
