import Link from "next/link";

export default function Header() {
    return (
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
    );
}
