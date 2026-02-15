/**
 * Design Philosophy: Modern Professional with Trust-Building
 * - Clean footer with essential links and trust signals
 * - Local business emphasis and trust signals
 * - Full service page links for SEO internal linking
 */

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hereford Handyman</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Fixed-rate, digital-first handyman service for Hereford and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link href="/elderly-care" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home Adaptations</Link></li>
              <li><Link href="/media-walls" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Media Walls</Link></li>
              <li><Link href="/b2b" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">For Landlords & Agents</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/painting-decorating" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Painting & Decorating</Link></li>
              <li><Link href="/carpentry" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Carpentry & Joinery</Link></li>
              <li><Link href="/kitchen-fitting" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Kitchen Fitting</Link></li>
              <li><Link href="/bathroom-renovations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Bathroom Renovations</Link></li>
              <li><Link href="/flooring" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Flooring</Link></li>
              <li><Link href="/plumbing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Plumbing</Link></li>
              <li><Link href="/electrical" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Electrical</Link></li>
              <li><Link href="/general-repairs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">General Repairs</Link></li>
              <li><Link href="/flat-pack-assembly" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Flat Pack Assembly</Link></li>
              <li><Link href="/garden-outdoor" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Garden & Outdoor</Link></li>
              <li><Link href="/media-walls" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Media Walls</Link></li>
              <li><Link href="/mesh-networks" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Mesh Networks</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:07494273251" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  07494 273 251
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@herefordhandymen.co.uk" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@herefordhandymen.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/447806993293" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  WhatsApp: 07806 993 293
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Serving Hereford, Tupsley (HR1), Whitecross (HR4), Holmer & Bobblestock</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <p>&copy; 2026 Hereford Handyman. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="font-semibold text-accent">✓ Fully Insured</span>
              <span className="font-semibold text-accent">✓ Fully Insured</span>
              <span className="font-semibold text-accent">✓ Local Business</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
