"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="w-full shadow-md border-b">

      {/* ===== TOP STRIP ===== */}
      <div
        className="
          w-full bg-gray-200
          flex flex-wrap 
          justify-between 
          items-center 
          px-3 py-1  
          border-b 
          text-xs
          gap-y-1
        "
      >
        {/* LEFT: Flag + Bharat Sarkar */}
        <div className="flex items-center gap-1 whitespace-nowrap">
          <Image src="/flag.webp" alt="Flag" width={22} height={14} />
          <span className="font-medium text-[10px] sm:text-xs">
            भारत सरकार | Government of India
          </span>
        </div>

        {/* RIGHT: Accessibility + Language */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">

          {/* Skip (desktop only) */}
          <button className="hidden sm:inline text-[10px] text-gray-700 hover:underline">
            Skip to main content
          </button>

          {/* A+, A, A- */}
          <div className="flex gap-1">
            <button className="border px-1 py-[1px] text-[10px]">A+</button>
            <button className="border px-1 py-[1px] text-[10px]">A</button>
            <button className="border px-1 py-[1px] text-[10px]">A-</button>
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-2 py-1 bg-orange-600 text-white rounded text-[10px] sm:text-xs"
            >
              भाषा / Language
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white border shadow rounded text-xs w-40 z-20">
                {[
                  "English",
                  "हिन्दी (Hindi)",
                  "বাংলা (Bengali)",
                  "ਪੰਜਾਬੀ (Punjabi)",
                  "தமிழ் (Tamil)",
                  "తెలుగు (Telugu)",
                  "ગુજરાતી (Gujarati)",
                ].map((lang, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-1 hover:bg-gray-100"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== PM AJAY SECTION ===== */}
      <div
        className="
          w-full bg-white px-3 py-3 
          flex flex-col sm:flex-row 
          items-center justify-between 
          gap-4
        "
      >

        {/* ========= DESKTOP LAYOUT (LOGO + TITLE CLOSER) ========= */}
        <div className="hidden sm:flex w-full items-center justify-start gap-6">

          {/* LEFT: PM-AJAY Logo */}
          <Image
            src="/PM-AJAY.png"
            alt="PM-AJAY Logo"
            width={60}
            height={60}
            className="w-[60px]"
          />

          {/* CENTER: TITLE BLOCK */}
          <div className="text-left leading-tight">
            <h1 className="text-xl font-bold leading-snug">
              प्रधानमंत्री अनुसूचित जाति अभ्युदय योजना
            </h1>
            <h2 className="text-sm font-semibold text-gray-700 leading-none mt-1">
              PM-AJAY Beneficiary Cloud
            </h2>
            <p className="text-xs text-gray-500 leading-none mt-1">
              Pradhan Mantri Anusuchit Jaati Abhyuday Yojana
            </p>
          </div>

          {/* RIGHT: EMBLEM + MINISTRY */}
          <div className="ml-auto flex items-center gap-2 text-right min-w-[150px]">
            <Image
              src="/emplem.png"
              alt="Emblem"
              width={32}
              height={32}
              className="w-[32px]"
            />
            <div className="leading-tight">
              <p className="font-semibold text-[11px] whitespace-nowrap leading-tight">
                Ministry of Social Justice & Empowerment
              </p>
              <p className="text-[10px] text-gray-600 whitespace-nowrap leading-tight">
                Department of Social Justice & Empowerment
              </p>
            </div>
          </div>
        </div>

        {/* ========= MOBILE TWO-COLUMN LAYOUT ========= */}
        <div className="sm:hidden grid grid-cols-2 w-full gap-4">

          {/* COLUMN 1: LOGO + TITLE */}
          <div className="flex flex-col items-center text-center leading-tight">
            <Image
              src="/PM-AJAY.png"
              alt="PM-AJAY Logo"
              width={55}
              height={55}
              className="w-[55px] mb-1"
            />

            <h1 className="text-[12px] font-bold leading-snug">
              प्रधानमंत्री अनुसूचित जाति अभ्युदय योजना
            </h1>
            <p className="text-[10px] text-gray-700 font-semibold leading-none mt-1">
              PM-AJAY Beneficiary Cloud
            </p>
          </div>

          {/* COLUMN 2: EMBLEM + MINISTRY */}
          <div className="flex flex-col items-center text-center leading-tight">
            <Image
              src="/emplem.png"
              alt="Emblem"
              width={35}
              height={35}
              className="w-[35px]"
            />

            <p className="font-semibold text-[10px] mt-1 whitespace-nowrap leading-snug">
              Ministry of Social Justice
            </p>
            <p className="text-[9px] text-gray-600 whitespace-nowrap leading-none">
              & Empowerment
            </p>
            <p className="text-[8px] text-gray-600 whitespace-nowrap leading-none">
              Department of Social Justice
            </p>
          </div>
        </div>
      </div>

      {/* ===== NAVBAR (DESKTOP) ===== */}
      <nav className="hidden sm:block bg-orange-600 text-white font-medium">
        <ul className="flex justify-center gap-8 px-4 py-2 text-sm">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/registration">REGISTRATION</Link></li>
          <li><Link href="/dashboard">MY DASHBOARD</Link></li>
          <li><Link href="/skills">SKILLS & TRAINING</Link></li>
          <li><Link href="/grievance">GRIEVANCE</Link></li>
          <li><Link href="/login">OFFICER LOGIN</Link></li>
        </ul>
      </nav>

      {/* ===== NAV BUTTON (MOBILE) ===== */}
      <div className="sm:hidden flex justify-end px-4 py-2 bg-orange-600 text-white">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <nav
          className="
            sm:hidden 
            bg-orange-600 
            text-white 
            px-4 py-3 
            text-sm 
            flex flex-col 
            gap-3 
            border-t border-orange-700
          "
        >
          <Link className="py-2 border-b border-orange-500 text-left" href="/">HOME</Link>
          <Link className="py-2 border-b border-orange-500 text-left" href="/registration">REGISTRATION</Link>
          <Link className="py-2 border-b border-orange-500 text-left" href="/dashboard">MY DASHBOARD</Link>
          <Link className="py-2 border-b border-orange-500 text-left" href="/skills">SKILLS & TRAINING</Link>
          <Link className="py-2 border-b border-orange-500 text-left" href="/grievance">GRIEVANCE</Link>
          <Link className="py-2 text-left" href="/login">OFFICER LOGIN</Link>
        </nav>
      )}

      {/* ===== NEWS TICKER ===== */}
      <div className="w-full bg-green-600 text-white px-4 py-2 text-xs flex items-center gap-2 overflow-hidden">
        <span className="bg-red-600 px-2 py-1 font-semibold text-[10px] whitespace-nowrap">
          LATEST NEWS
        </span>
        <marquee>
          PM-AJAY June 2025 Results Declared | Certificate Download Available | New Registrations Open
        </marquee>
      </div>

    </header>
  );
}
