import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            const pos = window.scrollY
            setScrolled(pos > 80)

            const sections = ['work', 'about', 'credentials', 'contact']
            let current = 'home'
            for (const section of sections) {
                const el = document.getElementById(section)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 200) {
                        current = section
                    }
                }
            }
            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className='pointer-events-none fixed inset-x-0 top-0 z-50'>
            {/* Top Left Name Badge */}
            <div className='absolute left-[clamp(18px,4.2vw,56px)] top-[18px] hidden transition-all duration-500 ease-out lg:block pointer-events-auto'>
                <Link
                    href='/'
                    className='block rounded-2xl bg-white/80 px-4 py-2 border border-[#17151A]/8 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                >
                    <span className='block text-[11px] font-semibold leading-[1.28] tracking-[-0.01em] text-[#17151A]'>
                        Bhuvaneswari Lemburu
                    </span>
                    <span className='block text-[8px] font-medium uppercase tracking-[0.22em] text-[#77727A]'>
                        Data Analytics &amp; Business Intelligence
                    </span>
                </Link>
            </div>

            {/* Top Center Capsule Navigation */}
            <nav aria-label='Main' className='pointer-events-auto absolute left-1/2 top-3 -translate-x-1/2'>
                <ul className='relative flex items-center gap-1 rounded-full border border-[#17151A]/10 bg-white/80 p-1 shadow-[0_10px_30px_-14px_rgba(160,70,110,0.35)] backdrop-blur-md'>
                    <li>
                        <Link
                            href='/'
                            className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-medium leading-none outline-none transition-all duration-300 sm:px-4 ${
                                activeSection === 'home'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/65 hover:text-[#17151A]'
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/#work'
                            className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-medium leading-none outline-none transition-all duration-300 sm:px-4 ${
                                activeSection === 'work'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/65 hover:text-[#17151A]'
                            }`}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/#about'
                            className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-medium leading-none outline-none transition-all duration-300 sm:px-4 ${
                                activeSection === 'about'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/65 hover:text-[#17151A]'
                            }`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/#credentials'
                            className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-medium leading-none outline-none transition-all duration-300 sm:px-4 ${
                                activeSection === 'credentials'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/65 hover:text-[#17151A]'
                            }`}
                        >
                            Credentials
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/#contact'
                            className={`relative inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-medium leading-none outline-none transition-all duration-300 sm:px-4 ${
                                activeSection === 'contact'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/65 hover:text-[#17151A]'
                            }`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Top Right Let's Connect CTA */}
            <div className='absolute right-[clamp(18px,4.2vw,56px)] top-[20px] hidden transition-all duration-500 ease-out lg:block pointer-events-auto'>
                <Link
                    href='/#contact'
                    className='group inline-flex items-center gap-2 rounded-full border border-[#17151A]/12 bg-white/80 px-4 py-2 text-[11px] font-medium text-[#17151A] outline-none backdrop-blur-md transition-colors duration-300 hover:border-[#17151A]/30 focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                >
                    Let&#39;s connect
                    <ArrowUpRight className='size-3.5 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px' />
                </Link>
            </div>
        </header>
    )
}
