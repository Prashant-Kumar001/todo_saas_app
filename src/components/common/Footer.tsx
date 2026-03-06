import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <CheckCircle2 />
            <span className="text-lg font-semibold text-gray-900">
              TaskFlow
            </span>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
           
            <Link
              href="/testimonials"
              className="hover:text-gray-900 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/feedback"
              className="hover:text-gray-900 transition-colors"
            >
              Feedback
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
