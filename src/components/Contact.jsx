import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const Contact = () => {
    const ref = useRef(null)
    const [copied, setCopied] = useState(false)
    const email = 'sohamsakaria@gmail.com'

    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('animate-in')
                    obs.unobserve(e.target)
                }
            })
        }, { threshold: 0.15 })
        ref.current?.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transitionDelay = `${i * 80}ms`
            obs.observe(el)
        })
        return () => obs.disconnect()
    }, [])

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        } catch { /* noop */ }
    }

    const links = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/soham-sakaria-13251718b/', handle: '/in/soham-sakaria' },
        { name: 'GitHub', url: 'https://github.com/Soham-2411', handle: '@Soham-2411' },
        { name: 'Twitter', url: 'https://twitter.com/SakariaSoh88674', handle: '@SakariaSoh88674' },
        { name: 'LeetCode', url: 'https://leetcode.com/sohamsakaria/', handle: '/sohamsakaria' }
    ]

    return (
        <section id="contact" className="section contact" ref={ref}>
            <div className="section-inner">
                <header className="ct-header">
                    <div className="reveal eyebrow"><span>(05) · Contact</span></div>
                </header>

                <div className="ct-big">
                    <h2 className="reveal ct-headline">
                        Let's build<br />
                        <em>something</em><span className="period">.</span>
                    </h2>
                </div>

                <div className="ct-grid">
                    <div className="reveal ct-col">
                        <span className="ct-label">Write to me —</span>
                        <div className="ct-email-row">
                            <a
                                className="ct-email"
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {email}
                            </a>
                            <button className="ct-copy" onClick={copyEmail} aria-label="Copy email">
                                {copied ? 'copied ✓' : 'copy'}
                            </button>
                        </div>
                    </div>

                    <div className="reveal ct-col">
                        <span className="ct-label">Elsewhere —</span>
                        <ul className="ct-links">
                            {links.map((l) => (
                                <li key={l.name}>
                                    <a href={l.url} target="_blank" rel="noreferrer" className="ct-link">
                                        <span className="ct-link-name">{l.name}</span>
                                        <span className="ct-link-handle">{l.handle}</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <footer className="ct-footer">
                    <div className="ct-sign">
                        <span className="sig">S<span className="sig-dot">.</span>S</span>
                        <span className="sig-meta">Designed &amp; coded by Soham Sakaria · © {new Date().getFullYear()}</span>
                    </div>
                    <div className="ct-colophon">
                        <span>Set in Fraunces, Newsreader &amp; JetBrains Mono.</span>
                        <span>Built with React &amp; Vite.</span>
                        <span>Written in Neovim, on Arch Linux.</span>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Contact
