"use client";

import { useState, useEffect } from "react";
import FancyButton from "./FancyButton";
import { Button } from "./ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["ROOMS", "OFFERS", "EVENTS", "EXPLORE", "CALENDAR"];

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (100vh)
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100); // Trigger slightly before reaching the end
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-cream" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
          {/* Left side - Logo/Brand */}
          <div
            className={`font-editorial text-lg md:text-xl tracking-wider transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-cream"
            }`}
          >
            VELOURA
          </div>

          {/* Center - Navigation Items - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="link"
                underlineColor={isScrolled ? "green" : "cream"}
                className={`font-synonym text-sm tracking-widest transition-colors duration-300 ${
                  isScrolled
                    ? "text-black hover:text-black/70"
                    : "text-cream hover:text-cream-300"
                }`}
              >
                {item}
              </Button>
            ))}
          </div>

          {/* Right side - Book button and mobile menu */}
          <div className="flex items-center gap-4">
            {/* Book button - hidden on mobile */}
            <div className="hidden md:block w-[180px]">
              <FancyButton
                gapClassName={isScrolled ? "bg-cream" : "bg-black"}
                variant={isScrolled ? "green" : "cream"}
                size="sm"
              >
                BOOK A ROOM
              </FancyButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden transition-colors duration-300 p-2 ${
                isScrolled ? "text-black" : "text-cream"
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-cream shadow-xl">
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Navigation Items */}
              <nav className="flex flex-col space-y-6 mb-8">
                {navItems.map((item) => (
                  <Button
                    key={item}
                    variant="link"
                    underlineColor="green"
                    className="font-synonym text-lg tracking-widest text-primary hover:text-primary/70 justify-start"
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </Button>
                ))}
              </nav>

              {/* Mobile Book Button */}
              <div className="mt-auto mb-8">
                <FancyButton
                  gapClassName="bg-cream"
                  variant="green"
                  className="w-full"
                  onClick={toggleMobileMenu}
                >
                  BOOK A ROOM
                </FancyButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
