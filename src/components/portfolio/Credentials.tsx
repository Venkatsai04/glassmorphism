import { useState } from 'react'
import { Plus, Minus, Trophy } from 'lucide-react'

interface CredentialItem {
    id: string
    title: string
    issuer: string
    date?: string
    type: string
    description: string
    source: string
}

const LICENSES: CredentialItem[] = [
    {
        id: 'c1',
        title: 'Oracle Certified Foundations Associate – Agentic AI',
        issuer: 'Oracle',
        date: 'August 2026',
        type: 'Certification',
        description: 'A foundations-level Oracle certification in agentic AI and intelligent autonomous workflows.',
        source: 'LinkedIn, Licenses & Certifications',
    },
    {
        id: 'c2',
        title: 'Business Analysis & Process Management',
        issuer: 'Coursera',
        date: 'July 2026',
        type: 'Course certificate',
        description: 'A comprehensive Coursera specialization in business analysis, process modelling, and requirements elicitation.',
        source: 'LinkedIn, Licenses & Certifications',
    },
    {
        id: 'c3',
        title: 'Deloitte Data Analytics Job Simulation',
        issuer: 'Forage',
        date: 'July 2026',
        type: 'Job simulation',
        description: 'A practical data analytics simulation designed by Deloitte: forensic analytics, telemetry, and executive presentation.',
        source: 'LinkedIn, Licenses & Certifications',
    },
    {
        id: 'c4',
        title: 'Google AI Essentials',
        issuer: 'Google',
        date: 'January 2024',
        type: 'Course certificate',
        description: "Google's foundational AI Essentials course covering modern generative models, prompt engineering, and ethical AI application.",
        source: 'LinkedIn, Licenses & Certifications',
    },
]

const BADGES: CredentialItem[] = [
    {
        id: 'b1',
        title: 'TCS iON Career Edge – Generative AI Essentials',
        issuer: 'TCS iON',
        type: 'Course completion',
        description: 'Completion of the Generative AI Essentials course in the TCS iON Career Edge series.',
        source: 'LinkedIn post',
    },
    {
        id: 'b2',
        title: 'YUVA AI For All',
        issuer: 'IndiaAI through TCS iON',
        type: 'Course completion',
        description: 'Completion of YUVA AI For All, an initiative offered by IndiaAI in collaboration with TCS iON.',
        source: 'LinkedIn post',
    },
    {
        id: 'b3',
        title: 'Get Started Building with Power BI',
        issuer: 'Microsoft Learn',
        type: 'Learning badge',
        description: 'A Microsoft Learn credential validating mastery of Power BI data modeling, DAX measures, and dashboard composition.',
        source: 'LinkedIn post',
    },
    {
        id: 'b4',
        title: 'JobReady: Employability Skills',
        issuer: 'Wadhwani Foundation',
        type: 'Micro-certifications',
        description: '10 micro-certifications with an overall verified skill score of 92% as reported on LinkedIn.',
        source: 'LinkedIn post',
    },
]

const PARTICIPATION: CredentialItem[] = [
    {
        id: 'p1',
        title: 'Women Who Master: MCQ Assessment',
        issuer: 'Unstop',
        date: 'July 2026',
        type: 'Certificate of participation',
        description: 'Participation in the AI & Machine Learning MCQ Assessment (Quiz Round) of Women Who Master, announced on LinkedIn.',
        source: 'LinkedIn, Licenses & Certifications',
    },
]

