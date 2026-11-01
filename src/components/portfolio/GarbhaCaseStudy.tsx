import { useState } from 'react'
import { Info, Sparkles } from 'lucide-react'

export function GarbhaCaseStudy() {
    const [highlightTab, setHighlightTab] = useState<'all' | 'filters' | 'kpis' | 'charts'>('all')

    return (
        <article id='garbha-analytics' aria-labelledby='garbha-title' className='relative bg-white pt-8'>
            {/* Header info */}
            <div className='relative mx-auto max-w-[1440px] px-[clamp(18px,4.2vw,56px)]'>
                <div className='flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-t border-[#17151A]/10 pt-8'>
                    <div>
                        <h3
                            id='garbha-title'
                            className='font-heading text-[clamp(32px,4.4vw,68px)] font-bold leading-[0.95] tracking-[-0.035em] text-[#17151A]'
                        >
                            Garbha Analytics
                        </h3>
                        <p className='mt-2 font-serif text-[clamp(19px,1.8vw,26px)] italic leading-[1.15] text-[#c25a88]'>
                            Data-Driven IVF Outcome Monitoring
                        </p>
                    </div>

                    {/* Interactive Mode Pills */}
                    <div className='flex items-center gap-1.5 rounded-full border border-[#17151A]/10 bg-[#FCF1F6]/70 p-1'>
                        <button
                            type='button'
                            onClick={() => setHighlightTab('all')}
                            className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all ${
                                highlightTab === 'all'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/70 hover:text-[#17151A]'
                            }`}
                        >
                            Complete View
                        </button>
                        <button
                            type='button'
                            onClick={() => setHighlightTab('filters')}
                            className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all ${
                                highlightTab === 'filters'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/70 hover:text-[#17151A]'
                            }`}
                        >
                            Filters
                        </button>
                        <button
                            type='button'
                            onClick={() => setHighlightTab('kpis')}
                            className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all ${
                                highlightTab === 'kpis'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/70 hover:text-[#17151A]'
                            }`}
                        >
                            Headline KPIs
                        </button>
                        <button
                            type='button'
                            onClick={() => setHighlightTab('charts')}
                            className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium transition-all ${
                                highlightTab === 'charts'
                                    ? 'bg-[#17151A] text-white shadow-sm'
                                    : 'text-[#17151A]/70 hover:text-[#17151A]'
                            }`}
                        >
                            Charts
                        </button>
                    </div>
                </div>

                {/* Dashboard Showcase Mockup */}
                <div className='relative mt-8 [perspective:1600px]'>
                    <div className='relative w-full overflow-hidden rounded-[clamp(14px,1.6vw,24px)] border border-[#17151A]/12 bg-white shadow-[0_50px_120px_-50px_rgba(160,60,105,0.45),0_18px_40px_-24px_rgba(23,21,26,0.2)]'>
                        {/* Browser Chrome Header */}
                        <div className='flex items-center justify-between border-b border-[#17151A]/8 bg-white/95 px-5 py-3'>
                            <div className='flex items-center gap-1.5'>
                                <span className='size-2.5 rounded-full bg-[#f4c6d8]' />
                                <span className='size-2.5 rounded-full bg-[#f8dce7]' />
                                <span className='size-2.5 rounded-full bg-[#17151A]/15' />
                            </div>
                            <div className='rounded-full bg-[#fce8f0]/80 px-4 py-1 text-[11px] font-medium text-[#77727A]'>
                                Garbha Analytics · Data-Driven IVF Outcome Monitoring
                            </div>
                            <div className='w-8 hidden sm:block' />
                        </div>

                        {/* Interactive SVG Dashboard Plan */}
                        <div className='relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-white to-[#FCF1F6]'>
                            <svg viewBox='0 0 1280 800' className='block h-full w-full' role='img' aria-label='Garbha Analytics Dashboard'>
                                <defs>
                                    <linearGradient id='garbha-ground' x1='0' y1='0' x2='0' y2='1'>
                                        <stop offset='0' stopColor='#FFFFFF' />
                                        <stop offset='1' stopColor='#FCF1F6' />
                                    </linearGradient>
                                    <linearGradient id='garbha-kpi-bar' x1='0' y1='0' x2='1' y2='0'>
                                        <stop offset='0' stopColor='#F7BBD2' />
                                        <stop offset='1' stopColor='#F4C6D8' stopOpacity='0.4' />
                                    </linearGradient>
                                </defs>
                                <rect width='1280' height='800' fill='url(#garbha-ground)' />

                                {/* Dashboard Header Brand */}
                                <g>
                                    <circle cx='46' cy='44' r='14' fill='#FCE8F0' stroke='#F4C6D8' />
                                    <circle cx='46' cy='44' r='5' fill='#E48FB4' />
                                    <text
                                        x='72'
                                        y='41'
                                        style={{
                                            fontFamily: 'var(--font-app-heading)',
                                            fontWeight: 700,
                                            fontSize: '22px',
                                            letterSpacing: '-0.01em',
                                        }}
                                        fill='#17151A'
                                    >
                                        Garbha Analytics
                                    </text>
                                    <text
                                        x='72'
                                        y='62'
                                        style={{
                                            fontFamily: 'var(--font-app-sans)',
                                            fontSize: '13px',
                                        }}
                                        fill='#77727A'
                                    >
                                        Data-Driven IVF Outcome Monitoring
                                    </text>
                                    <line x1='32' x2='1248' y1='84' y2='84' stroke='rgba(23,21,26,0.09)' />
                                </g>

                                {/* 4 Cohort Filters */}
                                <g opacity={highlightTab === 'all' || highlightTab === 'filters' ? 1 : 0.35}>
                                    {/* Filter 1: Patient Age */}
                                    <rect x='32' y='92' width='292' height='64' rx='12' fill='#FFFFFF' stroke={highlightTab === 'filters' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'filters' ? 2 : 1} />
                                    <text x='50' y='129' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '14px', fontWeight: 500 }} fill='#17151A'>Patient Age</text>
                                    <path d='M294 121 l6 6 l6 -6' fill='none' stroke='#77727A' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />

                                    {/* Filter 2: Infertility Indication */}
                                    <rect x='340' y='92' width='292' height='64' rx='12' fill='#FFFFFF' stroke={highlightTab === 'filters' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'filters' ? 2 : 1} />
                                    <text x='358' y='129' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '14px', fontWeight: 500 }} fill='#17151A'>Infertility Indication</text>
                                    <path d='M602 121 l6 6 l6 -6' fill='none' stroke='#77727A' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />

                                    {/* Filter 3: Embryo Transfer Day */}
                                    <rect x='648' y='92' width='292' height='64' rx='12' fill='#FFFFFF' stroke={highlightTab === 'filters' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'filters' ? 2 : 1} />
                                    <text x='666' y='129' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '14px', fontWeight: 500 }} fill='#17151A'>Embryo Transfer Day</text>
                                    <path d='M910 121 l6 6 l6 -6' fill='none' stroke='#77727A' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />

                                    {/* Filter 4: Embryos Transferred */}
                                    <rect x='956' y='92' width='292' height='64' rx='12' fill='#FFFFFF' stroke={highlightTab === 'filters' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'filters' ? 2 : 1} />
                                    <text x='974' y='129' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '14px', fontWeight: 500 }} fill='#17151A'>Embryos Transferred</text>
                                    <path d='M1218 121 l6 6 l6 -6' fill='none' stroke='#77727A' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round' />
                                </g>

                                {/* 6 Headline KPIs */}
                                <g opacity={highlightTab === 'all' || highlightTab === 'kpis' ? 1 : 0.35}>
                                    {/* KPI 1: Total IVF Cycles */}
                                    <rect x='32' y='176' width='189.3' height='140' rx='14' fill='#FFFFFF' stroke={highlightTab === 'kpis' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'kpis' ? 2 : 1} />
                                    <rect x='50' y='194' width='28' height='4' rx='2' fill='url(#garbha-kpi-bar)' />
                                    <text x='50' y='220' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Total IVF Cycles</text>
                                    <text x='50' y='294' style={{ fontFamily: 'var(--font-app-heading)', fontSize: '38px', fontWeight: 700, letterSpacing: '-0.02em' }} fill='#17151A'>755</text>

                                    {/* KPI 2: Clinical Pregnancy Rate */}
                                    <rect x='237.3' y='176' width='189.3' height='140' rx='14' fill='#FFFFFF' stroke={highlightTab === 'kpis' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'kpis' ? 2 : 1} />
                                    <rect x='255.3' y='194' width='28' height='4' rx='2' fill='url(#garbha-kpi-bar)' />
                                    <text x='255.3' y='220' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Clinical Pregnancy</text>
                                    <text x='255.3' y='236' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Rate</text>
                                    <text x='255.3' y='294' style={{ fontFamily: 'var(--font-app-heading)', fontSize: '38px', fontWeight: 700, letterSpacing: '-0.02em' }} fill='#17151A'>87.9%</text>

                                    {/* KPI 3: Average Patient Age */}
                                    <rect x='442.6' y='176' width='189.3' height='140' rx='14' fill='#FFFFFF' stroke={highlightTab === 'kpis' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'kpis' ? 2 : 1} />
                                    <rect x='460.6' y='194' width='28' height='4' rx='2' fill='url(#garbha-kpi-bar)' />
                                    <text x='460.6' y='220' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Average Patient</text>
                                    <text x='460.6' y='236' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Age</text>
                                    <text x='460.6' y='294' style={{ fontFamily: 'var(--font-app-heading)', fontSize: '38px', fontWeight: 700, letterSpacing: '-0.02em' }} fill='#17151A'>32.4</text>

                                    {/* KPI 4: Live Birth Rate */}
                                    <rect x='648' y='176' width='189.3' height='140' rx='14' fill='#FFFFFF' stroke={highlightTab === 'kpis' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'kpis' ? 2 : 1} />
                                    <rect x='666' y='194' width='28' height='4' rx='2' fill='url(#garbha-kpi-bar)' />
                                    <text x='666' y='220' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Live Birth Rate</text>
                                    <text x='666' y='294' style={{ fontFamily: 'var(--font-app-heading)', fontSize: '38px', fontWeight: 700, letterSpacing: '-0.02em' }} fill='#17151A'>53.8%</text>

                                    {/* KPI 5: Twin Rate */}
                                    <rect x='853.3' y='176' width='189.3' height='140' rx='14' fill='#FFFFFF' stroke={highlightTab === 'kpis' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'kpis' ? 2 : 1} />
                                    <rect x='871.3' y='194' width='28' height='4' rx='2' fill='url(#garbha-kpi-bar)' />
                                    <text x='871.3' y='220' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Twin Rate</text>
                                    <text x='871.3' y='294' style={{ fontFamily: 'var(--font-app-heading)', fontSize: '38px', fontWeight: 700, letterSpacing: '-0.02em' }} fill='#17151A'>3.2%</text>

                                    {/* KPI 6: Abortion Rate */}
                                    <rect x='1058.6' y='176' width='189.3' height='140' rx='14' fill='#FFFFFF' stroke={highlightTab === 'kpis' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'kpis' ? 2 : 1} />
                                    <rect x='1076.6' y='194' width='28' height='4' rx='2' fill='url(#garbha-kpi-bar)' />
                                    <text x='1076.6' y='220' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '12.5px', fontWeight: 500 }} fill='#77727A'>Abortion Rate</text>
                                    <text x='1076.6' y='294' style={{ fontFamily: 'var(--font-app-heading)', fontSize: '38px', fontWeight: 700, letterSpacing: '-0.02em' }} fill='#17151A'>34.7%</text>
                                </g>

                                {/* 8 Outcome Charts Grid */}
                                <g opacity={highlightTab === 'all' || highlightTab === 'charts' ? 1 : 0.35}>
                                    {/* Row 1, Chart 1: IVF Outcome Comparison */}
                                    <rect x='32' y='336' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='50' y='366' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13.5px', fontWeight: 600 }} fill='#17151A'>IVF Outcome Comparison</text>
                                    <line x1='50' x2='306' y1='383' y2='383' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='417.7' y2='417.7' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='452.5' y2='452.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='487.2' y2='487.2' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='522' y2='522' stroke='rgba(23,21,26,0.2)' />
                                    <rect x='70' y='420' width='36' height='102' rx='4' fill='#F7BBD2' />
                                    <rect x='130' y='390' width='36' height='132' rx='4' fill='#E48FB4' />
                                    <rect x='190' y='460' width='36' height='62' rx='4' fill='#FCE8F0' stroke='#F4C6D8' />
                                    <rect x='250' y='480' width='36' height='42' rx='4' fill='#17151A' />

                                    {/* Row 1, Chart 2: IVF Cycles by Indication Label */}
                                    <rect x='340' y='336' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='358' y='366' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13.5px', fontWeight: 600 }} fill='#17151A'>IVF Cycles by Indication Label</text>
                                    <line x1='358' x2='614' y1='383' y2='383' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='358' x2='614' y1='417.7' y2='417.7' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='358' x2='614' y1='452.5' y2='452.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='358' x2='614' y1='487.2' y2='487.2' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='358' x2='614' y1='522' y2='522' stroke='rgba(23,21,26,0.2)' />
                                    <path d='M378 490 Q430 400 480 430 T580 390' fill='none' stroke='#c25a88' strokeWidth='3' />
                                    <path d='M378 510 Q430 460 480 470 T580 440' fill='none' stroke='#E48FB4' strokeWidth='2' strokeDasharray='4 4' />

                                    {/* Row 1, Chart 3: Clinical Pregnancy & Live Birth Rate by Age Group */}
                                    <rect x='648' y='336' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='666' y='366' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13px', fontWeight: 600 }} fill='#17151A'>Clinical Pregnancy Rate and</text>
                                    <text x='666' y='383' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13px', fontWeight: 600 }} fill='#17151A'>Live Birth Rate by Age Group</text>
                                    <line x1='666' x2='922' y1='400' y2='400' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='430.5' y2='430.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='461' y2='461' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='491.5' y2='491.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='522' y2='522' stroke='rgba(23,21,26,0.2)' />
                                    <circle cx='700' cy='430' r='6' fill='#c25a88' />
                                    <circle cx='760' cy='420' r='6' fill='#c25a88' />
                                    <circle cx='820' cy='470' r='6' fill='#c25a88' />
                                    <circle cx='880' cy='500' r='6' fill='#c25a88' />
                                    <line x1='700' y1='430' x2='760' y2='420' stroke='#c25a88' strokeWidth='2.5' />
                                    <line x1='760' y1='420' x2='820' y2='470' stroke='#c25a88' strokeWidth='2.5' />
                                    <line x1='820' y1='470' x2='880' y2='500' stroke='#c25a88' strokeWidth='2.5' />

                                    {/* Row 1, Chart 4: BHCG 12 vs BHCG 14 */}
                                    <rect x='956' y='336' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='974' y='366' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13.5px', fontWeight: 600 }} fill='#17151A'>BHCG 12 vs BHCG 14</text>
                                    <line x1='974' x2='1230' y1='383' y2='383' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='417.7' y2='417.7' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='452.5' y2='452.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='487.2' y2='487.2' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='522' y2='522' stroke='rgba(23,21,26,0.2)' />
                                    <circle cx='1010' cy='490' r='5' fill='#F4C6D8' />
                                    <circle cx='1050' cy='450' r='7' fill='#E48FB4' />
                                    <circle cx='1100' cy='420' r='10' fill='#c25a88' />
                                    <circle cx='1150' cy='395' r='8' fill='#17151A' />
                                    <circle cx='1190' cy='410' r='6' fill='#F7BBD2' />

                                    {/* Row 2, Chart 5: Live Birth Rate by AMH Group */}
                                    <rect x='32' y='564' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='50' y='594' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13.5px', fontWeight: 600 }} fill='#17151A'>Live Birth Rate by AMH Group</text>
                                    <line x1='50' x2='306' y1='611' y2='611' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='645.7' y2='645.7' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='680.5' y2='680.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='715.2' y2='715.2' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='50' x2='306' y1='750' y2='750' stroke='rgba(23,21,26,0.2)' />
                                    <rect x='65' y='670' width='42' height='80' rx='5' fill='#F8DCE7' />
                                    <rect x='125' y='630' width='42' height='120' rx='5' fill='#E48FB4' />
                                    <rect x='185' y='615' width='42' height='135' rx='5' fill='#c25a88' />
                                    <rect x='245' y='690' width='42' height='60' rx='5' fill='#17151A' />

                                    {/* Row 2, Chart 6: Delivery Type Distribution */}
                                    <rect x='340' y='564' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='358' y='594' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13.5px', fontWeight: 600 }} fill='#17151A'>Delivery Type Distribution</text>
                                    <circle cx='486' cy='675' r='54' fill='none' stroke='#FCE8F0' strokeWidth='24' />
                                    <circle cx='486' cy='675' r='54' fill='none' stroke='#c25a88' strokeWidth='24' strokeDasharray='210 340' strokeDashoffset='-30' />
                                    <circle cx='486' cy='675' r='54' fill='none' stroke='#17151A' strokeWidth='24' strokeDasharray='90 340' strokeDashoffset='180' />

                                    {/* Row 2, Chart 7: Clinical Pregnancy Outcomes by Embryo Category */}
                                    <rect x='648' y='564' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='666' y='594' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13px', fontWeight: 600 }} fill='#17151A'>Clinical Pregnancy Outcomes by</text>
                                    <text x='666' y='611' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13px', fontWeight: 600 }} fill='#17151A'>Embryo Category</text>
                                    <line x1='666' x2='922' y1='628' y2='628' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='658.5' y2='658.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='689' y2='689' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='719.5' y2='719.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='666' x2='922' y1='750' y2='750' stroke='rgba(23,21,26,0.2)' />
                                    <rect x='686' y='650' width='30' height='100' rx='4' fill='#F7BBD2' />
                                    <rect x='746' y='640' width='30' height='110' rx='4' fill='#E48FB4' />
                                    <rect x='806' y='680' width='30' height='70' rx='4' fill='#c25a88' />
                                    <rect x='866' y='670' width='30' height='80' rx='4' fill='#17151A' />

                                    {/* Row 2, Chart 8: Pregnancy Outcome Distribution */}
                                    <rect x='956' y='564' width='292' height='212' rx='14' fill='#FFFFFF' stroke={highlightTab === 'charts' ? '#E48FB4' : 'rgba(23,21,26,0.09)'} strokeWidth={highlightTab === 'charts' ? 2 : 1} />
                                    <text x='974' y='594' style={{ fontFamily: 'var(--font-app-sans)', fontSize: '13.5px', fontWeight: 600 }} fill='#17151A'>Pregnancy Outcome Distribution</text>
                                    <line x1='974' x2='1230' y1='611' y2='611' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='645.7' y2='645.7' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='680.5' y2='680.5' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='715.2' y2='715.2' stroke='rgba(214,112,156,0.18)' strokeDasharray='3 5' />
                                    <line x1='974' x2='1230' y1='750' y2='750' stroke='rgba(23,21,26,0.2)' />
                                    <path d='M985 710 C1030 630, 1070 700, 1110 650 S1170 630, 1220 680' fill='none' stroke='#c25a88' strokeWidth='3.5' />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Narrative Description & Analytical Dimensions */}
                <div className='mt-16 grid gap-12 lg:grid-cols-12 lg:gap-8'>
                    <div className='lg:col-span-6'>
                        <h4 className='text-balance font-heading text-[clamp(24px,2.4vw,36px)] font-semibold leading-[1.18] tracking-[-0.025em] text-[#17151A]'>
                            An analytics dashboard designed to explore IVF treatment outcomes across patient demographics, infertility indications, embryo transfer details, and pregnancy outcomes.
                        </h4>
                        <div className='mt-6 max-w-[52ch] text-[15.5px] leading-relaxed text-[#17151A]/70'>
                            <p>
                                A monitoring and visualisation project: it brings a cohort&apos;s IVF cycles, transfer details, and outcomes onto one screen so they can be compared side by side.
                            </p>
                        </div>
                    </div>

                    <div className='lg:col-span-5 lg:col-start-8'>
                        <div className='grid gap-x-8 gap-y-7 sm:grid-cols-2'>
                            <div className='border-t border-[#17151A]/10 pt-4'>
                                <h5 className='text-[14.5px] font-semibold tracking-[-0.01em] text-[#17151A]'>
                                    Patient demographics
                                </h5>
                                <ul className='mt-2.5 space-y-1.5'>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Patient age
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Age group
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        AMH group
                                    </li>
                                </ul>
                            </div>

                            <div className='border-t border-[#17151A]/10 pt-4'>
                                <h5 className='text-[14.5px] font-semibold tracking-[-0.01em] text-[#17151A]'>
                                    Clinical indication
                                </h5>
                                <ul className='mt-2.5 space-y-1.5'>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Infertility indication
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        IVF cycles by indication
                                    </li>
                                </ul>
                            </div>

                            <div className='border-t border-[#17151A]/10 pt-4'>
                                <h5 className='text-[14.5px] font-semibold tracking-[-0.01em] text-[#17151A]'>
                                    Embryo transfer
                                </h5>
                                <ul className='mt-2.5 space-y-1.5'>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Embryo transfer day
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Embryos transferred
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Embryo category
                                    </li>
                                </ul>
                            </div>

                            <div className='border-t border-[#17151A]/10 pt-4'>
                                <h5 className='text-[14.5px] font-semibold tracking-[-0.01em] text-[#17151A]'>
                                    Pregnancy outcomes
                                </h5>
                                <ul className='mt-2.5 space-y-1.5'>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Clinical pregnancy
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Live birth
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        Twin and abortion rates
                                    </li>
                                    <li className='flex items-center gap-2 text-[13.5px] text-[#17151A]/70'>
                                        <span className='size-1 rounded-full bg-[#E48FB4]' />
                                        BHCG 12 vs BHCG 14
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values as displayed on the dashboard */}
                <div className='mt-14 border-t border-[#17151A]/10 pt-6'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#17151A]/10'>
                        <div className='py-4 sm:px-4'>
                            <p className='font-heading text-[clamp(30px,3.2vw,48px)] font-bold tracking-[-0.04em] text-[#17151A]'>
                                755
                            </p>
                            <p className='mt-1 text-[12.5px] text-[#77727A]'>Total IVF Cycles</p>
                        </div>
                        <div className='py-4 sm:px-4'>
                            <p className='font-heading text-[clamp(30px,3.2vw,48px)] font-bold tracking-[-0.04em] text-[#17151A]'>
                                87.9%
                            </p>
                            <p className='mt-1 text-[12.5px] text-[#77727A]'>Clinical Pregnancy Rate</p>
                        </div>
                        <div className='py-4 sm:px-4'>
                            <p className='font-heading text-[clamp(30px,3.2vw,48px)] font-bold tracking-[-0.04em] text-[#17151A]'>
                                32.4
                            </p>
                            <p className='mt-1 text-[12.5px] text-[#77727A]'>Average Patient Age</p>
                        </div>
                        <div className='py-4 sm:px-4'>
                            <p className='font-heading text-[clamp(30px,3.2vw,48px)] font-bold tracking-[-0.04em] text-[#17151A]'>
                                53.8%
                            </p>
                            <p className='mt-1 text-[12.5px] text-[#77727A]'>Live Birth Rate</p>
                        </div>
                        <div className='py-4 sm:px-4'>
                            <p className='font-heading text-[clamp(30px,3.2vw,48px)] font-bold tracking-[-0.04em] text-[#17151A]'>
                                3.2%
                            </p>
                            <p className='mt-1 text-[12.5px] text-[#77727A]'>Twin Rate</p>
                        </div>
                        <div className='py-4 sm:px-4'>
                            <p className='font-heading text-[clamp(30px,3.2vw,48px)] font-bold tracking-[-0.04em] text-[#17151A]'>
                                34.7%
                            </p>
                            <p className='mt-1 text-[12.5px] text-[#77727A]'>Abortion Rate</p>
                        </div>
                    </div>

                    {/* Medical / Visualization Disclaimer */}
                    <p className='mt-8 flex items-start gap-3 rounded-2xl bg-[#FCF1F6] px-5 py-4 text-[13px] leading-relaxed text-[#17151A]/75 border border-[#F4C6D8]/50'>
                        <Info className='mt-0.5 size-4 shrink-0 text-[#c25a88]' />
                        <span>
                            The figures shown are the values displayed in the dashboard. They are not independently verified clinical outcomes, and the dashboard is a monitoring and data-visualisation project, not a medical or diagnostic tool.
                        </span>
                    </p>
                </div>
            </div>
        </article>
    )
}
