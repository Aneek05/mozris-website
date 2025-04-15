import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Corporate Catering",
    "Packed Meals",
    "Event Catering",
    "Festival Menus",
    "Tuck Shops",
    "Pop-Up Counters",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch("https://mozris-backend.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } else {
      alert(result.error || "Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error sending message. Please try again later.");
  }
};

  const handleWhatsApp = () => {
    const phone = "917757803925";
    const message = `Hi Mozris,\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gradient-to-br from-[#e0f7fa] to-[#e8f5e9] text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 bg-black shadow-md sticky top-0 z-50 h-20">
        <img
          src="/mozris-logo.png"
          alt="Mozris Logo"
          className="max-h-16 md:max-h-20 w-auto object-contain"
        />
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
          <h1 className="text-5xl font-serif font-semibold">Contact Us</h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 gap-6">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 w-full" />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 w-full" />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 w-full" />
          <select name="service" value={form.service} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 w-full">
            <option value="">Select a Service</option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>{service}</option>
            ))}
          </select>
          <textarea name="message" rows="5" placeholder="Message" value={form.message} onChange={handleChange} required className="border border-gray-300 rounded px-4 py-2 w-full" />
          <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md">Send Message</button>
          <button type="button" onClick={handleWhatsApp} className="mt-2 text-center inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium">
            💬 Message us on WhatsApp
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-10 px-6">
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
              <li>Corporate Catering</li>
              <li>Social Event</li>
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
