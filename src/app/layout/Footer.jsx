
import Link from "next/link";
import {
  BookOpen,
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#12382e] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <BookOpen size={28} />
            </div>

            <span className="text-2xl font-extrabold">
              BookNook
            </span>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-300">
            Your little corner of knowledge and imagination.
            Discover wonderful books, borrow your favorites,
            and make reading a part of your everyday life.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <Globe size={19} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <Globe size={19} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <Globe size={19} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-lg font-bold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/books" className="hover:text-white">
              All Books
            </Link>
            <Link href="/login" className="hover:text-white">
              Login
            </Link>
            <Link href="/register" className="hover:text-white">
              Register
            </Link>
          </div>
        </div>

        {/* Library */}
        <div>
          <h3 className="mb-6 text-lg font-bold">
            Our Library
          </h3>

          <div className="flex flex-col gap-4 text-sm text-gray-300">
            <Link href="/books" className="hover:text-white">
              Explore Books
            </Link>
            <Link href="/add-book" className="hover:text-white">
              Add a Book
            </Link>
            <Link href="/my-books" className="hover:text-white">
              My Books
            </Link>
            <Link href="/my-borrowed-books" className="hover:text-white">
              My Borrows
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-lg font-bold">
            Contact Us
          </h3>

          <div className="flex flex-col gap-5 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <Mail size={19} className="shrink-0 text-[#d5b17c]" />
              <span>support@booknook.com</span>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={19} className="shrink-0 text-[#d5b17c]" />
              <span>+880 1700-000000</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={19} className="shrink-0 text-[#d5b17c]" />
              <span>Bangladesh</span>
            </div>

            <Link
              href="/books"
              className="mt-2 inline-flex items-center gap-2 font-semibold text-[#e5c28e] hover:text-white"
            >
              Explore Library <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-sm text-gray-400">
          © 2026 BookNook. All rights reserved.
          Made for book lovers.
        </div>
      </div>
    </footer>
  );
}


