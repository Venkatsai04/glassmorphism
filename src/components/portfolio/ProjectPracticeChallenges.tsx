import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const CHALLENGES = [
    'Anagram',
    'Cut the Sticks',
    'Modified Kaprekar Numbers',
    'Maximizing XOR',
    'Counting Sort',
    'Insertion Sort',
    'Climbing the Leaderboard',
    'Forming a Magic Square',
    'Recursive Digit Sum',
    'Greedy Florist',
    'Sherlock and the Valid String',
    'Gaming Array',
]

export function ProjectPracticeChallenges() {
    return (
        <article id='practice-challenges' aria-labelledby='practice-title' className='relative bg-white pt-20 pb-16'>
            <div className='mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)]'>
                <div className='grid gap-8 border-t border-[#17151A]/10 pt-8 lg:grid-cols-12 lg:items-end'>
                    <div className='lg:col-span-6'>
                        <h3
                            id='practice-title'
                            className='max-w-[18ch] text-balance font-heading text-[clamp(28px,3.4vw,52px)] font-bold leading-[0.98] tracking-[-0.035em] text-[#17151A]'
                        >
                            Practice Coding Challenges
                        </h3>
                        <p className='mt-2 font-serif text-[clamp(18px,1.6vw,24px)] italic text-[#c25a88]'>
                            Algorithm practice &amp; problem-solving log
                        </p>
                    </div>

                    <div className='lg:col-span-4'>
                        <p className='text-[15px] leading-relaxed text-[#17151A]/75'>
                            A running set of Python solutions to algorithm practice problems, numbered 81 to 122 in the order they were solved.
                        </p>
                        <p className='mt-1 text-[13.5px] leading-relaxed text-[#77727A]'>
                            Sorting, greedy choices, string handling, bit manipulation, and recursion, one problem at a time.
                        </p>
                    </div>

                    <div className='lg:col-span-2 lg:justify-self-end'>
                        <Link
                            href='https://github.com/Lemburu-Bhuvaneswari/practicecodingchallenge'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group inline-flex items-center gap-2 rounded-full bg-[#17151A] px-5 py-3 text-[13px] font-medium text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-black focus-visible:ring-2 focus-visible:ring-[#d77fa4]'
                        >
                            View repository
                            <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Seamless Algorithm Challenges Marquee */}
            <div className='relative mt-12 overflow-hidden border-y border-[#17151A]/10 bg-[#FCF1F6]/50 py-5'>
                <div className='marquee-track'>
                    {/* First pass */}
                    {CHALLENGES.map((challenge, i) => (
                        <div
                            key={`pass1-${i}`}
                            className='flex items-center gap-8 whitespace-nowrap pr-8 font-heading text-[clamp(18px,2vw,28px)] font-semibold tracking-[-0.02em] text-[#17151A]/80'
                        >
                            <span>{challenge}</span>
                            <span className='size-2 rounded-full bg-[#F7BBD2]' />
                        </div>
                    ))}
                    {/* Second pass for infinite loop */}
                    {CHALLENGES.map((challenge, i) => (
                        <div
                            key={`pass2-${i}`}
                            aria-hidden='true'
                            className='flex items-center gap-8 whitespace-nowrap pr-8 font-heading text-[clamp(18px,2vw,28px)] font-semibold tracking-[-0.02em] text-[#17151A]/80'
                        >
                            <span>{challenge}</span>
                            <span className='size-2 rounded-full bg-[#F7BBD2]' />
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}
