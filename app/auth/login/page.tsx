"use client";

import { ShieldCheck } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-10 space-y-6">

        {/* ===== TOP DESIGN ===== */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-orange-600 flex items-center justify-center">
            <ShieldCheck className="text-white" size={32} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            Beneficiary Login
          </h2>
        </div>

        {/* ===== FORM FIELDS ===== */}

        {/* Aadhaar Number */}
        <div className="space-y-1">
          <label className="font-medium text-gray-800">
            Aadhaar Number <span className="text-red-600">*</span>
          </label>
          <input
            name="aadhaar"
            placeholder="XXXX XXXX XXXX"
            className="w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700"
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="space-y-1">
          <label className="font-medium text-gray-800">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <input
            name="mobile"
            placeholder="Enter Your Password"
            className="w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold">
          Login
        </button>

        {/* Register Redirect */}
        <p className="text-center text-sm text-gray-600">
          New user?{" "}
          <a href="/auth/register" className="text-orange-600 font-semibold">
            Register here
          </a>
        </p>

      </div>
    </div>
  );
}
