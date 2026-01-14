'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Project' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* V shape - orange */}
                <path d="M10 10L30 50L35 40L20 10H10Z" fill="#F15B26"/>
                {/* V shape - navy */}
                <path d="M35 40L30 50L50 10H40L35 40Z" fill="#1E3A5F"/>
                {/* Star */}
                <path d="M38 8L40 12L44 12L41 15L42 19L38 17L34 19L35 15L32 12L36 12Z" fill="#F15B26"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1E3A5F] font-bold text-xl leading-tight">VKV</span>
              <span className="text-[#1E3A5F] font-bold text-xl leading-tight">Realty</span>
              <span className="text-[#F15B26] text-xs font-semibold tracking-wider">1985</span>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#F15B26]'
                  : 'text-[#1E3A5F] hover:text-[#F15B26]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call Us Now Button */}
        <Link
          href="tel:+917397785966"
          className="hidden md:flex items-center gap-2 bg-[#F15B26] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d94d1d] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22 20.48 21.56 20.96 21 21C20.75 21.02 20.5 21 20.25 21C10.97 21 3.5 13.53 3 4.25C2.98 3.69 3.46 3.25 4.02 3.25H7.02C7.54 3.25 7.98 3.65 8.02 4.17C8.14 5.29 8.4 6.38 8.79 7.41C8.94 7.81 8.84 8.27 8.52 8.57L6.79 10.3C8.38 13.09 10.91 15.62 13.7 17.21L15.43 15.48C15.73 15.16 16.19 15.06 16.59 15.21C17.62 15.6 18.71 15.86 19.83 15.98C20.36 16.02 20.75 16.47 20.75 16.99V19.99L22 16.92Z" fill="white"/>
          </svg>
          Call Us Now
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  )
}
