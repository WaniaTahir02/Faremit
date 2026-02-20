import React, { useEffect, useState } from "react";

export default function AddRecipientModal({
  show,
  onClose,
  onAdd,
  title = "Add Recipient",
  icon = null,
  countries = [], 
  banks = [],
  editingRecipient = null,
}) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    bank: "",
    accountNumber: "",
    email: "",
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  useEffect(() => {
    if (editingRecipient) {
      setFormData({
        name: editingRecipient.name || "",
        country: editingRecipient.country || (countries[0]?.code || ""),
        bank: editingRecipient.bank || "",
        accountNumber: editingRecipient.accountNumber || "",
        email: editingRecipient.email || "",
      });
    } else if (countries.length > 0) {
      setFormData((prev) => ({
        ...prev,
        country: countries[0].code,
      }));
    }
  }, [editingRecipient, countries]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (show) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [show, onClose]);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [show]);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.country || !formData.bank || !formData.accountNumber) {
      alert("Please fill all required fields");
      return;
    }

    onAdd(formData);

    setFormData({
      name: "",
      country: countries.length > 0 ? countries[0].code : "",
      bank: "",
      accountNumber: "",
      email: "",
    });

    onClose();
  };

  const selectedCountry = countries.find((c) => c.code === formData.country);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
    
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/25 transition-opacity duration-300"
      ></div>

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-xl w-full max-w-md p-6 shadow-2xl animate-modal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-semibold"
        >
          ×
        </button>

        {/* Title */}
        <div className="flex items-center gap-2 mb-5">
          {icon && <img src={icon} alt="icon" className="h-6 w-6" />}
          <h2 className="text-xl font-semibold text-[#0C0F2C]">{title}</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name of the Owner*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country *
            </label>
            <div
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
            >
              {selectedCountry ? (
                <div className="flex items-center gap-2">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="h-5 w-5 rounded-full"
                  />
                  <span>{selectedCountry.name}</span>
                </div>
              ) : (
                <span>Select Country</span>
              )}
              <span className="text-gray-400">▼</span>
            </div>

            {showCountryDropdown && (
              <div className="absolute z-20 mt-1 w-full bg-white border rounded-md shadow-md max-h-48 overflow-y-auto">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    onClick={() => {
                      setFormData({ ...formData, country: country.code });
                      setShowCountryDropdown(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="h-5 w-5 rounded-full"
                    />
                    <span>{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bank Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank *
            </label>
            <select
              name="bank"
              value={formData.bank}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">Select Bank</option>
              {banks.map((bank) => (
                <option key={bank.code} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Number *
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Enter account number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipient Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2.5 rounded-md hover:bg-indigo-700 transition"
          >
            {editingRecipient ? "Update Recipient" : "Add Recipient"}
          </button>
        </form>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes modal {
          from { opacity: 0; transform: translateY(12px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal { animation: modal 0.25s ease-out; }
      `}</style>
    </div>
  );
}