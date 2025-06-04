import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="bg-gradient-to-b from-[#e3f2fd] to-[#e8f5e9] font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 bg-black text-white shadow-md sticky top-0 z-50 h-20">
        <div className="flex items-center">
          <img
            src="/mozris-logo.png"
            alt="Mozris Logo"
            className="max-h-16 md:max-h-20 w-auto object-contain"
          />
        </div>
        <nav className="flex gap-6 font-medium text-sm">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/about" className="hover:text-orange-400">About Us</Link>
          <Link to="/services" className="hover:text-orange-400">Services</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact Us</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="/hero1.jpg"
          alt="Mozris Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60 text-white text-center px-6">
          <h1 className="text-5xl font-serif font-semibold mb-4">Mozris Hospitality</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Premium Corporate Catering & Institutional Food Solutions with Hygiene, Quality & Precision
          </p>
          <div className="flex gap-4">
            <Link to="/services" className="bg-orange-600 px-6 py-2 rounded-md font-medium hover:bg-orange-700">Explore More</Link>
            <Link to="/contact" className="bg-black/70 px-6 py-2 rounded-md border border-white hover:bg-white hover:text-black font-medium">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">About Mozris</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Founded by passionate professionals, Mozris Hospitality delivers over 5000 meals daily with a strong focus on safety, consistency, and satisfaction. We serve top corporate clients and government institutions across Pune.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <h2 className="text-3xl font-bold font-serif text-center mb-10">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            {["Cafeteria Management", "Packed Meals", "Festival Menus", "Event Catering", "Pop-Up Counters", "Tuck Shops"].map((service, idx) => (
              <div key={idx} className="bg-white rounded-md p-4 shadow text-center">
                <h3 className="font-semibold mb-1 text-sm">{service}</h3>
                <p className="text-xs">Professionally managed and fully customizable</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img src="/gallery1.jpg" alt="Service Sample" className="rounded-md object-cover w-full h-48" />
            <img src="/gallery2.jpg" alt="Service Sample" className="rounded-md object-cover w-full h-48" />
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Image Grid Style */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold font-serif text-center mb-10">What Makes Us Different</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { src: "/why1.jpg", title: "One Stop Solutions For All Parties", label: "Operation Driven by Standard Operating Procedures" },
            { src: "/why2.jpg", title: "Variety Of Cuisines", label: "Emphasis on Flexibility and Adaptability" },
            { src: "/why3.jpg", title: "Artful Display", label: "Providing CCTV access to our Client Partners" },
            { src: "/why4.jpg", title: "Fresh Ingredients", label: "Experienced Management Team with 50+ Years Expertise" },
            { src: "/why5.jpg", title: "Skilled Chefs", label: "Prioritizing Training and Development" },
            { src: "/why6.jpg", title: "Live Food Counters", label: "Effective Client Communication & Feedback" },
            { src: "/why7.jpg", title: "Exquisite Food", label: "Conducting Weekly Review Meetings" },
            { src: "/why8.jpg", title: "Hygienic & Safe", label: "Procurement of Branded Raw Material" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img src={item.src} alt={item.title} className="rounded-full shadow-xl w-32 h-32 object-cover mb-3" />
              <p className="font-semibold text-sm text-gray-900 leading-tight mb-1">{item.title}</p>
              <p className="italic text-xs text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-serif font-semibold mb-2">Order Ahead with Mozris App</h2>
        <p className="text-sm mb-6">Employees can pre-book meals directly through our mobile app.</p>
        <div className="flex justify-center gap-4">
          <img src="/appstore.png" alt="App Store" className="h-10" />
          <img src="/playstore.png" alt="Google Play" className="h-10" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white pt-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div>
          <img
            src="/mozris-logo.png"
            alt="Mozris Logo"
            className="max-h-16 md:max-h-20 w-auto object-contain"
          />
            <p className="text-sm">Sr. No 54, Plot No 113, Handewadi Rd,<br />Swami Vivekanand Industrial Estate,<br />Hadapsar, Haveli Pune, 411028</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-400">Services</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</a></li>
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
