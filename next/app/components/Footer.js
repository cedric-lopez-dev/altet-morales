'use client';
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer({ menuItems }) {
    return (
        <footer className="bg-[#1B1B1B] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-3 text-[#FF7BE5]" />
                                <p>3 Place de Catalogne 66000 Perpignan</p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-[#FF7BE5]" />
                                <p>04 68 51 00 19</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-[#FF7BE5]" />
                                <a href="mailto:ampr@orange.fr" className="hover:text-[#FF7BE5]">
                                    ampr@orange.fr
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Horaires */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Horaires d'ouverture</h3>
                        <div className="space-y-2">
                            <p>Lundi - Vendredi</p>
                            <p className="text-[#FF7BE5]">9:00 - 12:00 | 14:00 - 18:00</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Navigation</h3>
                        <ul className="space-y-2">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href} className="hover:text-[#FF7BE5] transition-colors duration-200">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Cabinet Aurélie Altet-Morales. Tous droits réservés.</p>
                    <Link href="/mentions-legales" className="text-[#FF7BE5] hover:text-white transition-colors duration-200">
                        Mentions légales
                    </Link>
                </div>
            </div>
        </footer>
    );
} 