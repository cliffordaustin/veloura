import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Accommodations", href: "#rooms" },
  { name: "Spa & Wellness", href: "#spa" },
  { name: "Fine Dining", href: "#dining" },
  { name: "Event Spaces", href: "#events" },
  { name: "Business Center", href: "#business" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-32 h-10 mb-4">
              <div
                className={`font-editorial text-xl tracking-wider transition-colors duration-300 text-cream`}
              >
                VELOURA
              </div>
            </div>
            <p className="font-synonym text-white/70 text-sm leading-relaxed">
              Experience unparalleled luxury and sophistication at Veloura.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-editorial text-lg tracking-[0.15em] text-cream mb-6">
              EXPLORE
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href="/"
                  className="block font-synonym text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-editorial text-lg tracking-[0.15em] text-cream mb-6">
              CONTACT
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white/60" />
                <a
                  href="tel:+1-555-VELOURA"
                  className="font-synonym text-white/70 hover:text-white transition-colors text-sm"
                >
                  +233 (555) VELOURA
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white/60" />
                <a
                  href="mailto:reservations@veloura.com"
                  className="font-synonym text-white/70 hover:text-white transition-colors text-sm"
                >
                  reservations@veloura.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5" />
                <p className="font-synonym text-white/70 text-sm">
                  123 Luxury Apartment
                  <br />
                  Tema Community 1, Accra
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-editorial text-lg tracking-[0.15em] text-cream mb-6">
              FOLLOW
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white/60 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-synonym text-white/60 text-sm">
            © 2025 Veloura Luxury Hotel. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="font-synonym text-white/60 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-synonym text-white/60 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
