import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function VerifyOtpForm() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length === 6) {
      navigate("/verify-phone"); // change route if needed
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // numbers only
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  return (
    <Form buttonText="Verify" onSubmit={handleSubmit}>
      {/* TITLE */}
      <label className="block text-sm font-semibold text-[#0C0F2C] mb-2">
        Code
      </label>

      <input
        type="text"
        placeholder="Enter 6-digit code"
        maxLength={6}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-left tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={otp}
        onChange={handleChange}
        required
      />
    </Form>
  );
}
