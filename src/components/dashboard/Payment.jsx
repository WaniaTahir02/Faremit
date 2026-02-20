// Payment.jsx
import React from "react";
import deleteIcon from "../../assets/dashboard/delete.png";
import ngFlag from "../../assets/hero-img/NGN flag.png";

export default function Payment() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#0C0F2C] mb-6">
        Payment Methods
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* LEFT BOX */}
        <div className="bg-[#0C0F2C] text-white rounded-xl p-5 relative">
          <div className="flex items-start gap-3 mb-4">
            <div className=" h-6 w-6 rounded-full flex items-center justify-center">
              <img src={ngFlag} alt="NGN Flag" className="h-4 w-4" />
            </div>
            <br></br>
             

           
          </div>
 <p className="text-sm mb-2 ">
                Account name: <span className="font-medium">Akwa Abasiekeme Greco</span>
              </p>
          <p className="text-sm mb-2">
            Bank: <span className="font-medium">Access Bank</span>
          </p>
          <p className="text-sm">
            Account Number: <span className="font-medium">0123456789</span>
          </p>

          {/* Delete Button with image */}
          <button className="absolute bottom-4 right-4  p-2 rounded-full ">
            <img src={deleteIcon} alt="Delete" className="h-7 w-7" />
          </button>
        </div>

        {/* RIGHT BOX */}
        <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center">
          <p className="text-gray-600 mb-4">
            Add another bank account
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}