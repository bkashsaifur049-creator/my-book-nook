
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Menu,
  X,
  UserRound,
  LogOut,
  UserCircle,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  // Temporary demo login state
  // Later we will connect Auth.js
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/books" },
  ];

  const privateLinks = [
    { name: "Add Book", href: "/add-book" },
    { name: "My Books", href: "/my-books" },
    { name: "My Borrows", href: "/my-borrowed-books" },
  ];

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e7df] bg-[#fffef9]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#174c3c] text-white">
            <BookOpen size={25} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-[#174c3c]">
              BookNook
            </h1>
            <p className="text-[10px] tracking-[2px] text-gray-500">
              YOUR LITTLE LIBRARY
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-[#174c3c]"
            >
              {link.name}
            </Link>
          ))}

          {user &&
            privateLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-[#174c3c]"
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {!user ? (
            <>
              <Link
                href="/login"
                className="hidden rounded-full border border-[#174c3c] px-5 py-2.5 text-sm font-semibold text-[#174c3c] transition hover:bg-[#174c3c] hover:text-white sm:block"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-[#174c3c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#10392d]"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-gray-200 p-1.5 pr-3 hover:bg-gray-50"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-xl border border-gray-100 bg-white p-3 shadow-xl">
                  <div className="border-b border-gray-100 px-3 py-3">
                    <p className="font-bold text-[#174c3c]">
                      {user.name}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <UserCircle size={18} />
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="rounded-lg p-2 text-[#174c3c] hover:bg-gray-100 lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {publicLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[#174c3c]"
              >
                {link.name}
              </Link>
            ))}

            {user &&
              privateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-[#174c3c]"
                >
                  {link.name}
                </Link>
              ))}

            {!user ? (
              <>
                <Link href="/login" className="text-sm font-semibold text-[#174c3c]">
                  Login
                </Link>
                <Link href="/register" className="text-sm font-semibold text-[#174c3c]">
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile" className="text-sm font-semibold text-[#174c3c]">
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left text-sm font-semibold text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
