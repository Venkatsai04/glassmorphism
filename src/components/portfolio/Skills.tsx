export function Skills() {
    const categories = [
        {
            title: 'Programming',
            items: [
                { name: 'Python', context: 'Brain Tumor Detection, practice challenges' },
                { name: 'Java', context: 'Online Student Counselling System' },
                { name: 'SQL', context: 'MySQL in the counselling system' },
            ],
        },
        {
            title: 'Analytics',
            items: [
                { name: 'Data Analytics', context: 'Deloitte job simulation, Garbha Analytics' },
                { name: 'Business Analysis', context: 'Coursera certificate' },
                { name: 'Power BI', context: 'Microsoft Learn badge' },
                { name: 'Data Visualisation', context: 'Garbha Analytics' },
            ],
        },
        {
            title: 'Computer Science',
            items: [
                { name: 'Data Structures and Algorithms', context: 'Practice coding challenges' },
                { name: 'Object-Oriented Programming', context: 'Java counselling system' },
            ],
        },
        {
            title: 'AI',
            items: [
                { name: 'Generative AI', context: 'TCS iON, Google AI Essentials' },
                { name: 'Agentic AI Foundations', context: 'Oracle certification' },
                { name: 'Machine Learning Foundations', context: 'CNN demo, YUVA AI For All' },
            ],
        },
    ]

    return (
        <section id='skills' aria-labelledby='skills-heading' className='relative overflow-hidden bg-gradient-to-b from-white via-[#FCF1F6]/40 to-white'>
            <div className='mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)] py-[clamp(80px,10vw,150px)]'>
                {/* Header */}
                <div className='border-t border-[#17151A]/10 pt-8'>
                    <h2
                        id='skills-heading'
                        className='text-balance font-heading text-[clamp(36px,4.6vw,72px)] font-bold leading-[0.98] tracking-[-0.04em] text-[#17151A]'
                    >
                        What I work with,{' '}
                        <span className='font-serif font-normal italic tracking-[-0.02em] text-[#c25a88]'>
                            and where it shows.
                        </span>
                    </h2>
                </div>

                {/* 4 Pillars Grid */}
                <div className='mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4'>
                    {categories.map((cat) => (
                        <div key={cat.title}>
                            <h3 className='border-b border-[#17151A]/15 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#17151A]'>
                                {cat.title}
                            </h3>
                            <ul className='mt-2'>
                                {cat.items.map((item) => (
                                    <li key={item.name} className='group border-b border-[#17151A]/8 py-4'>
                                        <p className='font-heading text-[clamp(18px,1.5vw,22px)] font-semibold leading-tight tracking-[-0.02em] text-[#17151A] transition-colors duration-300 group-hover:text-[#c25a88]'>
                                            {item.name}
                                        </p>
                                        <p className='mt-1.5 flex items-center gap-1.5 text-[12.5px] text-[#77727A]'>
                                            <span
                                                aria-hidden='true'
                                                className='inline-block h-px w-3 bg-[#E48FB4] transition-all duration-300 group-hover:w-5'
                                            />
                                            <span className='font-medium text-[#17151A]/60'>Seen in:</span>{' '}
                                            {item.context}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
