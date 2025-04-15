import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const offerings = [
    { text: "State-of-the-Art Kitchen Facilities", icon: "🏢" },
    { text: "FSSAI Standard Audit Procedures", icon: "🧼" },
    { text: "Experienced Corporate Catering Team", icon: "👨‍🍳" },
    { text: "ISO-22000 Compliance", icon: "📋" },
    { text: "In-House Quality Control Team", icon: "🧪" },
    { text: "Dedicated Site Manager", icon: "👷‍♂️" },
    { text: "Cafeteria Management", icon: "🍽️" },
    { text: "In-House Cooking", icon: "🔥" },
    { text: "Multi-Cuisine Menu Banks", icon: "🍱" },
    { text: "Packed Meals", icon: "🎁" },
    { text: "Pop-Up Counters", icon: "🏕️" },
    { text: "Tuck Shops", icon: "🏪" },
    { text: "Festival Menus", icon: "🎊" },
    { text: "Event Catering", icon: "🎉" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#e8f5e9] to-[#e3f2fd] font-sans text-gray-800 min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 bg-black text-white shadow sticky top-0 z-50 h-20">
        <div className="flex items-center">
          <img
            src="/mozris-logo.png"
            alt="Mozris Logo"
            className="max-h-16 md:max-h-20 w-auto object-contain"
          />
        </div>
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
    <h1 className="text-5xl font-serif font-semibold">About Us</h1>
  </div>
</section>

      {/* About Mozris Intro */}
      <section className="py-16 px-6">
        <div className="bg-white py-8 px-4 sm:px-8 shadow rounded-md max-w-4xl mx-auto">
          <p className="text-center text-base text-gray-700">
            At Mozris Hospitality, we take pride in delivering premium corporate catering, event catering, and restaurant management services. With FSSAI and ISO-certified kitchens, we ensure the highest safety, hygiene, and taste standards. Serving businesses across Pune, we specialize in tailored solutions for daily corporate meals, elegant events, and seamless restaurant operations. Our team is dedicated to exceptional service, timely delivery, and culinary excellence. Whether you’re hosting a corporate conference or managing a restaurant, we bring expertise and passion to every plate. Let us handle your catering needs with professionalism and care.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="px-6 max-w-5xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-sm">To be the premier catering service, delivering exceptional food and unforgettable experiences.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-sm">We provide high-quality, customized catering solutions with a focus on freshness, hygiene, and customer satisfaction.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Values</h3>
            <p className="text-sm">Excellence, integrity, creativity, customer focus, and commitment to food safety.</p>
          </div>
        </div>
      </section>

<section className="py-12 px-6 text-center bg-white">
  <h2 className="text-3xl font-bold mb-6">Meet Our Founders</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
    <div>
      <img src="/cofounders/ninad.jpg" alt="Ninad Joshi" className="mx-auto rounded-full h-40 w-40 object-cover mb-4 shadow-lg" />
      <h3 className="text-xl font-semibold">Ninad Joshi</h3>
      <p className="text-sm text-gray-600">Co-Founder & Culinary Strategist</p>
      <p className="mt-2 text-gray-700 text-sm">
        Ninad is a seasoned hospitality professional with over 20+ years of experience in food service operations, corporate catering, and institutional dining. His leadership, strategic insight, and commitment to operational excellence have played a vital role in establishing Mozris Hospitality as a trusted name in the industry.
      </p>
    </div>
    <div>
      <img src="/cofounders/aishwarya.jpg" alt="Aishwarya Tanpure" className="mx-auto rounded-full h-40 w-40 object-cover mb-4 shadow-lg" />
      <h3 className="text-xl font-semibold">Aishwarya Tanpure</h3>
      <p className="text-sm text-gray-600">Co-Founder & Operations Head</p>
      <p className="mt-2 text-gray-700 text-sm">
        Aishwarya brings dynamic energy and a modern perspective to the business. With a strong background in operations and client experience, she ensures that every Mozris engagement is marked by precision, quality, and client satisfaction.
      </p>
    </div>
  </div>
</section>

<section className="py-12 px-6 bg-[#f9fafb] text-center">
  <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
  <p className="text-gray-700 max-w-2xl mx-auto mb-8">
    Mozris Hospitality is officially recognized and certified for maintaining high food safety and quality standards.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto items-center">
    <div>
      <img src="/certifications/fssai.png" alt="FSSAI Logo" className="h-20 mx-auto mb-2" />
      <p className="text-sm text-gray-600">FSSAI License No: <strong>11524083000766</strong></p>
    </div>
    <div>
      <img src="/certifications/iso.png" alt="ISO Logo" className="h-20 mx-auto mb-2" />
      <p className="text-sm text-gray-600">ISO 22000 Certification ID: <strong>ISO 22000:2018</strong></p>
    </div>
  </div>
</section>


{/* What We Offer Section with Emojis */}
<section className="py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">What We Offer?</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
    {offerings.map((item, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100 text-center"
      >
        <div className="text-3xl mb-3">{item.icon}</div>
        <p className="text-sm font-medium">{item.text}</p>
      </div>
    ))}
  </div>
</section>


      {/* Restaurant Brands Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Restaurant Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {["italy.png", "chinese.png", "kejru.png", "dabba.png"].map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img src={`/brands/${logo}`} alt={`Brand ${index}`} className="h-24 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients Slider */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-slide flex gap-10 items-center">
            {[...Array(30)].map((_, i) => (
              <img key={i} src={`/clients/client${i + 1}.png`} alt={`Client ${i + 1}`} className="h-12 object-contain" />
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .animate-slide {
              animation: slide 40s linear infinite;
            }
          `}
        </style>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div>
          <img
            src="/mozris-logo.png"
            alt="Mozris Logo"
            className="max-h-16 md:max-h-20 w-auto object-contain"
          />
            <p className="text-sm">Sr No 54, Plot No 113, Handewadi Rd,<br />Swami Vivekanand Industrial Estate,<br />Hadapsar Haveli Pune, 411028</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-400">Services</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Corporate Catering</li>
              <li>Social Event</li>
            </ul>
          </div>
          <div>
 	   <h4 className="font-bold text-lg mb-3">We Are Here</h4>
           <ul className="space-y-2 text-sm text-gray-300">
    	   <li>
           📍 <a href="https://maps.app.goo.gl/vtkt6jUwSVToLkaG9?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 underline">
           Location
     	   </a>
   	   </li>
    	   <li>📧 contact@mozris.com</li>
     	   <li>📞 +91 7757803925</li>
  	   </ul>
	  </div>
        </div>
        <hr className="border-t border-gray-700" />
        <div className="text-center text-sm py-4 text-gray-400">
          Copyright © 2025. All rights reserved | <p>  Designed & Developed by <a href="https://www.allverse-studios.com" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">AllVerse Studios</a> </p>
        </div>
      </footer>
    </div>
  );
}
