const CurrencyCard = () => {
  return (
    <div className="flex-1 max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="mb-4">
        <span className="text-gray-400 text-sm">Amount</span>
        <input
          type="number"
          placeholder="200"
          className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-lg"
        />
      </div>

      <div className="mb-4">
        <span className="text-gray-400 text-sm">Currency</span>
        <select className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-lg">
          <option>USD</option>
          <option>GBP</option>
          <option>EUR</option>
        </select>
      </div>

      <div className="mb-4">
        <span className="text-gray-400 text-sm">Payment Method</span>
        <select className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-lg">
          <option>Bank Transfer</option>
          <option>Card Payment</option>
        </select>
      </div>

      <div className="mt-6">
        <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600">
          Send Money Now
        </button>
      </div>
    </div>
  );
};

export default CurrencyCard;
