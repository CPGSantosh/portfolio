import React from "react";
import {
  FileText,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Globe,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Tax Planning & Compliance",
    "Audit & Assurance",
    "Financial Consulting",
    "Business Advisory",
    "Risk Management",
    "Accounting Services",
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Yubraj Chapagain
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              CA Student & Financial Consultant specializing in modern
              accounting solutions, tax planning, and business advisory
              services.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:cpg@yubrajchapagain.com.np"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>cpg@yubrajchapagain.com.np</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((svc, i) => (
                <li key={i}>
                  <span className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {svc}
                  </span>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200"
                >
                  View All Services →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
      
      </div>
    </footer>
  );
};

export default Footer;
