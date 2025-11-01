import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AuthenticationPage from "./pages/Authentication/AuthenticationPage";
import HomePage from "./pages/HomePage/HomePage";
import OtpPage from "./pages/OTPpage/OtpPage";
import ForgotPasswordPage from "./pages/Authentication/ForgotPasswordPage";

function App() {
  // -----------------------------------------------------
  // 🎯 TESTING MODE: Uncomment ONLY ONE of the return statements below
  // to run a single page for isolated testing.
  // -----------------------------------------------------

  //return <LandingPage onNavigate={() => {}} />; // 1. Test the Landing Page
  // return <AuthenticationPage onLoginSuccess={() => {}} onSignupSuccess={() => {}} onNavigate={() => {}} />; // 2. Test Login/Signup
  // return <OtpPage userEmail="test@example.com" onOtpSuccess={() => {}} onNavigate={() => {}} />; // 3. Test OTP Page
  //return <ForgotPasswordPage onNavigate={() => {}} />; // 4. Test Forgot Password Page
  //return <HomePage onLogout={() => {}} />; // 5. Test Home Page (requires mock token in localStorage)

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_info");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <HomePage onLogout={handleLogout} />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
