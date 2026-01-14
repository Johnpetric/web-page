"use client";
import { useEffect } from "react";
import "./page.css";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ProjectPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans fixed-page-bg">
      {/* Navigation */}
      {/* Navigation */}
      <Header />

      {/* Section 1: Our Ongoing Projects */}
      <section className="bg-white text-gray-900 py-16 px-4 text-center animate-on-scroll">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-orange-600">Our</span> <span className="text-blue-900">Ongoing Projects</span>
        </h1>

        <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mb-2">
          Discover premium residential plots that promise exceptional value, strategic locations, and high-growth potential. Explore our latest developments, where quality meets affordability.
        </p>

        {/* Building Image */}
        <div className="max-w-4xl mx-auto h-[500px] relative overflow-hidden group rounded-lg">
          <Image
            src="/asset/img/image (1).jpg"
            alt="Ongoing Projects"
            fill
            className="object-contain hover-zoom-img"
          />
        </div>
      </section>

      {/* Section 2: Karun Garden Highlights */}
      <section id="karun-garden" className="py-20 bg-white scroll-mt-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-900">
            <span className="text-orange-600">Karun Garden</span> – The Ideal Affordable Plot in the <br className="hidden md:block" /> Heart of Coimbatore
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {[
              { label: "Location", value: "Arasampalayam, Kinathukadavu, Coimbatore District, Tamil Nadu", icon: "/asset/icon/ic 1.png" },
              { label: "Starting Price", value: "₹ 3.5 Lakhs per Cent", icon: "/asset/icon/ic 2.png" },
              { label: "Land Area", value: "8.47 Acres", icon: "/asset/icon/ic 3.png" },
              { label: "Available Units", value: "42 Plots", icon: "/asset/icon/ic 4.png" },
              { label: "Development Stage", value: "Ready-to-Move", icon: "/asset/icon/ic 5.png" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center stagger-delay animate-on-scroll bg-white border border-[#FF5A3C]/10 p-6 rounded-lg text-center hover:shadow-lg transition-shadow hover-card h-full justify-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
                  <Image src={item.icon} alt={item.label} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Discover Karun Garden */}
      <section className="py-24 bg-[#2C2C6E] text-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Aerial Image Left */}
          <div className="w-full h-[500px] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/asset/img/img 2.jpg"
              alt="Karun Garden Aerial View"
              fill
              className="object-cover hover-zoom-img"
            />
          </div>

          <div className="text-left">
            <h2 className="text-4xl font-bold mb-2 text-white">Discover Karun Garden</h2>
            <p className="text-xl text-gray-300 mb-8 font-light">Where Dreams Meet Reality</p>

            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                Step into a world of affordability, comfort, and growth with Karun Garden, a premium residential plot development nestled in the picturesque Kinathukadavu area, just 3 km off the Pollachi-Coimbatore Highway. Priced from 3.5 Lakhs per Cent, Karun Garden offers the perfect investment opportunity with ready-to-move plots that save you from construction delays, unlike many under-construction developments in the area.
              </p>
              <p>
                Whether you are a first-time buyer or an investor, Karun Garden provides exceptional value with its Vastu-compliant plots and high-quality infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Location */}
      <section className="py-24 bg-white text-gray-900 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div className="pt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Unbeatable Location and Connectivity</h2>

            <div className="space-y-8">
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <h3 className="font-bold text-gray-900 text-base">Proximity:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Only 1 km to Arasampalayam Bus Stop, 3 km to Kinathukadavu Railway Station, and 38 km to Coimbatore International Airport.
                </p>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-4">
                <h3 className="font-bold text-gray-900 text-base">Nearby Essentials:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Schools, banks, hospitals, and grocery stores are just minutes away, ensuring convenience at your doorstep.
                </p>
              </div>
            </div>
          </div>

          {/* Map/Aerial Image Right */}
          <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 relative overflow-hidden">
            <Image
              src="/asset/img/img 3.png"
              alt="Karun Garden Location Map"
              fill
              className="object-cover hover-zoom-img"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Why Karun Garden is the Smart Choice */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-12 text-[#071C1F]">
            Why Karun Garden is the Smart Choice
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Affordable Pricing:",
                desc: "Starting at just ₹3.5 Lakhs per Cent, the most competitive in the area.",
                icon: "/asset/icon/ic 6.png"
              },
              {
                title: "Immediate Possession:",
                desc: "With our ready-to-move status, you can begin building without delay",
                icon: "/asset/icon/ic 7.png"
              },
              {
                title: "Excellent Infrastructure:",
                desc: "Enjoy wide 30ft/23ft tar roads, water supply, drainage, and planned security features.",
                icon: "/asset/icon/ic 8.png"
              },
              {
                title: "High Appreciation Potential:",
                desc: "With 7-8% annual appreciation, this is not just a plot, but a growing asset for the future.",
                icon: "/asset/icon/ic 9.png"
              }
            ].map((feature, idx) => (
              <div key={idx} className="w-[280px] h-[280px] bg-white border border-[#FF5A3C]/10 flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow hover-card">
                <div className="w-[52px] h-[52px] mb-6 flex items-center justify-center relative">
                  <Image src={feature.icon} alt={feature.title} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-[20px] leading-[30px] font-semibold text-[#FF5A3C] mb-2">{feature.title}</h3>
                <p className="text-[14px] leading-[24px] text-[#7B7B7B]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Naval Nagar Highlights */}
      <section id="naval-nagar" className="py-20 bg-white scroll-mt-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-900">
            <span className="text-orange-600">Naval Nagar</span> – Luxury Meets Exclusivity
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {[
              { label: "Location", value: "Pollachi-Coimbatore Highway (NH83), Kinathukadavu, Coimbatore District, Tamil Nadu", icon: "/asset/icon/ic 1.png" },
              { label: "Starting Price", value: "₹ 11 Lakhs per Cent", icon: "/asset/icon/ic 2.png" },
              { label: "Land Area", value: "1 Acre", icon: "/asset/icon/ic 3.png" },
              { label: "Available Units", value: "20 Plots", icon: "/asset/icon/ic 4.png" },
              { label: "Development Stage", value: "Ready-to-Move", icon: "/asset/icon/ic 5.png" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center stagger-delay animate-on-scroll bg-white border border-[#FF5A3C]/10 p-6 rounded-lg text-center hover:shadow-lg transition-shadow hover-card h-full justify-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
                  <Image src={item.icon} alt={item.label} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Step Into a Premium Lifestyle (Naval Nagar Blue) */}
      <section className="py-24 bg-[#2C2C6E] text-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Aerial Image Left */}
          <div className="w-full h-[500px] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/asset/img/img 4.jpg"
              alt="Naval Nagar Aerial View"
              fill
              className="object-cover hover-zoom-img"
            />
          </div>

          <div className="text-left">
            <h2 className="text-4xl font-bold mb-2 text-white">Step Into a Premium Lifestyle at <br /> Naval Nagar</h2>

            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base mt-8">
              <p>
                Welcome to Naval Nagar, where luxury living meets exclusivity. Situated along the bustling NH83, this meticulously planned premium plot project is a perfect escape for those who seek privacy, serenity, and convenience. With only 20 plots available, you can enjoy an intimate, close-knit community, ideal for those looking for a premium experience at an affordable price.
              </p>
              <p>
                Priced from 11 Lakhs per Cent, Naval Nagar stands out with its top-tier amenities and superior infrastructure, setting it apart from nearby developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Strategic Location (Naval Nagar White) */}
      <section className="py-24 bg-white text-gray-900 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div className="pt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Strategic Location, Unmatched Connectivity</h2>

            <div className="space-y-8">
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <h3 className="font-bold text-gray-900 text-base">Proximity:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Just 600m to Rangasamudram Bus Stop, 5 km to Pollachi, and 35 km to Coimbatore International Airport.
                </p>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-4">
                <h3 className="font-bold text-gray-900 text-base">Surroundings:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Schools, banks, hospitals, and grocery stores are just minutes away, ensuring convenience at your doorstep.
                </p>
              </div>
            </div>
          </div>

          {/* Map/Aerial Image Right */}
          <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 relative overflow-hidden">
            <Image
              src="/asset/img/img 5.jpg"
              alt="Naval Nagar Location Map"
              fill
              className="object-cover hover-zoom-img"
            />
          </div>
        </div>
      </section>

      {/* Section 9: Why Choose Naval Nagar? */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-12 text-[#071C1F]">
            Why Choose Naval Nagar?
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Exclusive Pricing:",
                desc: "₹ 1 Lakhs per Cent, offering excellent value for a premium lifestyle.",
                icon: "/asset/icon/ic 6.png"
              },
              {
                title: "All-Inclusive Amenities:",
                desc: "Gated community, solar street lights, 30ft/23ft tar roads, and stormwater drainage - everything you need for comfort.",
                icon: "/asset/icon/ic 8.png"
              },
              {
                title: "Exclusivity:",
                desc: "Only 20 plots available, offering privacy and a sense of community",
                icon: "/asset/icon/ic 7.png"
              },
              {
                title: "High Potential for Growth:",
                desc: "With easy access to major highways and ongoing industrial growth in the region, expect steady appreciation.",
                icon: "/asset/icon/ic 9.png"
              }
            ].map((feature, idx) => (
              <div key={idx} className="w-[280px] h-[280px] bg-white border border-[#FF5A3C]/10 flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow hover-card">
                <div className="w-[52px] h-[52px] mb-6 flex items-center justify-center relative">
                  <Image src={feature.icon} alt={feature.title} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-[20px] leading-[30px] font-semibold text-[#FF5A3C] mb-2">{feature.title}</h3>
                <p className="text-[14px] leading-[24px] text-[#7B7B7B]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Sree Virutcham Nagar Highlights */}
      <section id="sree-virutcham-nagar" className="py-20 bg-white scroll-mt-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-900">
            <span className="text-orange-600">Sree Virutcham Nagar</span> – Your Affordable Path to <br className="hidden md:block" /> Investment
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {[
              { label: "Location", value: "Pollachi to Aliyar Road, Near Rangasamudram, Pollachi, Tamil Nadu", icon: "/asset/icon/ic 1.png" },
              { label: "Starting Price", value: "₹ 6 Lakhs per Cent", icon: "/asset/icon/ic 2.png" },
              { label: "Land Area", value: "5 Acres", icon: "/asset/icon/ic 3.png" },
              { label: "Available Units", value: "98 Plots", icon: "/asset/icon/ic 4.png" },
              { label: "Development Stage", value: "Ready-to-Move", icon: "/asset/icon/ic 5.png" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center stagger-delay animate-on-scroll bg-white border border-[#FF5A3C]/10 p-6 rounded-lg text-center hover:shadow-lg transition-shadow hover-card h-full justify-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center relative">
                  <Image src={item.icon} alt={item.label} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Affordable Excellence (Sree Virutcham Blue) */}
      <section className="py-24 bg-[#2C2C6E] text-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Aerial Image Left */}
          <div className="w-full h-[500px] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/asset/img/img 6.png"
              alt="Sree Virutcham Nagar Aerial View"
              fill
              className="object-cover hover-zoom-img"
            />
          </div>

          <div className="text-left">
            <h2 className="text-4xl font-bold mb-2 text-white">Affordable Excellence at Sree <br /> Virutcham Nagar</h2>

            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base mt-8">
              <p>
                Looking for a secure, budget-friendly investment with all the right amenities? Sree Virutcham Nagar offers exactly that, with plots starting from 6 Lakhs per Cent, ideal for both first-time buyers and seasoned investors. Located just minutes from Pollachi, this project features DTCP-approved plots with clear legal titles, ensuring peace of mind for you and your family.
              </p>
              <p>
                With 98 plots on 5 acres of lush land, you get flexibility in plot sizes (ranging from 2 to 5 cents), tailored to suit your budget and requirements. The ready-to-move status ensures that you can start building your dream home immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Strategic Location (Sree Virutcham White) */}
      <section className="py-24 bg-white text-gray-900 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div className="pt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Strategic Location and Key Connectivity</h2>

            <div className="space-y-8">
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <h3 className="font-bold text-gray-900 text-base">Proximity:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  600m to Rangasamudram Bus Stop, 5 km to Pollachi, and 50 km to Coimbatore International Airport.
                </p>
              </div>

              <div className="grid grid-cols-[120px_1fr] gap-4">
                <h3 className="font-bold text-gray-900 text-base">Local Amenities:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Schools, hospitals, and grocery stores are just a stone&apos;s throw away, making life easy and convenient.
                </p>
              </div>
            </div>
          </div>

          {/* Map/Aerial Image Right */}
          <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 relative overflow-hidden">
            <Image
              src="/asset/img/img 7.jpg"
              alt="Sree Virutcham Nagar Location Map"
              fill
              className="object-cover hover-zoom-img"
            />
          </div>
        </div>
      </section>

      {/* Section 13: Why Sree Virutcham Nagar Stands Out */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-12 text-[#071C1F]">
            Why Sree Virutcham Nagar Stands Out:
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Incredible Value:",
                desc: "Starting at ₹ 6 Lakhs per Cent, it's one of the most affordable options in the area",
                icon: "/asset/icon/ic 10.png"
              },
              {
                title: "Complete Amenities:",
                desc: "Gated community, children's park, street lights, wide internal roads, and more",
                icon: "/asset/icon/ic 11.png"
              },
              {
                title: "Invest in Peace of Mind:",
                desc: "With DTCP and RERA approvals, your investment is safe and secure.",
                icon: "/asset/icon/ic 12.png"
              },
              {
                title: "High Appreciation Potential:",
                desc: "Enjoy a solid return with 8-10% annual appreciation in the rapidly growing Pollachi area.",
                icon: "/asset/icon/ic 13.png"
              }
            ].map((feature, idx) => (
              <div key={idx} className="w-[280px] h-[280px] bg-white border border-[#FF5A3C]/10 flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow hover-card">
                <div className="w-[52px] h-[52px] mb-6 flex items-center justify-center relative">
                  <Image src={feature.icon} alt={feature.title} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="text-[20px] leading-[30px] font-semibold text-[#FF5A3C] mb-2">{feature.title}</h3>
                <p className="text-[14px] leading-[24px] text-[#7B7B7B]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <Footer />
    </div>
  );
}