// Transfers.jsx
import React from "react";
import tImg from "../../assets/dashboard/t.png";

export default function Transfers() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#0C0F2C]">
          Transfers
        </h2>
      </div>

      {/* Search / Filters Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search name, currency"
          className="border rounded-md px-3 py-2 w-full sm:w-64"
        />

        {/* Currency */}
        <select className="border rounded-md px-3 py-2 w-full sm:w-32">
          <option>All</option>
          <option>USD</option>
          <option>EUR</option>
          <option>NGN</option>
        </select>

        {/* Transfer Date */}
        <input
          type="date"
          className="border rounded-md px-3 py-2 w-full sm:w-48"
        />
      </div>

      {/* Empty State */}
      <div className="border rounded-xl h-64 flex flex-col items-center justify-center text-gray-400">
        <img
          src={tImg}
          alt="empty"
          className="w-16 mb-4 opacity-70"
        />
        <p className="text-center px-4">
          You haven't made any transfer yet
        </p>
      </div>
    </div>
  );
}