export function Credentials() {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggleOpen = (id: string) => {
        setOpenId(openId === id ? null : id)
    }

    const renderList = (items: CredentialItem[]) => (
        <ul className='border-t border-[#17151A]/10'>
            {items.map((item) => {
                const isOpen = openId === item.id
                return (
                    <li key={item.id} className='group border-b border-[#17151A]/10 transition-colors'>
                        <button
                            type='button'
                            onClick={() => toggleOpen(item.id)}
                            className='flex w-full items-start justify-between gap-4 py-5 text-left outline-none transition-colors group-hover:text-[#c25a88] focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                        >
                            <div className='min-w-0 flex-1 pr-2'>
                                <span className='block font-heading text-[clamp(17px,1.5vw,21px)] font-semibold leading-snug tracking-[-0.02em] text-[#17151A] group-hover:text-[#c25a88] transition-colors'>
                                    {item.title}
                                </span>
                                <div className='mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-[#77727A]'>
                                    <span className='font-medium text-[#17151A]/80'>{item.issuer}</span>
                                    {item.date && (
                                        <>
                                            <span aria-hidden='true'>·</span>
                                            <span>{item.date}</span>
                                        </>
                                    )}
                                    <span className='rounded-full border border-[#17151A]/10 bg-[#FCF1F6]/50 px-2.5 py-0.5 text-[11px] font-medium text-[#17151A]/70'>
                                        {item.type}
                                    </span>
                                </div>
                            </div>

                            <span className='mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-[#17151A]/12 bg-white text-[#17151A] transition-all duration-300 group-hover:border-[#17151A]/30 group-hover:bg-[#FCF1F6]'>
                                {isOpen ? <Minus className='size-4' /> : <Plus className='size-4' />}
                            </span>
                        </button>

                        {/* Collapsible Details */}
                        {isOpen && (
                            <div className='pb-6 pt-1 text-[14px] leading-relaxed text-[#17151A]/75'>
                                <p className='max-w-[62ch]'>{item.description}</p>
                                <dl className='mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[12.5px] text-[#77727A]'>
                                    <div>
                                        <span className='text-[#77727A]'>Issued by: </span>
                                        <span className='font-medium text-[#17151A]'>{item.issuer}</span>
                                    </div>
                                    <div>
                                        <span className='text-[#77727A]'>Source: </span>
                                        <span className='font-medium text-[#17151A]'>{item.source}</span>
                                    </div>
                                </dl>
                            </div>
                        )}
                    </li>
                )
            })}
        </ul>
    )

    return (
        <section id='credentials' aria-labelledby='credentials-heading' className='relative bg-white'>
            <div className='mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)] py-[clamp(80px,10vw,150px)]'>
                {/* Header */}
                <div className='border-t border-[#17151A]/10 pt-8 grid gap-8 lg:grid-cols-12 lg:items-end'>
                    <div className='lg:col-span-7'>
                        <h2
                            id='credentials-heading'
                            className='text-balance font-heading text-[clamp(36px,5vw,76px)] font-bold leading-[0.96] tracking-[-0.04em] text-[#17151A]'
                        >
                            Certified, and still{' '}
                            <span className='font-serif font-normal italic tracking-[-0.02em] text-[#c25a88]'>
                                learning.
                            </span>
                        </h2>
                    </div>
                    <div className='lg:col-span-5'>
                        <p className='max-w-[42ch] text-[15.5px] leading-relaxed text-[#17151A]/70'>
                            Formal certifications first, then the courses, badges, and assessments along the way, each kept in its own place.
                        </p>
                    </div>
                </div>

                <div className='mt-14 space-y-16'>
                    {/* Licenses and Certifications */}
                    <div className='grid gap-6 lg:grid-cols-12 lg:gap-8'>
                        <div className='lg:col-span-3'>
                            <h3 className='font-heading text-[19px] font-bold tracking-[-0.02em] text-[#17151A]'>
                                Licenses and certifications
                            </h3>
                            <p className='mt-1 text-[13px] text-[#77727A]'>
                                Listed under Licenses &amp; Certifications on LinkedIn.
                            </p>
                        </div>
                        <div className='lg:col-span-9'>{renderList(LICENSES)}</div>
                    </div>

                    {/* Course completions and badges */}
                    <div className='grid gap-6 lg:grid-cols-12 lg:gap-8'>
                        <div className='lg:col-span-3'>
                            <h3 className='font-heading text-[19px] font-bold tracking-[-0.02em] text-[#17151A]'>
                                Course completions &amp; badges
                            </h3>
                            <p className='mt-1 text-[13px] text-[#77727A]'>
                                Announced in verified public LinkedIn posts.
                            </p>
                        </div>
                        <div className='lg:col-span-9'>{renderList(BADGES)}</div>
                    </div>

                    {/* Participation */}
                    <div className='grid gap-6 lg:grid-cols-12 lg:gap-8'>
                        <div className='lg:col-span-3'>
                            <h3 className='font-heading text-[19px] font-bold tracking-[-0.02em] text-[#17151A]'>
                                Participation
                            </h3>
                            <p className='mt-1 text-[13px] text-[#77727A]'>
                                Assessments taken part in.
                            </p>
                        </div>
                        <div className='lg:col-span-9'>{renderList(PARTICIPATION)}</div>
                    </div>

                    {/* Distinct Achievement Card: TCS CodeVita Global Rank */}
                    <div className='grid gap-6 lg:grid-cols-12 lg:gap-8 border-t border-[#17151A]/10 pt-10'>
                        <div className='lg:col-span-3'>
                            <h3 className='font-heading text-[19px] font-bold tracking-[-0.02em] text-[#17151A]'>
                                Achievements
                            </h3>
                            <p className='mt-1 text-[13px] text-[#77727A]'>
                                Results, kept apart from certificates.
                            </p>
                        </div>
                        <div className='lg:col-span-9'>
                            <article className='relative overflow-hidden rounded-[clamp(20px,2.4vw,32px)] border border-[#17151A]/10 bg-gradient-to-br from-white via-[#FCF1F6]/80 to-[#F8DCE7] p-[clamp(24px,3.4vw,48px)] shadow-sm'>
                                <div
                                    aria-hidden='true'
                                    className='soft-breathe absolute -bottom-1/2 -right-[10%] h-[120%] w-[60%] rounded-full'
                                    style={{
                                        background:
                                            'radial-gradient(circle, rgba(247,187,210,0.7) 0%, rgba(247,187,210,0) 65%)',
                                    }}
                                />

                                <div className='relative flex flex-wrap items-end justify-between gap-8'>
                                    <div>
                                        <p className='flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                                            <Trophy className='size-4 text-[#c25a88]' />
                                            <span>Global rank</span>
                                        </p>
                                        <p className='mt-3 font-heading text-[clamp(64px,10vw,140px)] font-bold leading-[0.85] tracking-[-0.05em] text-[#17151A]'>
                                            6847
                                        </p>
                                    </div>
                                    <div className='max-w-[34ch] pb-2'>
                                        <h4 className='font-heading text-[clamp(20px,2vw,28px)] font-bold tracking-[-0.025em] text-[#17151A]'>
                                            TCS CodeVita Season 13
                                        </h4>
                                        <p className='mt-2 text-[14.5px] leading-relaxed text-[#17151A]/70'>
                                            A global rank in TCS CodeVita, the international competitive programming contest.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
