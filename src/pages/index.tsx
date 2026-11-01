import Head from 'next/head'
import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'
import { SelectedWork } from '@/components/portfolio/SelectedWork'
import { GarbhaCaseStudy } from '@/components/portfolio/GarbhaCaseStudy'
import { ProjectCounselling } from '@/components/portfolio/ProjectCounselling'
import { ProjectBrainTumor } from '@/components/portfolio/ProjectBrainTumor'
import { ProjectPracticeChallenges } from '@/components/portfolio/ProjectPracticeChallenges'
import { About } from '@/components/portfolio/About'
import { Skills } from '@/components/portfolio/Skills'
import { Credentials } from '@/components/portfolio/Credentials'
import { Contact } from '@/components/portfolio/Contact'
import { SmoothScroll } from '@/components/portfolio/SmoothScroll'

export default function PortfolioPage() {
    return (
        <>
            <Head>
                <title>Bhuvaneswari Lemburu — Data Analytics &amp; Business Intelligence</title>
                <meta
                    name='description'
                    content='Portfolio of Bhuvaneswari Lemburu, a Computer Science graduate working in data analytics and business intelligence: dashboards, analysis, and the questions behind the numbers.'
                />
                <meta property='og:title' content='Bhuvaneswari Lemburu — Data Analytics & Business Intelligence' />
                <meta
                    property='og:description'
                    content='Portfolio of Bhuvaneswari Lemburu, Computer Science graduate specializing in data analytics, business intelligence, and practical insights.'
                />
                <meta property='og:type' content='website' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>

            <SmoothScroll />

            <div className='min-h-full flex flex-col bg-white text-[#17151A] font-sans antialiased selection:bg-[#F4C6D8] selection:text-[#17151A]'>
                <Header />
                <main className='relative w-full'>
                    <Hero />
                    <div className='scroll-reveal'>
                        <SelectedWork />
                    </div>
                    <div className='scroll-reveal'>
                        <GarbhaCaseStudy />
                    </div>
                    <div className='scroll-reveal'>
                        <ProjectCounselling />
                    </div>
                    <div className='scroll-reveal'>
                        <ProjectBrainTumor />
                    </div>
                    <div className='scroll-reveal'>
                        <ProjectPracticeChallenges />
                    </div>
                    <div className='scroll-reveal'>
                        <About />
                    </div>
                    <div className='scroll-reveal'>
                        <Skills />
                    </div>
                    <div className='scroll-reveal'>
                        <Credentials />
                    </div>
                    <div className='scroll-reveal'>
                        <Contact />
                    </div>
                </main>
            </div>
        </>
    )
}
