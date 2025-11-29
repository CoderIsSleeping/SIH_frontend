"use client";

import { ShieldCheck } from "lucide-react";

export default function RegisterForm() {
  return (
    < div className="w-full min-h-screen bg-gray-100 py-10">
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-10 space-y-6">

      {/* ===== TOP DESIGN ===== */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-orange-600 flex items-center justify-center">
          <ShieldCheck className="text-white" size={32} />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          Beneficiary Registration
        </h2>
      </div>

      {/* ===== FORM FIELDS ===== */}

      {/* Row 1: Aadhaar */}
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

      {/* Row 2: Full Name */}
      <div className="space-y-1">
        <label className="font-medium text-gray-800">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          name="fullName"
          placeholder="Enter Full Name"
          className="w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700"
          required
        />
      </div>

      {/* Row 3: Mobile + PAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="space-y-1">
          <label className="font-medium text-gray-800">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <input
            name="mobile"
            placeholder="Enter Mobile Number"
            className="w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="font-medium text-gray-800">
            PAN Number <span className="text-red-600">*</span>
          </label>
          <input
            name="pan"
            placeholder="Enter PAN Number"
            className="w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700"
            required
          />
        </div>

      </div>

      {/* Row 4: State + District */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* State Dropdown */}
        <div className="space-y-1">
          <label className="font-medium text-gray-800">
            State <span className="text-red-600">*</span>
          </label>

          <select
            name="state"
            className="
              w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700
              focus:ring-green-600 focus:border-green-600
            "
            required
          >
            <option value="">Select State</option>

            {[
              "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
              "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana",
              "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
              "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
              "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
              "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
              "Uttar Pradesh", "Uttarakhand", "West Bengal",
              "Jammu & Kashmir", "Ladakh"
            ].map((state, i) => (
              <option key={i} value={state} className="hover:bg-green-200">
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* District */}
        <div className="space-y-1">
          <label className="font-medium text-gray-800">
            District <span className="text-red-600">*</span>
          </label>
          <input
            name="district"
            placeholder="Enter District"
            className="w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700"
            required
          />
        </div>

      </div>

      {/* Row 5: Occupation */}
      <div className="space-y-1">
        <label className="font-medium text-gray-800">
          Occupation <span className="text-red-600">*</span>
        </label>

        <select
          name="occupation"
          className="
            w-full h-12 px-3 rounded border border-gray-300 bg-gray-100 text-gray-700
            focus:ring-green-600 focus:border-green-600
          "
          required
        >
          <option value="">Select Occupation</option>
          {["Student", "Farmer", "Labour", "Others"].map((occ, i) => (
            <option key={i} value={occ.toLowerCase()} className="hover:bg-green-200">
              {occ}
            </option>
          ))}
        </select>
      </div>

      {/* Row 6: Caste Certificate */}
      <div className="space-y-1">
        <label className="font-medium text-gray-800">
          Caste Certificate <span className="text-red-600">*</span>
        </label>

        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          name="casteCertificate"
          className="
            w-full h-full p-1 rounded border border-gray-300 bg-gray-100 text-gray-700
            cursor-pointer
            file:border-0 file:px-3 file:py-1 file:rounded 
            file:bg-green-600 file:text-white
            hover:file:bg-green-700
          "
          required
        />

        <p className="text-xs text-gray-500">
          Upload valid caste certificate (PDF, JPG, PNG)
        </p>
      </div>

      {/* Submit */}
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold">
        Continue to Verification
      </button>

    </div>
    </div>
  );
}
