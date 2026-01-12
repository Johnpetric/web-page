import Link from "next/link";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-6 px-4 md:px-8">
        <div className="text-2xl font-bold text-brand tracking-tighter">
          VKV Realty <span className="text-gray-900 text-sm block">1985</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/home" className="hover:text-brand transition-colors">Home</Link>
          <Link href="/about" className="hover:text-brand transition-colors">About</Link>
          <Link href="/project" className="text-brand">Project</Link>
          <Link href="/contact" className="hover:text-brand transition-colors">Contact</Link>
        </div>
        <button className="md:hidden text-gray-700">
          ☰
        </button>
      </nav>

      {/* Section 1: Our Ongoing Projects */}
      <section className="bg-white text-gray-900 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-orange-600">Our</span> <span className="text-blue-900">Ongoing Projects</span>
        </h1>

        <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed mb-16">
          Discover premium residential plots that promise exceptional value, strategic locations, and high-growth potential. Explore our latest developments, where quality meets affordability.
        </p>

        {/* Building Image */}
        <div className="max-w-4xl mx-auto h-[500px] relative overflow-hidden group rounded-lg">
          <Image
            src="/asset/img/image (1).jpg"
            alt="Ongoing Projects"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Section 2: Karun Garden Highlights */}
      <section id="karun-garden" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-900">
            <span className="text-orange-600">Karun Garden</span> – The Ideal Affordable Plot in the <br className="hidden md:block" /> Heart of Coimbatore
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {[
              { label: "Location", value: "Arasampalayam, Kinathukadavu, Coimbatore District, Tamil Nadu", icon: "📍" },
              { label: "Starting Price", value: "₹ 3.5 Lakhs per Cent", icon: "💰" },
              { label: "Land Area", value: "8.47 Acres", icon: "🗺️" },
              { label: "Available Units", value: "42 Plots", icon: "📍" },
              { label: "Development Stage", value: "Ready-to-Move", icon: "📈" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Icon Circle Placeholder - mimicking the gradient line icons in screenshot */}
                <div className="w-16 h-16 mb-4 text-3xl flex items-center justify-center text-orange-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 max-w-[180px] leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Discover Karun Garden */}
      <section className="py-24 bg-[#2C2C6E] text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Aerial Image Left */}
          <div className="w-full h-[500px] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/asset/img/img 2.jpg"
              alt="Karun Garden Aerial View"
              fill
              className="object-cover"
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
      <section className="py-24 bg-white text-gray-900">
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
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 5: Why Karun Garden is the Smart Choice */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Why Karun Garden is the Smart Choice
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Affordable Pricing:",
                desc: "Starting at just ₹3.5 Lakhs per Cent, the most competitive in the area.",
                icon: "💰"
              },
              {
                title: "Immediate Possession:",
                desc: "With our ready-to-move status, you can begin building without delay",
                icon: "🏗️"
              },
              {
                title: "Excellent Infrastructure:",
                desc: "Enjoy wide 30ft/23ft tar roads, water supply, drainage, and planned security features.",
                icon: "🛣️"
              },
              {
                title: "High Appreciation Potential:",
                desc: "With 7-8% annual appreciation, this is not just a plot, but a growing asset for the future.",
                icon: "📈"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 border border-red-50 rounded-none shadow-none hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6 text-orange-600">{feature.icon}</div>
                <h3 className="text-lg font-bold text-orange-500 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Naval Nagar Highlights */}
      <section id="naval-nagar" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-900">
            <span className="text-orange-600">Naval Nagar</span> – Luxury Meets Exclusivity
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {[
              { label: "Location", value: "Pollachi-Coimbatore Highway (NH83), Kinathukadavu, Coimbatore District, Tamil Nadu", icon: "📍" },
              { label: "Starting Price", value: "₹ 11 Lakhs per Cent", icon: "💰" },
              { label: "Land Area", value: "1 Acre", icon: "🗺️" },
              { label: "Available Units", value: "20 Plots", icon: "📍" },
              { label: "Development Stage", value: "Ready-to-Move", icon: "📈" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-3xl flex items-center justify-center text-orange-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 max-w-[180px] leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Step Into a Premium Lifestyle (Naval Nagar Blue) */}
      <section className="py-24 bg-[#2C2C6E] text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Aerial Image Left */}
          <div className="w-full h-[500px] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/asset/img/img 4.jpg"
              alt="Naval Nagar Aerial View"
              fill
              className="object-cover"
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
      <section className="py-24 bg-white text-gray-900">
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
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 9: Why Choose Naval Nagar? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Why Choose Naval Nagar?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Exclusive Pricing:",
                desc: "₹ 1 Lakhs per Cent, offering excellent value for a premium lifestyle.",
                icon: "💰"
              },
              {
                title: "All-Inclusive Amenities:",
                desc: "Gated community, solar street lights, 30ft/23ft tar roads, and stormwater drainage - everything you need for comfort.",
                icon: "🏛️"
              },
              {
                title: "Exclusivity:",
                desc: "Only 20 plots available, offering privacy and a sense of community",
                icon: "💎"
              },
              {
                title: "High Potential for Growth:",
                desc: "With easy access to major highways and ongoing industrial growth in the region, expect steady appreciation.",
                icon: "📈"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 border border-red-50 rounded-none shadow-none hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6 text-orange-600">{feature.icon}</div>
                <h3 className="text-lg font-bold text-orange-500 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Sree Virutcham Nagar Highlights */}
      <section id="sree-virutcham-nagar" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-900">
            <span className="text-orange-600">Sree Virutcham Nagar</span> – Your Affordable Path to <br className="hidden md:block" /> Investment
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {[
              { label: "Location", value: "Pollachi to Aliyar Road, Near Rangasamudram, Pollachi, Tamil Nadu", icon: "📍" },
              { label: "Starting Price", value: "₹ 6 Lakhs per Cent", icon: "💰" },
              { label: "Land Area", value: "5 Acres", icon: "🗺️" },
              { label: "Available Units", value: "98 Plots", icon: "📍" },
              { label: "Development Stage", value: "Ready-to-Move", icon: "📈" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-3xl flex items-center justify-center text-orange-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-500 max-w-[180px] leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: Affordable Excellence (Sree Virutcham Blue) */}
      <section className="py-24 bg-[#2C2C6E] text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          {/* Aerial Image Left */}
          <div className="w-full h-[500px] bg-white/5 rounded-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/asset/img/img 6.png"
              alt="Sree Virutcham Nagar Aerial View"
              fill
              className="object-cover"
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
      <section className="py-24 bg-white text-gray-900">
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
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 13: Why Sree Virutcham Nagar Stands Out */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Why Sree Virutcham Nagar Stands Out:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Incredible Value:",
                desc: "Starting at ₹ 6 Lakhs per Cent, it's one of the most affordable options in the area",
                icon: "💰"
              },
              {
                title: "Complete Amenities:",
                desc: "Gated community, children's park, street lights, wide internal roads, and more",
                icon: "🎡"
              },
              {
                title: "Invest in Peace of Mind:",
                desc: "With DTCP and RERA approvals, your investment is safe and secure.",
                icon: "🧠"
              },
              {
                title: "High Appreciation Potential:",
                desc: "Enjoy a solid return with 8-10% annual appreciation in the rapidly growing Pollachi area.",
                icon: "📈"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 border border-red-50 rounded-none shadow-none hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6 text-orange-600">{feature.icon}</div>
                <h3 className="text-lg font-bold text-orange-500 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold italic">
              VKV <br />Realty <span className="text-sm not-italic block mt-1">1985</span>
            </h3>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer"></div>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Links</h4>
            <ul className="space-y-4 text-orange-50">
              <li><Link href="/home" className="hover:text-white cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="hover:text-white cursor-pointer">About</Link></li>
              <li><Link href="/project" className="hover:text-white cursor-pointer">Project</Link></li>
              <li><Link href="/contact" className="hover:text-white cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Project Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Project</h4>
            <ul className="space-y-4 text-orange-50">
              <li><Link href="#karun-garden" className="hover:text-white cursor-pointer">Karun Garden</Link></li>
              <li><Link href="#naval-nagar" className="hover:text-white cursor-pointer">Naval Nagar</Link></li>
              <li><Link href="#sree-virutcham-nagar" className="hover:text-white cursor-pointer">Sree Virutcham Nagar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-orange-50">
              <p className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-xl">📞</span> +91 73977 85966
              </p>
              <p className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-xl">✉️</span> salescbe@triplesev.com
              </p>
              <p className="flex items-start gap-3 justify-center md:justify-start text-left">
                <span className="text-xl mt-1">📍</span>
                <span>No.149, Avinashi Road, Hopes College, Peelamedu post, CBE - 641 004</span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/30 text-center text-orange-200 text-sm">
          © {new Date().getFullYear()} VKV Realty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}