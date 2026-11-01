import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'

export function Hero() {
    return (
        <section
            id='home'
            className='relative min-h-[100dvh] w-full overflow-hidden bg-white text-[#17151A] isolate flex flex-col justify-between pt-24'
            aria-label='Introduction'
        >
            {/* Pure white base background */}
            <div className='absolute inset-0 bg-white pointer-events-none' />

            {/* SVG Perspective Grid Floor */}
            <div className='pointer-events-none absolute inset-x-0 bottom-0 top-[15%] overflow-hidden'>
                <svg
                    className='absolute left-0 w-full h-full'
                    viewBox='0 30 100 58'
                    preserveAspectRatio='none'
                    style={{
                        maskImage:
                            'radial-gradient(ellipse 65% 55% at 50% 55%, #000 0%, #000 48%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.18) 88%, transparent 100%)',
                        WebkitMaskImage:
                            'radial-gradient(ellipse 65% 55% at 50% 55%, #000 0%, #000 48%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.18) 88%, transparent 100%)',
                    }}
                    aria-hidden='true'
                >
                    <g fill='none' stroke='rgba(214,112,156,0.28)' strokeWidth='0.85' vectorEffect='non-scaling-stroke'>
                        {/* Perspective Grid Rays */}
                        <path d='M33.5 46.1L-115 152' vectorEffect='non-scaling-stroke' />
                        <path d='M35.56 45.79L-94.37 141.22' vectorEffect='non-scaling-stroke' />
                        <path d='M37.63 45.53L-73.75 131.88' vectorEffect='non-scaling-stroke' />
                        <path d='M39.69 45.31L-53.12 123.97' vectorEffect='non-scaling-stroke' />
                        <path d='M41.75 45.12L-32.5 117.5' vectorEffect='non-scaling-stroke' />
                        <path d='M43.81 44.98L-11.87 112.47' vectorEffect='non-scaling-stroke' />
                        <path d='M45.88 44.88L8.75 108.88' vectorEffect='non-scaling-stroke' />
                        <path d='M47.94 44.82L29.38 106.72' vectorEffect='non-scaling-stroke' />
                        <path d='M50 44.8L50 106' vectorEffect='non-scaling-stroke' />
                        <path d='M52.06 44.82L70.63 106.72' vectorEffect='non-scaling-stroke' />
                        <path d='M54.13 44.88L91.25 108.88' vectorEffect='non-scaling-stroke' />
                        <path d='M56.19 44.98L111.88 112.47' vectorEffect='non-scaling-stroke' />
                        <path d='M58.25 45.12L132.5 117.5' vectorEffect='non-scaling-stroke' />
                        <path d='M60.31 45.31L153.13 123.97' vectorEffect='non-scaling-stroke' />
                        <path d='M62.38 45.53L173.75 131.88' vectorEffect='non-scaling-stroke' />
                        <path d='M64.44 45.79L194.38 141.22' vectorEffect='non-scaling-stroke' />
                        <path d='M66.5 46.1L215 152' vectorEffect='non-scaling-stroke' />

                        {/* Concentric Horizon Arcs */}
                        <path d='M-115 152 Q50 100 215 152' vectorEffect='non-scaling-stroke' />
                        <path d='M-63.79 110.76 Q50 82 163.79 110.76' vectorEffect='non-scaling-stroke' />
                        <path d='M-36.84 90.8 Q50 72 136.84 90.8' vectorEffect='non-scaling-stroke' />
                        <path d='M-20.21 79.17 Q50 65 120.21 79.17' vectorEffect='non-scaling-stroke' />
                        <path d='M-8.93 71.61 Q50 61 108.93 71.61' vectorEffect='non-scaling-stroke' />
                        <path d='M-0.77 66.32 Q50 58 100.77 66.32' vectorEffect='non-scaling-stroke' />
                        <path d='M5.41 62.43 Q50 55.5 94.59 62.43' vectorEffect='non-scaling-stroke' />
                        <path d='M10.24 59.45 Q50 53.5 89.76 59.45' vectorEffect='non-scaling-stroke' />
                        <path d='M14.13 57.1 Q50 52 85.87 57.1' vectorEffect='non-scaling-stroke' />
                        <path d='M17.33 55.2 Q50 50.8 82.67 55.2' vectorEffect='non-scaling-stroke' />
                        <path d='M20 53.64 Q50 49.8 80 53.64' vectorEffect='non-scaling-stroke' />
                        <path d='M22.27 52.33 Q50 49 77.73 52.33' vectorEffect='non-scaling-stroke' />
                        <path d='M24.22 51.21 Q50 48.2 75.78 51.21' vectorEffect='non-scaling-stroke' />
                        <path d='M25.91 50.26 Q50 47.6 74.09 50.26' vectorEffect='non-scaling-stroke' />
                        <path d='M27.4 49.43 Q50 47.1 72.6 49.43' vectorEffect='non-scaling-stroke' />
                        <path d='M28.71 48.7 Q50 46.6 71.29 48.7' vectorEffect='non-scaling-stroke' />
                        <path d='M29.88 48.06 Q50 46.1 70.12 48.06' vectorEffect='non-scaling-stroke' />
                        <path d='M30.92 47.48 Q50 45.7 69.08 47.48' vectorEffect='non-scaling-stroke' />
                        <path d='M31.87 46.97 Q50 45.3 68.13 46.97' vectorEffect='non-scaling-stroke' />
                        <path d='M32.72 46.51 Q50 45 67.28 46.51' vectorEffect='non-scaling-stroke' />
                        <path d='M33.5 46.1 Q50 44.7 66.5 46.1' vectorEffect='non-scaling-stroke' />
                    </g>
                </svg>
            </div>

            {/* Soft pink atmospheric lighting & gradient wash */}
            <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                <div
                    className='absolute inset-x-0 bottom-[-10%] top-[40%]'
                    style={{
                        background:
                            'radial-gradient(ellipse 76% 50% at 50% 92%, rgba(247,187,210,0.65) 0%, rgba(247,187,210,0.25) 48%, rgba(247,187,210,0) 100%), linear-gradient(180deg, rgba(252,232,240,0) 35%, rgba(252,232,240,0.7) 64%, rgba(248,220,231,0.88) 82%, rgba(244,198,216,0.96) 96%)',
                    }}
                />
            </div>

            {/* Central Focal Point: Name replacing the blob (Ultra clean & minimal per user request) */}
            <div className='relative z-20 flex flex-1 flex-col items-center justify-center text-center px-[clamp(18px,4.2vw,56px)] my-auto'>
                <div className='max-w-[1200px]'>
                    {/* Oversized Name in the Center */}
                    <h1 className='font-heading text-[clamp(48px,11vw,160px)] font-bold leading-[0.88] tracking-[-0.045em] text-[#17151A] select-none'>
                        Bhuvaneswari
                    </h1>
                    <h2 className='font-heading text-[clamp(34px,7.5vw,110px)] font-bold leading-[0.92] tracking-[-0.04em] text-[#17151A]/85 select-none mt-1 sm:mt-2'>
                        Lemburu
                    </h2>

                    {/* Minimal Editorial Subtitle */}
                    <p className='mt-6 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.28em] text-[#77727A]'>
                        Data Analytics · Business Intelligence · Visualization
                    </p>

                    {/* Clean Centered Action Buttons */}
                    <div className='mt-10 flex flex-wrap items-center justify-center gap-3.5'>
                        <Link
                            href='/#work'
                            className='group inline-flex items-center gap-2 rounded-full bg-[#17151A] px-6 py-3.5 text-[13px] font-medium text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                        >
                            Explore my work
                            <ArrowDownRight className='size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5' />
                        </Link>
                        <Link
                            href='/#contact'
                            className='inline-flex items-center gap-2 rounded-full bg-white/85 px-6 py-3.5 text-[13px] font-medium text-[#17151A] border border-[#17151A]/12 outline-none backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-[#17151A]/30 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Info */}
            <div className='relative z-20 px-[clamp(18px,4.2vw,56px)] pb-[clamp(18px,3vh,32px)]'>
                <div className='flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-[#17151A]/75 border-t border-[#17151A]/8 pt-4'>
                    <span className='whitespace-nowrap'>© 2026 BHUVANESWARI LEMBURU</span>
                    <Link
                        href='/#work'
                        className='group flex items-center gap-2.5 whitespace-nowrap outline-none transition-colors hover:text-[#c25a88] focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                    >
                        <span className='hidden min-[400px]:inline'>SCROLL TO EXPLORE</span>
                        <span
                            aria-hidden='true'
                            className='relative block h-[22px] w-px overflow-hidden bg-[#17151A]/20'
                        >
                            <span className='scroll-tick absolute left-0 top-0 block h-[8px] w-px bg-[#17151A]' />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
