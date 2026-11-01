import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCounselling() {
    return (
        <article id='student-counselling' aria-labelledby='counselling-title' className='relative bg-white pt-20'>
            <div className='mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)]'>
                {/* Title & Action */}
                <div className='flex flex-wrap items-end justify-between gap-6 border-t border-[#17151A]/10 pt-8'>
                    <div>
                        <h3
                            id='counselling-title'
                            className='max-w-[18ch] text-balance font-heading text-[clamp(28px,3.4vw,52px)] font-bold leading-[0.98] tracking-[-0.035em] text-[#17151A]'
                        >
                            Online Student Counselling System
                        </h3>
                        <p className='mt-2 font-serif text-[clamp(18px,1.6vw,24px)] italic text-[#c25a88]'>
                            Web-based institutional counselling &amp; escalation workflow
                        </p>
                    </div>

                    <Link
                        href='https://github.com/Lemburu-Bhuvaneswari/OnlineStudentCounsellingSystem'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group inline-flex items-center gap-2 rounded-full bg-[#17151A] px-5 py-3 text-[13px] font-medium text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-black focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                    >
                        View repository
                        <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                    </Link>
                </div>

                {/* Content & Screenshots Grid */}
                <div className='mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10'>
                    {/* Left Column: Workflow Description & Roles */}
                    <div className='lg:col-span-5'>
                        <p className='text-pretty text-[clamp(17px,1.4vw,20px)] leading-[1.5] text-[#17151A]'>
                            A web-based student counselling management system designed to manage counselling requests, sessions, status tracking, feedback, and communication between students, faculty, HODs, and administrators.
                        </p>
                        <div className='mt-5 text-[14.5px] leading-relaxed text-[#17151A]/70'>
                            <p>
                                The repository documents role-based authentication, a student portal, counsellor workflows, HOD and administrator functionality, feedback, and escalation of unresolved issues.
                            </p>
                        </div>

                        {/* 4 Roles Grid */}
                        <div className='mt-8 grid grid-cols-2 gap-x-6 gap-y-7'>
                            <div className='border-t border-[#17151A]/10 pt-3.5'>
                                <h4 className='text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#17151A]'>
                                    Student
                                </h4>
                                <ul className='mt-2 space-y-1 text-[13px] text-[#17151A]/70'>
                                    <li>Submit counselling requests</li>
                                    <li>Track request status</li>
                                    <li>View sessions &amp; feedback</li>
                                </ul>
                            </div>

                            <div className='border-t border-[#17151A]/10 pt-3.5'>
                                <h4 className='text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#17151A]'>
                                    Counsellor
                                </h4>
                                <ul className='mt-2 space-y-1 text-[13px] text-[#17151A]/70'>
                                    <li>View assigned students</li>
                                    <li>Run &amp; record sessions</li>
                                    <li>Escalate to the HOD</li>
                                </ul>
                            </div>

                            <div className='border-t border-[#17151A]/10 pt-3.5'>
                                <h4 className='text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#17151A]'>
                                    HOD
                                </h4>
                                <ul className='mt-2 space-y-1 text-[13px] text-[#17151A]/70'>
                                    <li>Assign counsellors</li>
                                    <li>Monitor overall progress</li>
                                    <li>Handle student escalations</li>
                                </ul>
                            </div>

                            <div className='border-t border-[#17151A]/10 pt-3.5'>
                                <h4 className='text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#17151A]'>
                                    Admin
                                </h4>
                                <ul className='mt-2 space-y-1 text-[13px] text-[#17151A]/70'>
                                    <li>Manage departments</li>
                                    <li>System administration</li>
                                    <li>Generate audit reports</li>
                                </ul>
                            </div>
                        </div>

                        {/* Stack Badges */}
                        <div className='mt-8 space-y-4'>
                            <div>
                                <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                                    Built with
                                </p>
                                <div className='flex flex-wrap gap-1.5'>
                                    {['Java', 'JSP', 'Servlets', 'MySQL', 'HTML', 'CSS', 'JavaScript'].map((tech) => (
                                        <span
                                            key={tech}
                                            className='rounded-full border border-[#17151A]/10 bg-[#FCF1F6]/50 px-3 py-1 text-[12px] font-medium text-[#17151A]/85'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                                    Tools
                                </p>
                                <div className='flex flex-wrap gap-1.5'>
                                    {['NetBeans IDE', 'Apache Tomcat', 'MySQL Workbench'].map((tool) => (
                                        <span
                                            key={tool}
                                            className='rounded-full border border-[#17151A]/10 bg-white px-3 py-1 text-[12px] font-medium text-[#17151A]/85 shadow-2xs'
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Screenshot Visuals */}
                    <div className='lg:col-span-7'>
                        <figure className='relative overflow-hidden rounded-[clamp(12px,1.4vw,20px)] border border-[#17151A]/10 bg-white shadow-[0_30px_70px_-40px_rgba(160,60,105,0.4)]'>
                            <div className='relative aspect-[1910/905] overflow-hidden'>
                                <Image
                                    src='/images/projects/counselling-student-dashboard.png'
                                    alt='Student dashboard showing assigned counsellor, pending requests, and session status'
                                    fill
                                    className='object-cover object-top transition-transform duration-500 hover:scale-102'
                                />
                            </div>
                            <figcaption className='border-t border-[#17151A]/8 px-4 py-2.5 text-[12px] text-[#77727A] flex items-center justify-between'>
                                <span>Student Dashboard Interface</span>
                                <span className='text-[11px] font-mono'>counselling-student-dashboard.png</span>
                            </figcaption>
                        </figure>

                        <div className='mt-5 grid gap-4 sm:grid-cols-2'>
                            <figure className='relative overflow-hidden rounded-xl border border-[#17151A]/10 bg-white shadow-[0_20px_50px_-30px_rgba(23,21,26,0.3)]'>
                                <div className='relative aspect-[1910/905] overflow-hidden'>
                                    <Image
                                        src='/images/projects/counselling-escalation.png'
                                        alt='Counselling records and escalation table'
                                        fill
                                        className='object-cover object-top transition-transform duration-500 hover:scale-102'
                                    />
                                </div>
                                <figcaption className='border-t border-[#17151A]/8 px-3.5 py-2 text-[11.5px] text-[#77727A]'>
                                    Session Records &amp; Escalation
                                </figcaption>
                            </figure>

                            <figure className='relative overflow-hidden rounded-xl border border-[#17151A]/10 bg-white shadow-[0_20px_50px_-30px_rgba(23,21,26,0.3)]'>
                                <div className='relative aspect-[1910/905] overflow-hidden'>
                                    <Image
                                        src='/images/projects/counselling-assigned-students.png'
                                        alt='Counsellor assigned students list'
                                        fill
                                        className='object-cover object-top transition-transform duration-500 hover:scale-102'
                                    />
                                </div>
                                <figcaption className='border-t border-[#17151A]/8 px-3.5 py-2 text-[11.5px] text-[#77727A]'>
                                    Assigned Students Directory
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                {/* 5-Stage Request Lifecycle */}
                <div className='mt-14'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77727A]'>
                        How a request moves
                    </p>
                    <div className='mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
                        {[
                            { step: '01', text: 'Student submits counselling request' },
                            { step: '02', text: 'HOD assigns faculty counsellor' },
                            { step: '03', text: 'Counsellor holds session & updates status' },
                            { step: '04', text: 'Unresolved issues escalated to HOD' },
                            { step: '05', text: 'HOD resolves & Admin monitors reports' },
                        ].map((s) => (
                            <div
                                key={s.step}
                                className='rounded-2xl border border-[#17151A]/10 bg-white p-4.5 shadow-2xs'
                            >
                                <span className='font-heading text-[12px] font-bold text-[#c25a88]'>
                                    Stage {s.step}
                                </span>
                                <p className='mt-2 text-[13.5px] leading-snug text-[#17151A]/80'>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}
