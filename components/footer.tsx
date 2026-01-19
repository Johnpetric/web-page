import Link from 'next/link'

const quickLinks = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/project', label: 'Project' },
    { href: '/contact', label: 'Contact' },
]

const projects = [
    { href: '/project#karun-garden', label: 'Karun Garden' },
    { href: '/project#naval-nagar', label: 'Naval Nagar' },
    { href: '/project#sree-virutcham-nagar', label: 'Sree Virutcham Nagar' },
]

export default function Footer() {
    return (
        <footer className="bg-[#F15B26]">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start">
                        <Link href="/home" className="flex items-center gap-2 mb-6">
                            <div className="bg-white p-2 rounded-lg">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* V shape - white/light */}
                                    <path d="M10 10L30 50L35 40L20 10H10Z" fill="#F15B26" />
                                    {/* V shape - navy */}
                                    <path d="M35 40L30 50L50 10H40L35 40Z" fill="#1E3A5F" />
                                    {/* Star */}
                                    <path d="M38 8L40 12L44 12L41 15L42 19L38 17L34 19L35 15L32 12L36 12Z" fill="#F15B26" />
                                </svg>
                            </div>
                            <div className="flex flex-col ml-3">
                                <span className="text-white font-bold text-2xl leading-none">VKV</span>
                                <span className="text-white font-bold text-2xl leading-none">Realty</span>
                                <span className="text-white/80 text-sm font-medium tracking-widest mt-1">1985</span>
                            </div>
                        </Link>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">Links</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/90 hover:text-white transition-colors text-base"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects Section */}
                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">Project</h3>
                        <ul className="space-y-4">
                            {projects.map((project, index) => (
                                <li key={index}>
                                    <Link
                                        href={project.href}
                                        className="text-white/90 hover:text-white transition-colors text-base"
                                    >
                                        {project.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-white/90">
                                <div className="bg-white/10 p-2 rounded-full">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V19.92C22 20.48 21.56 20.96 21 21C20.75 21.02 20.5 21 20.25 21C10.97 21 3.5 13.53 3 4.25C2.98 3.69 3.46 3.25 4.02 3.25H7.02C7.54 3.25 7.98 3.65 8.02 4.17C8.14 5.29 8.4 6.38 8.79 7.41C8.94 7.81 8.84 8.27 8.52 8.57L6.79 10.3C8.38 13.09 10.91 15.62 13.7 17.21L15.43 15.48C15.73 15.16 16.19 15.06 16.59 15.21C17.62 15.6 18.71 15.86 19.83 15.98C20.36 16.02 20.75 16.47 20.75 16.99V19.99L22 16.92Z" fill="white" />
                                    </svg>
                                </div>
                                <a href="tel:+917397785966" className="hover:text-white text-base">+91 73977 85966</a>
                            </li>
                            <li className="flex items-center gap-4 text-white/90">
                                <div className="bg-white/10 p-2 rounded-full">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <a href="mailto:salescbe@triplesev.com" className="hover:text-white text-base">salescbe@triplesev.com</a>
                            </li>
                            <li className="flex items-start gap-4 text-white/90">
                                <div className="bg-white/10 p-2 rounded-full mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="white" strokeWidth="2" />
                                        <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                                <span className="text-base leading-relaxed">No.149, Avinashi Road, Hopes College, Peelamedu post, CBE - 641 004</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Social Media Bar */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                    <div className="flex justify-center md:justify-between items-center">
                        <p className="text-white/80 text-sm hidden md:block">
                            © {new Date().getFullYear()} VKV Realty. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#F15B26] transition-all group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#F15B26]" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#F15B26] transition-all group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" className="group-hover:stroke-[#F15B26]" />
                                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" className="group-hover:stroke-[#F15B26]" />
                                    <circle cx="18" cy="6" r="1" fill="white" className="group-hover:fill-[#F15B26]" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#F15B26] transition-all group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#F15B26]" />
                                    <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="2" className="group-hover:stroke-[#F15B26]" />
                                    <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="2" className="group-hover:stroke-[#F15B26]" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#F15B26] transition-all group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.8384 17.9581 2.17817 18.2945C2.51794 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#F15B26]" />
                                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#F15B26]" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
