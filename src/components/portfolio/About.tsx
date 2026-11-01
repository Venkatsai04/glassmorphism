import { GraduationCap } from 'lucide-react'

export function About() {
    return (
        <section id='about' aria-labelledby='about-heading' className='relative bg-white'>
            <div className='mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)] py-[clamp(80px,10vw,150px)]'>
                {/* Header */}
                <div className='border-t border-[#17151A]/10 pt-8'>
                    <h2
                        id='about-heading'
                        className='max-w-[18ch] text-balance font-heading text-[clamp(36px,5vw,76px)] font-bold leading-[0.96] tracking-[-0.04em] text-[#17151A]'
                    >
                        A little about the person behind the{' '}
                        <span className='font-serif font-normal italic tracking-[-0.02em] text-[#c25a88]'>
                            projects.
                        </span>
                    </h2>
                </div>

                <div className='mt-12 grid gap-12 lg:grid-cols-12 lg:gap-12'>
                    {/* Left Column: Visual Card with sculpted 'B' & floating glass sphere */}
                    <div className='lg:col-span-6'>
                        <div className='relative aspect-[5/4] sm:aspect-[16/11] overflow-hidden rounded-[clamp(20px,2.4vw,32px)] bg-gradient-to-b from-white via-[#FCF1F6] to-[#F8DCE7] border border-[#17151A]/10 shadow-sm flex flex-col justify-between p-8'>
                            {/* Ambient Pink Glow Circle */}
                            <div
                                aria-hidden='true'
                                className='soft-breathe absolute left-1/2 top-[30%] h-[70%] w-[80%] -translate-x-1/2 rounded-full'
                                style={{
                                    background:
                                        'radial-gradient(circle, rgba(247,187,210,0.65) 0%, rgba(247,187,210,0) 68%)',
                                }}
                            />

                            {/* Sculpted Display Initial 'B' */}
                            <span
                                aria-hidden='true'
                                className='absolute left-[6%] top-[2%] select-none font-heading text-[clamp(150px,24vw,340px)] font-bold leading-none tracking-[-0.06em] text-[#17151A]/90'
                            >
                                B
                            </span>

                            {/* Floating Glass Sphere overlay */}
                            <div className='absolute left-[32%] top-[14%] w-[38%] pointer-events-none'>
                                <div className='float-sphere glass-sphere w-full' />
                            </div>

                            <div />

                            {/* Bottom Statement Quote */}
                            <p className='relative z-10 max-w-[26ch] font-serif text-[clamp(19px,2vw,28px)] italic leading-[1.15] text-[#17151A]'>
                                Analytics is not simply about building another dashboard.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Narrative Biography & Credentials */}
                    <div className='lg:col-span-6 lg:pt-2 flex flex-col justify-between'>
                        <div className='space-y-5 text-pretty text-[clamp(16px,1.4vw,19px)] font-normal leading-[1.6] text-[#17151A]/80'>
                            <p className='font-medium text-[#17151A]'>
                                I&#39;m Bhuvaneswari, a Computer Science graduate interested in data analytics, technology, and practical problem-solving.
                            </p>
                            <p>
                                I enjoy understanding how things work, exploring information, and finding ways to make complex problems easier to understand.
                            </p>
                            <p>
                                I&#39;m especially interested in the connection between data and business decisions. For me, analytics is not simply about building another dashboard. It is about asking the right questions, understanding what the numbers reveal, and communicating useful insights.
                            </p>
                        </div>

                        {/* Education Highlight Card */}
                        <div className='mt-8'>
                            <div className='relative overflow-hidden rounded-2xl border border-[#17151A]/10 bg-white p-6 shadow-[0_20px_50px_-36px_rgba(160,60,105,0.4)]'>
                                <div
                                    aria-hidden='true'
                                    className='absolute -right-8 -top-8 size-32 rounded-full bg-[#FCF1F6]'
                                />
                                <div className='relative flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                                    <GraduationCap className='size-4 text-[#c25a88]' />
                                    <span>Education</span>
                                </div>
                                <p className='relative mt-3 font-heading text-[22px] font-bold tracking-[-0.025em] text-[#17151A]'>
                                    Narayana Engineering College
                                </p>
                                <div className='relative mt-2 flex flex-wrap items-center justify-between gap-2 text-[14px] text-[#17151A]/70'>
                                    <span>Computer Science and Engineering</span>
                                    <span className='rounded-full bg-[#17151A] px-3 py-1 text-[11.5px] font-medium text-white'>
                                        2022–2026
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Fast Facts / Details */}
                        <dl className='mt-8 divide-y divide-[#17151A]/10 border-y border-[#17151A]/10'>
                            <div className='flex items-baseline justify-between gap-6 py-3.5'>
                                <dt className='text-[11px] font-semibold uppercase tracking-[0.16em] text-[#77727A]'>
                                    Based in
                                </dt>
                                <dd className='text-right text-[14px] font-medium text-[#17151A]'>
                                    Hyderabad, India
                                </dd>
                            </div>
                            <div className='flex items-baseline justify-between gap-6 py-3.5'>
                                <dt className='text-[11px] font-semibold uppercase tracking-[0.16em] text-[#77727A]'>
                                    Focus
                                </dt>
                                <dd className='text-right text-[14px] font-medium text-[#17151A]'>
                                    Data analytics and business intelligence
                                </dd>
                            </div>
                            <div className='flex items-baseline justify-between gap-6 py-3.5'>
                                <dt className='text-[11px] font-semibold uppercase tracking-[0.16em] text-[#77727A]'>
                                    Languages
                                </dt>
                                <dd className='text-right text-[14px] font-medium text-[#17151A]'>
                                    Python, Java, SQL
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}
