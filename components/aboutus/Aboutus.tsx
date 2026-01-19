import Image from 'next/image'

const coreValues = [
  {
    icon: '/images/About us page/about us page icons/2nd fold/icon frame.png',
    title: 'Leadership in Real Estate:',
    description: '40+ years of expertise in delivering impactful projects',
  },
  {
    icon: '/images/About us page/about us page icons/2nd fold/icon frame (1).png',
    title: 'Excellence in Every Detail:',
    description: 'Strategic planning and flawless execution for every development.',
  },
  {
    icon: '/images/About us page/about us page icons/2nd fold/icon frame (2).png',
    title: 'Customer-First Approach:',
    description: 'Clear communication, trust, and understanding in every project.',
  },
  {
    icon: '/images/About us page/about us page icons/2nd fold/icon frame (3).png',
    title: 'Financial Integrity:',
    description: 'Sustainable investments that protect your future',
  },
  {
    icon: '/images/About us page/about us page icons/2nd fold/icon (2).png',
    title: 'Branding That Matters:',
    description: 'Strong marketing strategies and a brand you can rely on',
  },
  {
    icon: '/images/About us page/about us page icons/2nd fold/icon (3).png',
    title: 'Compliance with Confidence:',
    description: 'Adherence to all regulations for a smooth journey',
  },
  {
    icon: '/images/About us page/about us page icons/2nd fold/icon frame (4).png',
    title: 'Sustainability at Heart:',
    description: 'Developments designed to last for generations.',
  },
]

const whyVkvFeatures = [
  {
    icon: '/images/About us page/about us page icons/about us page-4th fold/icon 1.png',
    title: 'Proven Track Record:',
    description: '40 years of successful projects in residential, agricultural, and commercial spaces',
  },
  {
    icon: '/images/About us page/about us page icons/about us page-4th fold/icon 2.png',
    title: 'Expert Advice, Always:',
    description: 'From investment tips to property inspections, we guide you every step of the way',
  },
  {
    icon: '/images/About us page/about us page icons/about us page-4th fold/icon 3.png',
    title: 'Innovative Solutions',
    description: 'Adapting to the latest trends to meet your needs.',
  },
  {
    icon: '/images/About us page/about us page icons/about us page-4th fold/icon 4.png',
    title: 'Trust You Can Count On:',
    description: 'Built on solid foundations of customer loyalty and community service.',
  },
  {
    icon: '/images/About us page/about us page icons/about us page-4th fold/icon 5.png',
    title: 'Exclusive Opportunities:',
    description: 'Access to premium projects and investments with reduced risk.',
  },
  {
    icon: '/images/About us page/about us page icons/about us page-4th fold/icon 6.png',
    title: 'Sustainable Future:',
    description: 'Creating developments that not only stand the test of time but contribute to a sustainable tomorrow',
  },
]

export default function Aboutus() {
  return (
    <div className="min-h-screen">
      {/* First Fold - Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#F15B26] mb-12 ">
            Welcome to VKV Realty - <span className="text-[#1E3A5F]">Building Dreams,</span>
            <br />
            <span className="text-[#1E3A5F]">Shaping Tomorrow !</span>
          </h1>

          {/* Vision, Image, Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Our Vision */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <Image
                    src="/images/About us page/about us page icons/about us page-1st fold/vision icon.png"
                    alt="Vision Icon"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-[#1E3A5F]">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                At VKV Realty, we&apos;re not just about building properties; we&apos;re about building the future. As Coimbatore&apos;s most trusted real estate developer, our goal is to create innovative, sustainable living spaces that enrich the lives of people while contributing to the city&apos;s vibrant development. With over 40 years of heritage, we&apos;re dedicated to transforming the landscape with projects that blend modern living with Coimbatore&apos;s timeless charm. We&apos;re building more than just homes; we&apos;re creating lasting connections and dreams that stand the test of time
              </p>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative overflow-hidden rounded-lg shadow-lg transform rotate-3">
                  <Image
                    src="/images/About us page/ff about page images/first fold image.png"
                    alt="VKV Realty Building"
                    width={400}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <Image
                    src="/images/About us page/about us page icons/about us page-1st fold/mission icon.png"
                    alt="Mission Icon"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-[#1E3A5F]">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We&apos;re on a mission to meet the evolving needs of Coimbatore&apos;s people by offering thoughtfully planned residential, commercial, and industrial spaces that fuel growth and long-term value. Our goal is simple—enhance the city&apos;s livability, preserve its unique identity, and provide real estate solutions that promote sustainability, ethical practices, and customer satisfaction. With a commitment to transparency and integrity, we&apos;re here to build relationships that last and make your vision a reality!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Fold - Core Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F] mb-12">
            Core Values That Drive Us
          </h2>

          {/* Top Row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {coreValues.slice(0, 4).map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreValues.slice(4).map((value, index) => (
              <div
                key={index + 4}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Fold - Our Journey */}
      <section className="bg-[#2D2A5A] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey - Crafting a Legacy
            </h2>
            <p className="text-gray-300 text-lg">
              Since 1985, VKV Realty has been shaping Coimbatore&apos;s skyline, one landmark at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/About us page/ff about page images/second fold image.png"
                  alt="Coimbatore Cityscape"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-white">
              <p className="text-gray-300 leading-relaxed mb-6">
                With over 30 successful projects, we&apos;ve built more than just plots—we&apos;ve built communities, trust, and futures. Our journey has been fueled by a passion for excellence and a commitment to customer satisfaction.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we continue to build on that legacy, delivering premium living spaces and investment opportunities that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Fold - Why VKV Realty */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#F15B26]">Why</span>{' '}
              <span className="text-[#1E3A5F]">VKV Realty?</span>
            </h2>
            <p className="text-gray-600 text-lg">Here&apos;s What Sets Us Apart:</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {whyVkvFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-6 py-6 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                    <h3 className="text-lg font-bold text-[#1E3A5F] min-w-[200px]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
