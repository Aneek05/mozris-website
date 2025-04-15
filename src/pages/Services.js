import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Corporate Catering",
      description: "Daily meal solutions designed for corporate offices with customizable menus, hygiene assurance, and on-time delivery.",
      icon: "/icons/corporate.png",
    },
    {
      title: "Packed Meals",
      description: "Convenient, hygienic, and fresh packed meals ideal for employees, events, and government setups.",
      icon: "/icons/packed.png",
    },
    {
      title: "Event Catering",
      description: "From festivals to corporate gatherings, we offer themed and flexible catering for all occasions.",
      icon: "/icons/event.png",
    },
    {
      title: "Festival Menus",
      description: "Seasonal and culturally rich menu offerings that bring celebration to every plate.",
      icon: "/icons/festival.png",
    },
    {
      title: "Pop-Up Counters",
      description: "Temporary food counters at your premises for festivals, workshops, or celebrations with live food options.",
      icon: "/icons/popup.png",
    },
    {
      title: "Tuck Shops",
      description: "Mini retail setups within office spaces offering fresh snacks, beverages, and quick bites.",
      icon: "/icons/tuck.png",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#e0f7fa] to-[#e8f5e9] text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 bg-black shadow-md sticky top-0 z-50 h-20">
        <img src="/mozris-logo.png" alt="Mozris Logo" className="max-h-16 md:max-h-20 w-auto object-contain" />
        <nav className="flex gap-6 font-medium text-white text-sm">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/about" className="hover:text-orange-400">About Us</a>
          <a href="/services" className="hover:text-orange-400">Services</a>
          <a href="/contact" className="hover:text-orange-400">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
<section className="relative w-full h-[80vh] overflow-hidden">
  <img
    src="/hero1.jpg"
    alt="Mozris Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60 text-white text-center px-6">
    <h1 className="text-5xl font-serif font-semibold">Services</h1>
  </div>
</section>

      {/* Quote */}
      <section className="bg-[#eafaf0] py-8 text-center">
        <p
          onClick={() => window.location.href = "/contact"}
          className="text-lg font-medium text-blue-900 cursor-pointer hover:underline"
        >
          Let’s craft the perfect catering solution for you — click here to get a personalized quote.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
              <img
                src={service.icon}
                alt={service.title}
                className="h-24 w-24 mx-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div>
            <img src="/mozris-logo.png" alt="Mozris Logo" className="max-h-16 md:max-h-20 w-auto object-contain" />
            <p className="text-sm">Sr No 54, Plot No 113, Handewadi Rd,<br />Swami Vivekanand Industrial Estate,<br />Hadapsar Haveli Pune, 411028</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-400">Services</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s, idx) => (
                <li key={idx}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">We Are Here</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 <a href="https://maps.app.goo.gl/vtkt6jUwSVToLkaG9?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 underline">Location</a></li>
              <li>📧 contact@mozris.com</li>
              <li>📞 +91 8208105920</li>
            </ul>
          </div>
        </div>
        <hr className="border-t border-gray-600" />
        <div className="text-center text-sm py-4 text-gray-400">
          Copyright © 2025. All rights reserved | <p>  Designed & Developed by <a href="https://www.allverse-studios.com" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">AllVerse Studios</a> </p>
        </div>
      </footer>
    </div>
  );
}
