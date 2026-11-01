import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en' className='scroll-smooth'>
            <Head>
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
                <meta name='theme-color' content='#ffffff' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body className='min-h-full flex flex-col bg-white text-[#17151A] antialiased selection:bg-[#F4C6D8] selection:text-[#17151A]'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
