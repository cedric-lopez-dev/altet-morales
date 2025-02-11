'use client';
import Link from "next/link";
import { Phone, Mail, Scale } from "lucide-react";
import { usePathname } from 'next/navigation';

export default function Header({ menuItems }) {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-[#1B1B1B] py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:ampr@orange.fr" className="text-sm hover:text-[#FF7BE5]">
                  ampr@orange.fr
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">04 68 51 00 19</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo & Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Scale className="w-12 h-12 text-[#FF7BE5]" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Aurélie Altet-Morales</span>
              <span className="text-sm text-gray-600">Avocat à Perpignan</span>
            </div>
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${pathname === item.href
                      ? 'text-[#FF7BE5] font-medium'
                      : 'text-gray-800 hover:text-[#FF7BE5]'
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
} 