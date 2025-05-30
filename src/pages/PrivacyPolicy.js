// src/pages/PrivacyPolicy.js
import React from 'react';

export default function PrivacyPolicy() {
  const updatedDate = new Date().toLocaleDateString('en-GB');

  return (
    <div className="bg-gradient-to-b from-[#e8f5e9] to-[#e3f2fd] font-sans text-gray-800 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-3 bg-black text-white shadow sticky top-0 z-50 h-20">
        <img
          src="/mozris-logo.png"
          alt="Mozris Logo"
          className="max-h-16 w-auto object-contain"
        />
        <nav className="flex gap-6 font-medium text-white text-sm">
          <a href="/" className="hover:text-orange-400">Home</a>
          <a href="/about" className="hover:text-orange-400">About Us</a>
          <a href="/services" className="hover:text-orange-400">Services</a>
          <a href="/contact" className="hover:text-orange-400">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden flex-shrink-0">
        <img
          src="/hero1.jpg"
          alt="Mozris Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/60 text-white text-center px-6">
          <h1 className="text-5xl font-serif font-semibold">Privacy Policy</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-8">Last updated: {updatedDate}</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Mozris Hospitality (“we”, “us” or “our”) operates{' '}
              <a href="https://mozris.com" className="text-blue-600 hover:underline">
                https://mozris.com
              </a>{' '}
              (the “Site”) and our mobile apps (the “App”). We’re committed to protecting your
              privacy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. What Data We Collect</h2>
            <ul className="list-disc list-inside">
              <li>Contact form submissions: name, email, phone, selected service, message.</li>
              <li>Pre-order data: menu items, quantities, payment status, order ID.</li>
              <li>Analytics: page views, device/browser info (via Google Analytics).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside">
              <li>To respond to your inquiries and fulfill your catering requests.</li>
              <li>To process payments and send daily pre-order summaries.</li>
              <li>To improve our Site and App via aggregated analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Cookies &amp; Tracking</h2>
            <p>
              We use basic cookies (e.g. session cookies) and Google Analytics to understand usage
              patterns. You can disable cookies in your browser settings, though some features may
              break.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Data Sharing</h2>
            <p>We never sell your personal data. We share limited information with:</p>
            <ul className="list-disc list-inside">
              <li>Our email provider (for contact form and daily summary delivery).</li>
              <li>Payment gateway (Razorpay) strictly for processing payments.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. Email us at{' '}
              <a href="mailto:contact@mozris.com" className="text-blue-600 hover:underline">
                contact@mozris.com
              </a>{' '}
              for any requests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Changes</h2>
            <p>
              We may update this policy from time to time. We’ll post the revised date at the top of
              this page.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div>
            <img
              src="/mozris-logo.png"
              alt="Mozris Logo"
              className="max-h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm">
              Sr No 54, Plot No 113, Handewadi Rd,<br />
              Swami Vivekanand Industrial Estate,<br />
              Hadapsar Haveli Pune, 411028
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-orange-400">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-400">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-400">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-400">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</a>
              </li>
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
                📍{' '}
                <a
                  href="https://maps.app.goo.gl/vtkt6jUwSVToLkaG9?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 underline"
                >
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
          © {new Date().getFullYear()}. All rights reserved | Designed &amp; Developed by{' '}
          <a
            href="https://www.allverse-studios.com"
            className="text-orange-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            AllVerse Studios
          </a>
        </div>
      </footer>
    </div>
  );
}
