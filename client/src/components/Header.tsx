/**
 * Design Philosophy: Modern Professional with Trust-Building
 * - Solid Black background with bright Yellow accents
 * - Clean, spacious navigation with clear CTAs
 * - Services dropdown with all trade pages
 * - Prominent B2B link for property managers
 */

import { Button } from "@/components/ui/button";
import { BadgeCheck, ChevronDown, Clock, Menu, Phone, Star, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";

const serviceLinks = [
  { href: "/painting-decorating", label: "Painting & Decorating" },
  { href: "/carpentry", label: "Carpentry & Joinery" },
  { href: "/kitchen-fitting", label: "Kitchen Fitting" },
  { href: "/bathroom-renovations", label: "Bathroom Renovations" },
  { href: "/flooring", label: "Flooring" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/electrical", label: "Electrical" },
  { href: "/general-repairs", label: "General Repairs" },
  { href: "/flat-pack-assembly", label: "Flat Pack Assembly" },
  { href: "/garden-outdoor", label: "Garden & Outdoor" },
  { href: "/media-walls", label: "Media Walls" },
  { href: "/elderly-care", label: "Elderly Care & Adaptations" },
  { href: "/smart-home", label: "Smart Home Installation" },
  { href: "/mesh-networks", label: "Mesh Networks" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/b2b", label: "For Landlords & Agents" },
  ];

  const isServicePage = serviceLinks.some((link) => location === link.href);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Brand Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-xs font-bold border-b border-primary-foreground/10">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <BadgeCheck className="w-3 h-3 mr-1" />
              No Call-Out Fees
            </span>
            <span className="hidden sm:flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              Fixed Rate: £45/hr
            </span>
            <span className="hidden md:flex items-center">
              <Star className="w-3 h-3 mr-1 fill-primary-foreground" />
              Local Hereford Experts
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:07494273251" className="hover:underline flex items-center">
              <Phone className="w-3 h-3 mr-1" />
              07494 273 251
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full border-b border-white/10 bg-black/95 text-white backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo area */}
            <Link href="/" className="flex items-center group shrink-0 py-2">
              <img src="/images/logo.png" alt="Hereford Handyman" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide uppercase transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-white/80"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center text-sm font-bold tracking-wide uppercase transition-colors hover:text-primary ${isServicePage ? "text-primary" : "text-white/80"
                    }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-black border border-white/10 rounded-lg shadow-2xl p-4 z-50">
                    <div className="grid grid-cols-2 gap-1 text-white">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`block px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors hover:bg-white/10 hover:text-primary ${location === link.href ? "text-primary bg-white/5" : "text-white/60"
                            }`}
                          onClick={() => setServicesOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest text-[10px] px-6 py-5">
                Book Online
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/10 bg-black text-white slide-in-from-top-1 animate-in">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-black uppercase tracking-tighter px-2 px-2 py-2 ${location === link.href ? "text-primary" : "text-white/80"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  className={`flex items-center justify-between text-lg font-black uppercase tracking-tighter px-2 py-2 ${isServicePage ? "text-primary" : "text-white/80"
                    }`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 grid grid-cols-1 gap-1">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm font-bold uppercase tracking-wider px-2 py-2 rounded ${location === link.href ? "text-primary bg-white/5" : "text-white/60"
                          }`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="mt-4 pt-6 border-t border-white/10">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest w-full py-8 text-lg">
                    Book Online Today
                  </Button>
                  <a href="tel:07494273251" className="flex items-center justify-center mt-6 text-xl font-bold text-white">
                    <Phone className="w-6 h-6 mr-3 text-primary" />
                    07494 273 251
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
