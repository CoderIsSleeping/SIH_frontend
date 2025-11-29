"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const pathname = usePathname();

  // ACTIVE PAGE HIGHLIGHT (RECTANGULAR)
  const isActive = (path: string) =>
    pathname === path
      ? "bg-orange-700 text-white px-4 py-2"
      : "px-4 py-2";

  return (
    <header className="w-full shadow-md border-b sticky top-0 z-50 bg-white">

      {/* ================= DESKTOP STRIP ================= */}
      <div className="hidden sm:flex w-full bg-gray-200 border-b text-xs text-black">
        <div className="flex items-center justify-between w-full px-4 py-1">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Image src="/flag.webp" alt="Flag" width={22} height={14} />
            <span className="font-medium">भारत सरकार | Government of India</span>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap">
            <button className="text-gray-700 hover:underline">Skip to main content</button>

            <div className="flex gap-1">
              <button className="border px-2 py-[1px]">A+</button>
              <button className="border px-2 py-[1px]">A</button>
              <button className="border px-2 py-[1px]">A-</button>
            </div>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-3 py-1 bg-orange-600 text-white rounded"
              >
                भाषा / Language
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white border shadow rounded text-xs w-40 z-20">
                  {[
                    "English",
                    "हिन्दी (Hindi)",
                    "বাংলা (Bengali)",
                    "ਪੰਜਾਬੀ (Punjabi)",
                    "தமிழ் (Tamil)",
                    "తెలుగు (Telugu)",
                    "ગુજરાતી (Gujarati)",
                  ].map((lang, i) => (
                    <button key={i} className="w-full text-left px-3 py-1 hover:bg-gray-100">
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE STRIP ================= */}
      <div className="flex sm:hidden w-full bg-gray-200 border-b text-[7px] text-black">
        <div className="flex items-center justify-between w-full px-2 py-1 whitespace-nowrap overflow-x-auto">
          <div className="flex items-center gap-1">
            <Image src="/flag.webp" alt="Flag" width={18} height={12} />
            <span className="font-medium">भारत सरकार | Government of India</span>
          </div>

          <div className="flex items-center gap-2 text-[5px]">
            <div className="flex gap-1">
              <button className="border px-1 py-[1px]">A+</button>
              <button className="border px-1 py-[1px]">A</button>
              <button className="border px-1 py-[1px]">A-</button>
            </div>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-2 py-1 bg-orange-600 text-white rounded text-[7px]"
              >
                भाषा/Language
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white border shadow rounded text-[7px] w-32 z-20">
                  {[
                    "English",
                    "हिन्दी (Hindi)",
                    "বাংলা (Bengali)",
                    "ਪੰਜਾਬੀ (Punjabi)",
                    "தமிழ் (Tamil)",
                    "తెలుగు (Telugu)",
                    "ગુજરાતી (Gujarati)",
                  ].map((lang, i) => (
                    <button key={i} className="w-full text-left px-2 py-1 hover:bg-gray-100">
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="underline text-gray-600">Skip</button>
          </div>
        </div>
      </div>

      {/* ================= PM-AJAY SECTION ================= */}
      <div className="w-full bg-white px-3 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 text-black">
        <div className="hidden sm:flex w-full items-center justify-start gap-6">
          <Image src="/PM-AJAY.png" alt="PM-AJAY Logo" width={60} height={60} />

          <div className="text-left leading-tight">
            <h1 className="text-xl font-bold leading-snug">प्रधानमंत्री अनुसूचित जाति अभ्युदय योजना</h1>
            <h2 className="text-sm font-semibold text-gray-700 mt-1">PM-AJAY Beneficiary Cloud</h2>
            <p className="text-xs text-gray-500 mt-1">Pradhan Mantri Anusuchit Jaati Abhyuday Yojana</p>
          </div>

          <div className="ml-auto flex items-center gap-2 text-right min-w-[150px]">
            <Image src="/emplem.png" alt="Emblem" width={32} height={32} />
            <div>
              <p className="font-semibold text-[11px] whitespace-nowrap">Ministry of Social Justice & Empowerment</p>
              <p className="text-[10px] text-gray-600 whitespace-nowrap">Department of Social Justice & Empowerment</p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="sm:hidden grid grid-cols-2 w-full gap-4">
          <div className="flex flex-col items-center text-center">
            <Image src="/PM-AJAY.png" alt="PM-AJAY Logo" width={50} height={50} />
            <h1 className="text-[12px] font-bold">प्रधानमंत्री अनुसूचित जाति अभ्युदय योजना</h1>
            <p className="text-[10px] text-gray-700">PM-AJAY Beneficiary Cloud</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image src="/emplem.png" alt="Emblem" width={25} height={25} />
            <p className="font-semibold text-[10px]">Ministry of Social Justice</p>
            <p className="text-[9px] text-gray-600 leading-none">& Empowerment</p>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden sm:block bg-orange-600 text-white font-medium">
        <ul className="flex justify-center gap-8 px-4 py-2 text-sm">
          <li><Link className={isActive("/")} href="/">HOME</Link></li>
          <li><Link className={isActive("/auth/register")} href="/auth/register">REGISTRATION</Link></li>
          <li><Link className={isActive("/dashboard")} href="/dashboard">MY DASHBOARD</Link></li>
          <li><Link className={isActive("/skills")} href="/skills">SKILLS & TRAINING</Link></li>
          <li><Link className={isActive("/grievance")} href="/grievance">GRIEVANCE</Link></li>
          <li><Link className={isActive("/auth/login")} href="/auth/login">BENEFICIARY LOGIN</Link></li>
          <li><Link className={isActive("/officer/login")} href="/officer/login">OFFICER LOGIN</Link></li>
        </ul>
      </nav>

      {/* ================= MOBILE NAV BUTTON ================= */}
      <div className="sm:hidden flex justify-end px-1 bg-orange-600 text-white">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ================= MOBILE MENU (AUTO CLOSE) ================= */}
      {menuOpen && (
        <nav className="sm:hidden bg-orange-600 text-white py-1 text-sm flex flex-col gap-3 border-t border-orange-700">

          <Link onClick={() => setMenuOpen(false)} className={`py-2 border-b border-orange-500 text-left ${isActive("/")}`} href="/">HOME</Link>

          <Link onClick={() => setMenuOpen(false)} className={`py-2 border-b border-orange-500 text-left ${isActive("/auth/register")}`} href="/auth/register">REGISTRATION</Link>

          <Link onClick={() => setMenuOpen(false)} className={`py-2 border-b border-orange-500 text-left ${isActive("/dashboard")}`} href="/dashboard">MY DASHBOARD</Link>

          <Link onClick={() => setMenuOpen(false)} className={`py-2 border-b border-orange-500 text-left ${isActive("/skills")}`} href="/skills">SKILLS & TRAINING</Link>

          <Link onClick={() => setMenuOpen(false)} className={`py-2 border-b border-orange-500 text-left ${isActive("/grievance")}`} href="/grievance">GRIEVANCE</Link>

          <Link onClick={() => setMenuOpen(false)} className={`py-2 border-b border-orange-500 text-left ${isActive("/auth/login")}`} href="/auth/login">BENEFICIARY LOGIN</Link>

          <Link onClick={() => setMenuOpen(false)} className={`py-2 ${isActive("/officer/login")}`} href="/officer/login">OFFICER LOGIN</Link>

        </nav>
      )}

      {/* ================= NEWS TICKER ================= */}
      <div className="w-full bg-green-600 text-white px-4 py-1 text-xs flex items-center gap-2 overflow-hidden">
        <span className="bg-red-600 px-2 py-1 font-semibold text-[10px] whitespace-nowrap">LATEST NEWS</span>
        <marquee>
          PM-AJAY June 2025 Results Declared | Certificate Download Available | New Registrations Open
        </marquee>
      </div>

    </header>
  );
}
