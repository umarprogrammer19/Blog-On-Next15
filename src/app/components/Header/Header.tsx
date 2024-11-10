"use client"
import Image from "next/image";
import logo from "../../public/logo.jpg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="w-10 h-10 bg-white rounded-full" />
          <span className="ml-3 text-xl font-bold">Next.js 15</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          {/* Add additional nav items here */}
        </nav>
        <Link href="https://nextjs.org/blog/next-15">
          <button className="relative inline-flex items-center py-2 px-4 text-base font-medium text-white bg-gray-900 border border-transparent rounded-full transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg sparkle-button">
            Documentation
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>

      <style jsx>{`
        .sparkle-button {
          position: relative;
          overflow: hidden;
        }
        .sparkle-button::before {
          content: '';
          position: absolute;
          width: 300%;
          height: 300%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%);
          animation: sparkle 1.5s infinite;
          opacity: 0;
        }
        @keyframes sparkle {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(0.8);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}