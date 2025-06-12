"use client";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-white transition-colors duration-300"
      >
        <FaHome className="text-xs" />
        Accueil
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <FaChevronRight className="text-xs text-gray-600" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
