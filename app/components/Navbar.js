'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  MessageSquare,
  Phone,
  LineChart,
  LogOut,
  User2
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { data: session } = useSession();

  const handleDarkMode = () => {
    const darkModeOn = !isDarkMode;
    setIsDarkMode(darkModeOn);
    document.body.classList.toggle('dark-mode', darkModeOn);
    localStorage.setItem('theme', darkModeOn ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    if (isDark) document.body.classList.add('dark-mode');
  }, []);

  return (
    <nav className="Navbar bg-gray-300  p-4 h-auto relative z-10 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-[30px] font-bold">TradeX</h1>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link
              href="#home"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="#charts"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <MessageSquare size={18} /> Charts
            </Link>
          </li>
          <li>
            <Link
              href="#prices"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <LineChart size={18} /> Live Prices
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <User2 size={18} /> Profile
            </Link>
          </li>
          <li>
            <button onClick={handleDarkMode} className="text-2xl mt-[8px]">
              {isDarkMode ? <Moon size={22} /> : <Sun size={22} />}
            </button>
          </li>
          {session?.user && (
            <li className="relative group">
              <Image
                src={session.user.image}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full cursor-pointer border-2 border-gray-400 dark:border-gray-600"
              />
              <button
                onClick={() => signOut()}
                className="absolute top-10 right-0 flex items-center gap-1 bg-red-500 px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white"
              >
                <LogOut size={16} /> Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 w-[160px] mx-auto text-center rounded-lg py-4 shadow-lg">
          <li>
            <Link
              href="#home"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="#chats"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <MessageSquare size={18} /> Chats
            </Link>
          </li>
          <li>
            <Link
              href="#prices"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <LineChart size={18} /> Live Prices
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <User2 size={18} /> Profile
            </Link>
          </li>
          <li>
            <button
              onClick={handleDarkMode}
              className="flex items-center ml-5 justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />} Theme
            </button>
          </li>
          {session?.user && (
            <li className="flex flex-col items-center gap-2">
              <Image
                src={session.user.image}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full border-2 border-gray-400 dark:border-gray-600"
              />
              <button
                onClick={() => signOut()}
                className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded text-sm"
              >
                <LogOut size={16} /> Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
