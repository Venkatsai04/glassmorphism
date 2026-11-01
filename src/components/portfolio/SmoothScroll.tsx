import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll() {
    useEffect(() => {
        // Initialize silky smooth Lenis scroll
        const lenis = new Lenis({
            duration: 1.25,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 1.5,
            infinite: false,
        })

        let reqId: number

        function raf(time: number) {
            lenis.raf(time)
            reqId = requestAnimationFrame(raf)
        }

        reqId = requestAnimationFrame(raf)

        // Intercept hash anchor links for buttery-smooth Lenis scrolling
        const handleAnchorClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a')
            if (!anchor) return
            const href = anchor.getAttribute('href')
            if (!href) return

            let targetId: string | null = null
            if (href.startsWith('/#')) {
                targetId = href.replace('/#', '')
            } else if (href.startsWith('#')) {
                targetId = href.replace('#', '')
            }

            if (targetId) {
                const targetEl = document.getElementById(targetId)
                if (targetEl) {
                    e.preventDefault()
                    lenis.scrollTo(targetEl, { offset: -40, duration: 1.4 })
                }
            }
        }

        document.addEventListener('click', handleAnchorClick)

        // Setup IntersectionObserver for smooth section reveal animations
        const revealElements = document.querySelectorAll('.scroll-reveal')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed')
                    }
                })
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -50px 0px',
            }
        )

        revealElements.forEach((el) => observer.observe(el))

        return () => {
            cancelAnimationFrame(reqId)
            document.removeEventListener('click', handleAnchorClick)
            observer.disconnect()
            lenis.destroy()
        }
    }, [])

    return null
}
