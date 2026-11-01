import Link from 'next/link'

export function SelectedWork() {
    return (
        <section id='work' aria-labelledby='work-heading' className='relative z-10 bg-white'>
            {/* Atmospheric gradient transition from hero */}
            <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 bottom-full h-[22dvh] bg-gradient-to-b from-[rgba(248,220,231,0)] via-[rgba(252,236,243,0.82)] to-[#FDF3F7]'
            />
            <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-x-0 top-0 h-[50dvh] bg-gradient-to-b from-[#FDF3F7] to-white'
            />

            <div className='relative mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)] pb-[clamp(36px,5vw,72px)] pt-[clamp(48px,8vh,96px)]'>
                <div className='grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8'>
                    <h2
                        id='work-heading'
                        className='text-balance font-heading text-[clamp(40px,6.8vw,110px)] font-bold leading-[0.92] tracking-[-0.045em] text-[#17151A] lg:col-span-8'
                    >
                        Turning questions into{' '}
                        <span className='font-serif font-normal italic tracking-[-0.02em] text-[#c25a88]'>
                            projects.
                        </span>
                    </h2>

                    <div className='lg:col-span-4 lg:pb-3'>
                        <p className='max-w-[38ch] text-pretty text-[15.5px] leading-relaxed text-[#17151A]/70'>
                            A collection of projects exploring data, technology, visualisation, and problem-solving.
                        </p>

                        <div className='mt-8 border-t border-[#17151A]/10'>
                            <Link
                                href='/#garbha-analytics'
                                className='group flex items-baseline justify-between border-b border-[#17151A]/10 py-3 outline-none transition-colors duration-300 hover:text-[#c25a88]'
                            >
                                <span className='text-[15px] font-medium tracking-[-0.01em]'>Garbha Analytics</span>
                                <span className='text-[12px] text-[#77727A]'>Analytics dashboard</span>
                            </Link>
                            <Link
                                href='/#student-counselling'
                                className='group flex items-baseline justify-between border-b border-[#17151A]/10 py-3 outline-none transition-colors duration-300 hover:text-[#c25a88]'
                            >
                                <span className='text-[15px] font-medium tracking-[-0.01em]'>
                                    Online Student Counselling System
                                </span>
                                <span className='text-[12px] text-[#77727A]'>Web application</span>
                            </Link>
                            <Link
                                href='/#brain-tumor-detection'
                                className='group flex items-baseline justify-between border-b border-[#17151A]/10 py-3 outline-none transition-colors duration-300 hover:text-[#c25a88]'
                            >
                                <span className='text-[15px] font-medium tracking-[-0.01em]'>Brain Tumor Detection</span>
                                <span className='text-[12px] text-[#77727A]'>Deep-learning demo</span>
                            </Link>
                            <Link
                                href='/#practice-challenges'
                                className='group flex items-baseline justify-between border-b border-[#17151A]/10 py-3 outline-none transition-colors duration-300 hover:text-[#c25a88]'
                            >
                                <span className='text-[15px] font-medium tracking-[-0.01em]'>Practice Coding Challenges</span>
                                <span className='text-[12px] text-[#77727A]'>Algorithm challenges</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
