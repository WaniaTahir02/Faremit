
import React, { useState, useRef } from "react";
import AddRecipientModal from "../AddRecipientModal";

import usFlag from "../../assets/dashboard/USD.png";
import eurFlag from "../../assets/dashboard/EUR.png";
import ngFlag from "../../assets/hero-img/NGN flag.png";
import icon from "../../assets/dashboard/r-icon.png";
import backIcon from "../../assets/dashboard/arrow-left.png";
import transferBoxImg from "../../assets/dashboard/transfer-box.png";
import deleteIcon from "../../assets/dashboard/delete.png";

export default function Recipients() {
  const [showModal, setShowModal] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [editingRecipient, setEditingRecipient] = useState(null);

  const [showSendModal, setShowSendModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [sendCurrency, setSendCurrency] = useState("USD");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");
  const [openSend, setOpenSend] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const sendDropdownRef = useRef(null);

  const countries = [
    { code: "NGN", name: "Nigeria", flag: ngFlag },
    { code: "USD", name: "United States", flag: usFlag },
    { code: "EUR", name: "Eurozone", flag: eurFlag },
  ];

  const banks = [
    { code: "GTB", name: "Guaranty Trust Bank" },
    { code: "ZENITH", name: "Zenith Bank" },
    { code: "UBA", name: "UBA Bank" },
  ];

  const currencies = [
    { code: "USD", name: "United States Dollar", flag: usFlag },
    { code: "EUR", name: "Euro", flag: eurFlag },
    { code: "NGN", name: "Nigerian Naira", flag: ngFlag },
  ];

  const paymentMethods = ["Bank Transfer", "Debit Card"];

  const getCountryData = (code) => countries.find((c) => c.code === code);

  const handleAddRecipient = (data) => {
    if (editingRecipient) {
      const updated = recipients.map((r) =>
        r.id === editingRecipient.id ? { ...r, ...data } : r
      );
      setRecipients(updated);
      setEditingRecipient(null);
    } else {
      setRecipients([...recipients, { id: Date.now(), ...data }]);
    }
    setShowModal(false);
  };

  const handleDelete = () => {
    setRecipients(recipients.filter((r) => r.id !== selectedRecipient.id));
    setShowDeleteModal(false);
    setSelectedRecipient(null);
  };

  const filteredRecipients = recipients.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  //  DETAIL VIEW //
  if (selectedRecipient) {
    const countryData = getCountryData(selectedRecipient.country);

    return (
      <div className="min-h-screen bg-gray-50 p-4">

        <div className="flex items-center mb-5">
          <button onClick={() => setSelectedRecipient(null)}>
            <img src={backIcon} alt="Back" className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold ml-4">Recipients</h1>
        </div>

        <div className="bg-white rounded-xl shadow p-5 mb-5">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-lg">
                {selectedRecipient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <div>
                <p className="font-medium text-[#0C0F2C]">{selectedRecipient.name}</p>
                {countryData && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <img
                      src={countryData.flag}
                      alt={countryData.name}
                      className="h-4 w-4 rounded-full"
                    />
                    <span>{countryData.name}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowSendModal(true)}
                className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded hover:bg-indigo-50 transition"
              >
                Send
              </button>

              <button
                onClick={() => {
                  setEditingRecipient(selectedRecipient);
                  setShowModal(true);
                }}
                className="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-50 transition"
              >
                Edit
              </button>

              <button
                onClick={() => setShowDeleteModal(true)}
                className="border border-red-600 text-red-600 px-4 py-1 rounded hover:bg-red-50 transition flex items-center gap-1"
              >
                Delete
              </button>
            </div>
          </div>

          <hr className="my-4" />

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex gap-24">
              <p>
                <span className="font-medium">Bank</span>
                <br />
                {selectedRecipient.bank}
              </p>
              <p>
                <span className="font-medium">Account Number</span>
                <br />
                {selectedRecipient.accountNumber}
              </p>
            </div>
            <div className="flex gap-25">
              <div>
                <span className="font-medium">Email</span>
                <br />
                {selectedRecipient.email || "—"}
              </div>

              <div>
                <span className="font-medium ">Account Owner name</span>
                <br />
                {selectedRecipient.name || "—"}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex justify-center items-center mb-5">
          <img src={transferBoxImg} alt="Transfer Box" className="w-full h-auto" />
        </div>

        {showSendModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
              <button
                onClick={() => setShowSendModal(false)}
                className="absolute top-3 right-3 text-gray-400 text-xl"
              >
                ✕
              </button>

              <div className="space-y-5">

                <div className="bg-[#2F2A6B] rounded-xl py-4 text-center text-white">
                  <p className="text-xs uppercase tracking-wide">Exchange Rate</p>
                  <p className="text-2xl font-semibold mt-1">
                    1 {sendCurrency} = 1450.00 {receiveCurrency}
                  </p>
                </div>

                {/* BOX 1 - You Send */}
                <div className="border border-gray-300 rounded-xl flex overflow-visible">
                  <div className="flex-[3] px-4 py-3 flex flex-col justify-center">
                    <p className="text-xs text-gray-500">You send</p>
                    <p className="text-2xl font-semibold">200</p>
                  </div>

                  <div className="w-px bg-gray-300"></div>

                  <div className="flex-1 px-4 py-3 relative flex justify-center items-center" ref={sendDropdownRef}>
                    <button
                      onClick={() => setOpenSend(!openSend)}
                      className="flex items-center gap-2 text-sm font-medium w-full justify-center"
                    >
                      <img
                        src={currencies.find(c => c.code === sendCurrency)?.flag}
                        className="w-5 h-5"
                        alt={sendCurrency}
                      />
                      <span className="whitespace-nowrap">{sendCurrency}</span>
                      <span className={`text-xs transition-transform duration-200 ${openSend ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>

                    {openSend && (
                      <div className="absolute right-0 top-full mt-2 w-60 sm:w-64 max-h-60 overflow-y-auto bg-white border rounded-lg shadow-xl z-50">
                        {currencies.map(({ code, name, flag }) => (
                          <div
                            key={code}
                            onClick={() => { setSendCurrency(code); setOpenSend(false); }}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-[#F8F8FE] cursor-pointer transition-colors"
                          >
                            <img src={flag} className="w-5 h-5" alt={name} />
                            <div>
                              <p className="text-sm font-medium">{code}</p>
                              <p className="text-xs text-gray-500">{name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* BOX 2 - Payment Method */}
                <div className="border border-gray-300 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1 font-bold">Payment method</p>

                  <div className="relative">
                    <button
                      onClick={() => setOpenPayment(!openPayment)}
                      className="w-full flex justify-between items-center text-lg font-medium"
                    >
                      <span>{paymentMethods[0]}</span>
                      <span className={`text-xs ${openPayment ? "rotate-180" : ""}`}>▼</span>
                    </button>

                    {openPayment && (
                      <div className="absolute left-0 top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-50">
                        {paymentMethods.map(method => (
                          <div
                            key={method}
                            onClick={() => { setOpenPayment(false); }}
                            className="px-3 py-2 hover:bg-[#F8F8FE] cursor-pointer text-sm"
                          >
                            {method}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* BOX 3 - Breakdown */}
                <div className="border border-gray-300 bg-[#F8F8FE] rounded-xl p-4 text-sm space-y-3">
                  <div className="flex justify-between">
                    <span>Fee</span>
                    <span>2.99 {sendCurrency}</span>
                  </div>

                  <div className="flex justify-between font-semibold">
                    <span>Total payable</span>
                    <span>202.99 {sendCurrency}</span>
                  </div>
                </div>

                {/* BOX 4 - Recipient Gets */}
                <div className="border border-gray-300 rounded-xl flex overflow-hidden">
                  <div className="flex-[3] px-4 py-3 flex flex-col justify-center">
                    <p className="text-xs text-gray-500 font-bold">Recipient gets</p>
                    <p className="text-2xl font-semibold">200,000</p>
                  </div>

                  <div className="w-px bg-gray-300"></div>

                  <div className="flex-1 px-4 py-3 relative flex justify-center items-center">
                    <button
                      onClick={() => setOpenReceive(!openReceive)}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <img
                        src={currencies.find(c => c.code === receiveCurrency)?.flag}
                        className="w-5 h-5"
                        alt={receiveCurrency}
                      />
                      <span>{receiveCurrency}</span>
                      <span className={`text-xs ${openReceive ? "rotate-180" : ""}`}>▼</span>
                    </button>

                    {openReceive && (
                      <div className="absolute right-0 top-full mt-1 w-52 bg-white border rounded-lg shadow-lg z-50">
                        {currencies.map(({ code, name, flag }) => (
                          <div
                            key={code}
                            onClick={() => { setReceiveCurrency(code); setOpenReceive(false); }}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-[#F8F8FE] cursor-pointer"
                          >
                            <img src={flag} className="w-5 h-5" alt={name} />
                            <span className="text-sm">{code} - {name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setShowSendModal(false)}
                    className="flex-1 border rounded-md py-2 bg-white text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert("Transfer Sent!");
                      setShowSendModal(false);
                    }}
                    className="flex-1 bg-[#2F2A6B] text-white rounded-md py-2 "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*  DELETE MODAL  */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="absolute top-3 right-3 text-gray-400 text-xl"
              >
                ✕
              </button>

              <div className="text-center space-y-1">
                <img src={deleteIcon} alt="Delete" className="w-10 h-10" />

                <h2 className="text-lg font-semibold text-left">Delete Recipient</h2>
                <p className="text-sm text-gray-500 text-left">
                  This recipient will be deleted
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="flex-1 border rounded-md py-2 bg-white"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex-1 bg-red-600 text-white rounded-md py-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDIT MODAL */}
        <AddRecipientModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onAdd={handleAddRecipient}
          title="Edit Recipient"
          icon={icon}
          countries={countries}
          banks={banks}
          editingRecipient={editingRecipient}
        />
      </div>
    );
  }

  // LIST VIEW 
  return (
    <div className="flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between mb-5">
          <h2 className="text-xl font-semibold">Recipients</h2>
        </div>

        <div className="mb-5 flex gap-3">
          <input
            type="text"
            placeholder="Search name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-md px-4 py-2"
          />
          <button
            onClick={() => {
              setEditingRecipient(null);
              setShowModal(true);
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            + Add Recipient
          </button>
        </div>

        {filteredRecipients.length === 0 && (
          <p className="text-gray-400 text-sm"></p>
        )}

        <div className="space-y-3">
          {filteredRecipients.map((recipient) => {
            const countryData = getCountryData(recipient.country);
            return (
              <div
                key={recipient.id}
                className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedRecipient(recipient)}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                    {recipient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-[#0C0F2C]">{recipient.name}</p>
                    {countryData && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <img
                          src={countryData.flag}
                          alt={countryData.name}
                          className="h-4 w-4 rounded-full"
                        />
                        <span>
                          {countryData.name} • {recipient.accountNumber}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-gray-400 text-lg">{">"}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ADD / EDIT MODAL */}
      <AddRecipientModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddRecipient}
        title={editingRecipient ? "Edit Recipient" : "Add Recipient"}
        icon={icon}
        countries={countries}
        banks={banks}
        editingRecipient={editingRecipient}
      />
    </div>
  );
}