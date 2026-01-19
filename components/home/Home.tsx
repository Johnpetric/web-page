'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic can be added later
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/Home page/home page icons - 3rd fold/logo.svg"
              alt="VKV Realty Logo"
              width={120}
              height={60}
              className="h-28 sm:h-32 md:h-44 w-auto"
            />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-18">
            <Link href="/" className="text-[#FF6347] font-semibold hover:text-[#ff4027] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#FF6347] transition-colors">
              About
            </Link>
            <Link href="/project" className="text-gray-700 hover:text-[#FF6347] transition-colors">
              Project
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#FF6347] transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Call Us Button - Desktop */}
          <Link href="/contact" className="hidden md:block">
            <button className="bg-[#FF6347] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-[#ff4027] transition-colors flex items-center gap-2 text-sm lg:text-base">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us Now
            </button>
          </Link>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-white shadow-xl mobile-menu-enter">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link
                href="/"
                className="text-[#FF6347] font-semibold text-lg py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#FF6347] text-lg py-2 border-b border-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/project"
                className="text-gray-700 hover:text-[#FF6347] text-lg py-2 border-b border-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Project
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#FF6347] text-lg py-2 border-b border-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Call Button */}
              <Link href="/contact" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-[#FF6347] text-white px-6 py-3 rounded-lg hover:bg-[#ff4027] transition-colors flex items-center justify-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Us Now
                </button>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section (First Fold) */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 animate-on-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content & Form */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-[#FF6347]">VKV Realty</span>
              <span className="text-[#1E3A8A]"> – Building Trust Since 1985</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Turning Your Land Dreams into Landmarks
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-full sm:max-w-[410px] mb-6 sm:mb-8">
              With a legacy that spans nearly four decades, VKV Realty has been shaping the skyline of Tamil Nadu—plot by plot. Whether you&apos;re looking to build your dream home or make a solid investment, we make the journey seamless, secure, and satisfying.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full md:w-[480px] max-w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6347] text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full md:w-[480px] max-w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6347] text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full md:w-[480px] max-w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6347] text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full md:w-[480px] max-w-full bg-[#FF6347] text-white py-2.5 sm:py-3 px-6 rounded-md hover:bg-[#ff4027] transition-colors font-semibold text-sm sm:text-base"
              >
                Book Your Visit Today
              </button>
            </form>

          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src="/images/Home page/home page image/image 1.png"
              alt="Modern VKV Realty Property"
              width={600}
              height={450}
              className="w-full max-w-md md:max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose VKV Realty Section (Second Fold) */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-on-scroll">
            <span className="text-[#FF6347]">Why Choose</span>
            <span className="text-[#1E3A8A]"> VKV Realty?</span>
          </h2>

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Prime Locations */}
            <div className="text-center animate-on-scroll delay-100">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon 6.png"
                  alt="Prime Locations Icon"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-2 sm:mb-3">
                Prime Locations<br />That Matter
              </h3>
              <p className="text-gray-400 px-2 sm:px-4 md:px-8 lg:px-16 text-sm sm:text-base">
                From peaceful residential neighborhoods to booming development zones, our plots are strategically located near schools, highways, tech parks, and city essentials.
              </p>
            </div>

            {/* 100% Clear Titles */}
            <div className="text-center animate-on-scroll delay-200">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/Clip path group.png"
                  alt="Clear Titles Icon"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-2 sm:mb-3">
                100% Clear Titles
              </h3>
              <p className="text-gray-400 px-2 sm:px-4 md:px-8 lg:px-16 pt-0 sm:pt-7 text-sm sm:text-base">
                No surprises. No loopholes. Every property comes with verified, clean titles—because your peace of mind is part of the deal.
              </p>
            </div>

            {/* Infrastructure */}
            <div className="text-center sm:col-span-2 md:col-span-1 animate-on-scroll delay-300">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon 8.png"
                  alt="Infrastructure Icon"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-2 sm:mb-3">
                Infrastructure That Speaks for <br className="hidden sm:block" /> Itself
              </h3>
              <p className="text-gray-400 px-2 sm:px-4 md:px-8 lg:px-18 text-sm sm:text-base">
                We build more than layouts—we create lifestyle-ready communities with wide blacktop roads, drainage, lighting, and water access.
              </p>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Government Approved */}
            <div className="text-center animate-on-scroll delay-100">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon-5.png"
                  alt="Government Approved Icon"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-2 sm:mb-3">
                Government<br />Approved Projects
              </h3>
              <p className="text-gray-400 px-2 sm:px-4 text-sm sm:text-base">
                DTCP-approved plots. Fully vetted and legal. Safe, secure, and future-proof investments.
              </p>
            </div>

            {/* Service That Sticks */}
            <div className="text-center animate-on-scroll delay-200">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon 5.png"
                  alt="Service Icon"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-2 sm:mb-3">
                Service That Sticks With You
              </h3>
              <p className="text-gray-400 px-2 sm:px-4 md:px-8 pt-0 sm:pt-7 text-sm sm:text-base">
                From your first call to key handover—and beyond—we&apos;re with you every step. Because your trust is our top asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section (Third Fold) */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-on-scroll">
            <span className="text-[#FF6347]">What</span>
            <span className="text-[#1E3A8A]"> We Offer</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Plotted Developments */}
            <div className="bg-white border border-gray-200 min-h-[280px] sm:h-80 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow animate-on-scroll delay-100">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon 1.png"
                  alt="Plotted Developments Icon"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-4 sm:mb-8">
                Plotted Developments
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Beautifully planned layouts designed for modern living and long-term value.
              </p>
            </div>

            {/* Investment Consulting */}
            <div className="bg-white border border-gray-200 min-h-[280px] sm:h-80 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow animate-on-scroll delay-200">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon 2.png"
                  alt="Investment Consulting Icon"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-4 sm:mb-8">
                Investment Consulting
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                Looking for high-return opportunities? Our experts help you choose the right plot, the right time, and the right strategy.
              </p>
            </div>

            {/* Site Selection & Acquisition */}
            <div className="bg-white border border-gray-200 min-h-[280px] sm:h-80 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow animate-on-scroll delay-300">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon 3.png"
                  alt="Site Selection Icon"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-4 sm:mb-8">
                Site Selection &<br />Acquisition
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                We find the ideal plot that fits your purpose—be it personal, commercial, or investment.
              </p>
            </div>

            {/* End-to-End Assistance */}
            <div className="bg-white border border-gray-200 min-h-[280px] sm:h-80 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow animate-on-scroll delay-400">
              <div className="mb-6 sm:mb-8">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/icon 4.png"
                  alt="End-to-End Assistance Icon"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#FF6347] mb-4 sm:mb-8">
                End-to-End Assistance
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                From paperwork to post-sale support, we handle it all—so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Banner (Fourth Fold) */}
      <section className="bg-gradient-to-r from-blue-50 to-gray-50 py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-3 sm:px-4 text-center animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-[#FF6347]">30+ Completed Projects - </span>
            <span className="text-[#1E3A8A]">A Track <br className="hidden sm:block" /> Record You Can Walk On</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mb-4 sm:mb-6 max-w-xl mx-auto px-2">
            We're not just talking—we've delivered. Over 30 successful developments across Tamil Nadu stand as proof of our dedication to quality, transparency, and customer delight.
          </p>
          <Link href="/contact">
            <button className="bg-[#FF6347] text-white px-8 sm:px-16 md:px-32 py-2.5 sm:py-3 rounded-lg hover:bg-[#ff4027] transition-colors font-semibold text-sm sm:text-base">
              Book Your Visit Today
            </button>
          </Link>
        </div>
      </section>

      {/* Hot Picks - Ongoing Projects (Fifth Fold) */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-on-scroll">
            <span className="text-[#FF6347]">Hot Picks – </span>
            <span className="text-[#1E3A8A]">Ongoing Projects You<br className="hidden sm:block" />Can Own Today</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* First row - 2 cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Karun Garden */}
              <div className="bg-white border-2 border-[#FF6347] rounded-lg p-4 sm:p-6 transition-shadow hover:shadow-lg h-full animate-on-scroll delay-100">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FF6347] mb-3 sm:mb-4 px-0 sm:px-4">
                  Karun Garden – Kinathukadavu,<br className="hidden sm:block" /> Coimbatore
                </h3>
                <ul className="space-y-3 sm:space-y-5 text-gray-500 px-0 sm:px-4 md:px-10 text-sm sm:text-base">
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>15 premium DTCP-approved plots</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>1800 sq.ft (4 cents), blacktop roads, all facing options</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>Just 3 KM from Coimbatore-Pollachi Highway</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>Surrounded by industries, colleges, and tech parks</span>
                  </li>
                  <li className="flex items-start sm:items-center font-semibold">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span className="text-[#1E3A8A]">Price: ₹3.5 Lakhs/cent (Negotiable)</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>Perfect for peaceful living + high growth potential</span>
                  </li>
                </ul>
              </div>

              {/* Naval Nagar */}
              <div className="bg-white border-2 border-[#FF6347] rounded-lg p-4 sm:p-6 transition-shadow hover:shadow-lg h-full animate-on-scroll delay-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#FF6347] mb-3 sm:mb-4 px-0 sm:px-4">
                  Naval Nagar – Kinathukadavu,<br className="hidden sm:block" /> Coimbatore
                </h3>
                <ul className="space-y-3 sm:space-y-5 text-gray-500 px-0 sm:px-4 md:px-10 text-sm sm:text-base">
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>20 spacious plots in a gated community</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>1350 sq.ft (3 cents), near a serene pond</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>Solar street lights, rainwater drainage, top connectivity</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>Walkable to key government offices and schools</span>
                  </li>
                  <li className="flex items-start sm:items-center font-semibold">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span className="text-[#1E3A8A]">Price: ₹10 Lakhs/cent</span>
                  </li>
                  <li className="flex items-start sm:items-center">
                    <Image
                      src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                      alt="Arrow icon"
                      width={16}
                      height={16}
                      className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                    />
                    <span>Great for premium buyers looking for ready-to-build plots</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Second row - 1 centered card */}
            <div className="flex justify-center">
              <div className="w-full md:max-w-[calc((100%-2rem)/2)]">
                {/* Sri Virutcham Nagar */}
                <div className="bg-white border-2 border-[#FF6347] rounded-lg p-4 sm:p-6 transition-shadow hover:shadow-lg h-full animate-on-scroll delay-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#FF6347] mb-3 sm:mb-4 px-0 sm:px-4">
                    Sri Virutcham Nagar – Zaminkottampatti, Pollachi
                  </h3>
                  <ul className="space-y-3 sm:space-y-5 text-gray-500 px-0 sm:px-4 md:px-10 text-sm sm:text-base">
                    <li className="flex items-start sm:items-center">
                      <Image
                        src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                        alt="Arrow icon"
                        width={16}
                        height={16}
                        className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>Plots from 2 to 5 cents, all directions available</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <Image
                        src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                        alt="Arrow icon"
                        width={16}
                        height={16}
                        className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>Located on Pollachi-Aliyar Road, 4 km from Pollachi town</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <Image
                        src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                        alt="Arrow icon"
                        width={16}
                        height={16}
                        className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>Blacktop roads, lighting, water access & play area</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <Image
                        src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                        alt="Arrow icon"
                        width={16}
                        height={16}
                        className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>Surrounded by elegant villas, colleges & IT companies</span>
                    </li>
                    <li className="flex items-start sm:items-center font-semibold">
                      <Image
                        src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                        alt="Arrow icon"
                        width={16}
                        height={16}
                        className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span className="text-[#1E3A8A]">Price: ₹6 Lakhs/cent</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <Image
                        src="/images/Home page/home page icons - 3rd fold/icon 8 (1).png"
                        alt="Arrow icon"
                        width={16}
                        height={16}
                        className="mr-2 flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>Ideal for families and first-time investors alike</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section (Sixth Fold) */}
      <section className="bg-white py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-6 sm:mb-8">
            {/* Left - House Image */}
            <div className="flex justify-center order-2 md:order-1 animate-on-scroll">
              <Image
                src="/images/Home page/home page image/Group 8.png"
                alt="VKV Realty Property"
                width={500}
                height={700}
                className="max-w-[280px] sm:max-w-[400px] md:max-w-[500px] h-auto"
              />
            </div>

            {/* Right - CTA Content */}
            <div className="text-center md:text-left order-1 md:order-2 animate-on-scroll delay-100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12">
                <span className="text-[#FF6347]">Start Your</span>
                <span className="text-[#1E3A8A]"> Property<br />Journey Today</span>
              </h2>
              <Link href="/contact">
                <button className="bg-[#FF6347] text-white px-8 sm:px-12 md:px-16 py-2.5 sm:py-3 rounded-lg hover:bg-[#ff4027] transition-colors font-semibold text-base sm:text-lg mb-6">
                  Book Your Visit Today
                </button>
              </Link>
            </div>
          </div>
          <div className="animate-on-scroll">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#1E3A8A] px-2">
              Let&apos;s turn your land goals into lasting value—with VKV <br className="hidden md:block" /> Realty by your side.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FF6347] text-white py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Column 1 - Logo & Company */}
            <div className="text-center sm:text-left">
              <div className="mb-4 flex justify-center sm:justify-start">
                <Image
                  src="/images/Home page/home page icons - 3rd fold/blue logo 1.png"
                  alt="VKV Realty Logo"
                  width={120}
                  height={60}
                  className="h-10 sm:h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-white/90 text-sm sm:text-base">
                Building trust and landmarks since 1985.
              </p>
            </div>

            {/* Column 2 - Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors text-sm sm:text-base">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white/80 transition-colors text-sm sm:text-base">About</Link>
                </li>
                <li>
                  <Link href="/project" className="hover:text-white/80 transition-colors text-sm sm:text-base">Project</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white/80 transition-colors text-sm sm:text-base">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Project */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Project</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Karun Garden</li>
                <li>Naval Nagar</li>
                <li>Sree Virutcham Nagar</li>
              </ul>
            </div>

            {/* Column 4 - Contact Us */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 justify-center sm:justify-start">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-sm sm:text-base">+91 73977 85966</span>
                </li>
                <li className="flex items-start gap-2 justify-center sm:justify-start">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-sm sm:text-base">salescbe@triplesev.com</span>
                </li>
                <li className="flex items-start gap-2 justify-center sm:justify-start">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-sm sm:text-base">No.149, Avinashi Road, Hopes College, Peelamedu post, CBE - 641 004</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="border-t border-white/20 pt-4 sm:pt-6">
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="Instagram">
                <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white/80 transition-colors" aria-label="YouTube">
                <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
