import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Project' },
  { href: '/contact', label: 'Contact' },
]

const projects = [
  { href: '/project', label: 'Karun Garden' },
  { href: '/project', label: 'Naval Nagar' },
  { href: '/project', label: 'Sree Virutcham Nagar' },
]

const socialIcons = [
  { href: '#', icon: '/images/About us page/about us page icons/footer icons/Group 16.png', alt: 'Facebook' },
  { href: '#', icon: '/images/About us page/about us page icons/footer icons/Group 15.png', alt: 'Instagram' },
  { href: '#', icon: '/images/About us page/about us page icons/footer icons/Group 17.png', alt: 'LinkedIn' },
  { href: '#', icon: '/images/About us page/about us page icons/footer icons/Group 18.png', alt: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#F15B26]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Link href="/home" className="flex items-center gap-3 mb-4">
              <svg width="100" height="100" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* V shape - orange (blends with background) */}
                <path d="M10 10L30 50L35 40L20 10H10Z" fill="#F15B26"/>
                {/* V shape - navy */}
                <path d="M35 40L30 50L50 10H40L35 40Z" fill="#1E3A5F"/>
                {/* Star */}
                <path d="M38 8L40 12L44 12L41 15L42 19L38 17L34 19L35 15L32 12L36 12Z" fill="#F15B26"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[#1E3A5F] font-bold text-3xl leading-tight">VKV</span>
                <span className="text-[#1E3A5F] font-bold text-3xl leading-tight">Realty</span>
                <span className="text-white text-sm font-semibold tracking-wider">1985</span>
              </div>
            </Link>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#1E3A5F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Project</h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link
                    href={project.href}
                    className="text-white hover:text-[#1E3A5F] transition-colors"
                  >
                    {project.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.48 21.56 20.96 21 21C20.75 21.02 20.5 21 20.25 21C10.97 21 3.5 13.53 3 4.25C2.98 3.69 3.46 3.25 4.02 3.25H7.02C7.54 3.25 7.98 3.65 8.02 4.17C8.14 5.29 8.4 6.38 8.79 7.41C8.94 7.81 8.84 8.27 8.52 8.57L6.79 10.3C8.38 13.09 10.91 15.62 13.7 17.21L15.43 15.48C15.73 15.16 16.19 15.06 16.59 15.21C17.62 15.6 18.71 15.86 19.83 15.98C20.36 16.02 20.75 16.47 20.75 16.99V19.99L22 16.92Z" fill="white"/>
                </svg>
                <a href="tel:+917397785966" className="hover:underline">+91 73977 85966</a>
              </li>
              <li className="flex items-center gap-3 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:salescbe@triplesev.com" className="hover:underline">salescbe@triplesev.com</a>
              </li>
              <li className="flex items-start gap-3 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
                </svg>
                <span>No.149, Avinashi Road, Hopes College, Peelamedu post, CBE - 641 004</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="border-t border-[#e04d1d]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-center gap-4">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.href} className="hover:opacity-80 transition-opacity">
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
