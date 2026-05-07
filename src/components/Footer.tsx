"use client";

import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Send,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Universities", href: "/universities" },
    { label: "Courses", href: "/courses" },
    { label: "About Albania", href: "/about" },
    { label: "Admin Panel", href: "/admin" },
  ],
  resources: [
    { label: "Application Guide", href: "#" },
    { label: "Visa Information", href: "#" },
    { label: "Scholarships", href: "#" },
    { label: "Student Housing", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Live Chat", href: "#" },
    { label: "Partner With Us", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 dark:from-indigo-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="relative -mt-16 mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-2xl shadow-indigo-500/20 gradient-animate">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-indigo-100 mt-2 text-lg">
                  Join thousands of international students studying in Albania.
                </p>
              </div>
              <Link
                href="/universities"
                className="flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get Started
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Study<span className="text-indigo-600 dark:text-indigo-400">Albania</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your gateway to affordable, high-quality European education.
              Discover world-class universities and programs in the heart of the
              Balkans.
            </p>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Tirana, Albania
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                +355 69 123 4567
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                info@studyalbania.edu
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} StudyAlbania. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Globe, MessageCircle, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-indigo-500/20 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
