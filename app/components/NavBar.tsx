"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Acceuil" },
  { href: "/service-tarif", label: "Tarif" },
  { href: "/contact", label: "Contact" },
];
export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center items-center h-14 z-50 shadow-sm px-4">
      <div className="text-xl space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:scale-105 transition-transform ${
              pathname === link.href
                ? "text-primary font-bold"
                : "hover:text-gray-300"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
