import Link from 'next/link'
import Head from 'next/head'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 — Page Not Found | Bhuvaneswari Lemburu</title>
            </Head>

            <div className='min-h-[100dvh] flex flex-col items-center justify-center bg-white px-6 text-center text-[#17151A]'>
                <p className='font-mono text-xs uppercase tracking-[0.2em] text-[#c25a88]'>404 Error</p>
                <h1 className='mt-4 font-heading text-[clamp(36px,6vw,72px)] font-bold tracking-[-0.04em]'>
                    Page not found
                </h1>
                <p className='mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#77727A]'>
                    The page you are looking for does not exist or has been moved.
                </p>
                <div className='mt-8'>
                    <Link
                        href='/'
                        className='inline-flex items-center gap-2 rounded-full bg-[#17151A] px-6 py-3 text-[13px] font-medium text-white transition-all hover:bg-black'
                    >
                        <ArrowLeft className='size-4' />
                        Back to homepage
                    </Link>
                </div>
            </div>
        </>
    )
}
