import Link from 'next/link'
import { Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
    return (
        <section
            id='contact'
            aria-labelledby='contact-heading'
            className='relative overflow-hidden bg-gradient-to-b from-white via-[#FCF1F6]/50 to-[#F8DCE7]/60'
        >
            {/* Perspective grid curves at footer horizon */}
            <div
                aria-hidden='true'
                className='soft-breathe pointer-events-none absolute left-1/2 top-[38%] h-[70%] w-[90%] -translate-x-1/2 rounded-full'
                style={{
                    background:
                        'radial-gradient(ellipse, rgba(247,187,210,0.55) 0%, rgba(247,187,210,0) 65%)',
                }}
            />

            <div className='relative mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)] pt-[clamp(80px,11vw,160px)]'>
                {/* Header & Floating Glass Sphere */}
                <div className='relative border-t border-[#17151A]/10 pt-8'>
                    {/* Floating Glass Sphere on the right */}
                    <div className='pointer-events-none absolute right-[2%] top-[-8%] hidden w-[clamp(140px,16vw,240px)] md:block'>
                        <div className='float-sphere glass-sphere w-full' />
                    </div>

                    <h2
                        id='contact-heading'
                        className='relative max-w-[14ch] text-balance font-heading text-[clamp(42px,8vw,130px)] font-bold leading-[0.92] tracking-[-0.05em] text-[#17151A]'
                    >
                        Let&#39;s make something{' '}
                        <span className='font-serif font-normal italic tracking-[-0.02em] text-[#c25a88]'>
                            meaningful.
                        </span>
                    </h2>

                    <div className='mt-8'>
                        <p className='max-w-[46ch] text-pretty text-[clamp(16px,1.3vw,19px)] leading-relaxed text-[#17151A]/75'>
                            I&#39;m always interested in connecting with people who enjoy building, analysing, and solving interesting problems.
                        </p>
                    </div>
                </div>

                {/* 3 Contact CTA Cards */}
                <div className='mt-16 grid gap-4 md:grid-cols-3 md:gap-5'>
                    {/* Email Card */}
                    <Link
                        href='mailto:lemburu.bhuvaneswari@gmail.com'
                        className='group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[clamp(18px,2vw,28px)] border border-white/90 bg-white/75 p-6 shadow-[0_20px_50px_-30px_rgba(160,60,105,0.4)] outline-none backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_70px_-30px_rgba(160,60,105,0.5)] focus-visible:ring-2 focus-visible:ring-[#d77fa4] md:min-h-[230px] md:p-7'
                    >
                        <div className='relative flex items-center justify-between'>
                            <span className='grid size-11 place-items-center rounded-full bg-[#17151A] text-white transition-transform duration-500 group-hover:scale-110'>
                                <Mail className='size-5' />
                            </span>
                            <ArrowUpRight className='size-5 text-[#17151A]/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#17151A]' />
                        </div>
                        <div className='relative mt-6'>
                            <span className='block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                                Email Me
                            </span>
                            <span className='mt-2 block font-heading text-[clamp(20px,1.8vw,26px)] font-bold tracking-[-0.025em] text-[#17151A]'>
                                Write to me directly
                            </span>
                            <span className='mt-1 block truncate text-[13px] text-[#17151A]/65'>
                                lemburu.bhuvaneswari@gmail.com
                            </span>
                        </div>
                    </Link>

                    {/* LinkedIn Card */}
                    <Link
                        href='https://www.linkedin.com/in/lemburu-bhuvaneswari/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[clamp(18px,2vw,28px)] border border-white/90 bg-white/75 p-6 shadow-[0_20px_50px_-30px_rgba(160,60,105,0.4)] outline-none backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_70px_-30px_rgba(160,60,105,0.5)] focus-visible:ring-2 focus-visible:ring-[#d77fa4] md:min-h-[230px] md:p-7'
                    >
                        <div className='relative flex items-center justify-between'>
                            <span className='grid size-11 place-items-center rounded-full bg-[#17151A] text-white transition-transform duration-500 group-hover:scale-110'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                                    <rect width='4' height='12' x='2' y='9' />
                                    <circle cx='4' cy='4' r='2' />
                                </svg>
                            </span>
                            <ArrowUpRight className='size-5 text-[#17151A]/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#17151A]' />
                        </div>
                        <div className='relative mt-6'>
                            <span className='block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                                LinkedIn
                            </span>
                            <span className='mt-2 block font-heading text-[clamp(20px,1.8vw,26px)] font-bold tracking-[-0.025em] text-[#17151A]'>
                                Connect on LinkedIn
                            </span>
                            <span className='mt-1 block truncate text-[13px] text-[#17151A]/65'>
                                in/lemburu-bhuvaneswari
                            </span>
                        </div>
                    </Link>

                    {/* GitHub Card */}
                    <Link
                        href='https://github.com/Lemburu-Bhuvaneswari'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[clamp(18px,2vw,28px)] border border-white/90 bg-white/75 p-6 shadow-[0_20px_50px_-30px_rgba(160,60,105,0.4)] outline-none backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_70px_-30px_rgba(160,60,105,0.5)] focus-visible:ring-2 focus-visible:ring-[#d77fa4] md:min-h-[230px] md:p-7'
                    >
                        <div className='relative flex items-center justify-between'>
                            <span className='grid size-11 place-items-center rounded-full bg-[#17151A] text-white transition-transform duration-500 group-hover:scale-110'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                                    <path d='M9 18c-4.51 2-5-2-7-2' />
                                </svg>
                            </span>
                            <ArrowUpRight className='size-5 text-[#17151A]/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#17151A]' />
                        </div>
                        <div className='relative mt-6'>
                            <span className='block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                                GitHub
                            </span>
                            <span className='mt-2 block font-heading text-[clamp(20px,1.8vw,26px)] font-bold tracking-[-0.025em] text-[#17151A]'>
                                See the code
                            </span>
                            <span className='mt-1 block truncate text-[13px] text-[#17151A]/65'>
                                Lemburu-Bhuvaneswari
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Footer Component inside contact section */}
                <footer className='relative mt-24 border-t border-[#17151A]/10 pb-8 pt-8'>
                    <div className='flex flex-wrap items-center justify-between gap-6'>
                        <div>
                            <p className='text-[13px] font-semibold tracking-[-0.01em] text-[#17151A]'>
                                Bhuvaneswari Lemburu
                            </p>
                            <p className='mt-0.5 text-[12px] text-[#77727A]'>
                                Data Analytics · Business Intelligence · Technology
                            </p>
                        </div>
                        <div className='flex items-center gap-6 text-[12px] font-medium text-[#17151A]/75'>
                            <Link
                                href='https://www.linkedin.com/in/lemburu-bhuvaneswari/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-[#17151A] transition-colors'
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href='https://github.com/Lemburu-Bhuvaneswari'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-[#17151A] transition-colors'
                            >
                                GitHub
                            </Link>
                            <span className='tabular-nums text-[#77727A]'>© 2026</span>
                        </div>
                    </div>

                    {/* Massive Display Signature */}
                    <div className='mt-8 select-none text-center overflow-hidden'>
                        <p className='font-heading text-[clamp(44px,12vw,190px)] font-bold leading-[0.82] tracking-[-0.055em] text-[#17151A]'>
                            Bhuvaneswari
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    )
}
