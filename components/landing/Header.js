"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X, Sparkles } from "lucide-react";

const EXPIRY_DATE = new Date("2026-08-10T23:59:59");

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("learncode-header-dismissed");
    if (new Date() < EXPIRY_DATE && !dismissed) {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("learncode-header-dismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-slate-950 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 py-2 relative">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="text-neutral-300">New from ButtNetworks —</span>
            <span className="font-medium text-neutral-100">LearnCode</span>
            <span className="hidden sm:inline text-neutral-300">
              is here, learn to code by actually writing it
            </span>
            <a
              href="https://learncode.buttnetworks.com/"
              target="_blank"
              className="flex items-center gap-1 font-medium text-amber-400 hover:text-amber-300 transition-colors ml-1"
            >
              Explore
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="absolute right-0 p-1 text-neutral-300 hover:text-neutral-300 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}