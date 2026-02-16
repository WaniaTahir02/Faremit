import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import VerifyEmail from "../pages/VerifyEmail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
    </Routes>
  );
}
