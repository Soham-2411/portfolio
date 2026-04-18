import { useEffect, useRef, useState } from 'react'
import './Home.css'

const Home = () => {
    const rootRef = useRef(null)
    const [typed, setTyped] = useState('')
    const phrases = [
        'building for web & mobile.',
        'full stack, end to end.',
        'writing careful software.'
    ]

    useEffect(() => {
        let i = 0, j = 0, forward = true, timeout
        const tick = () => {
            const cur = phrases[i]
            if (forward) {
                j++
                setTyped(cur.slice(0, j))
                if (j === cur.length) { forward = false; timeout = setTimeout(tick, 1800); return }
            } else {
                j--
                setTyped(cur.slice(0, j))
                if (j === 0) { forward = true; i = (i + 1) % phrases.length }
            }
            timeout = setTimeout(tick, forward ? 55 : 28)
        }
        timeout = setTimeout(tick, 1200)
        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        const els = rootRef.current?.querySelectorAll('.reveal') || []
        els.forEach((el, idx) => {
            el.style.transitionDelay = `${idx * 90}ms`
            requestAnimationFrame(() => el.classList.add('animate-in'))
        })
    }, [])

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="home" ref={rootRef}>
            <div className="home-grid-lines" aria-hidden="true">
                <span /><span /><span /><span /><span />
            </div>

            <div className="home-container">
                <div className="home-left">
                    <div className="reveal eyebrow">
                        <span>Portfolio</span>
                        <span className="dot-sep">—</span>
                        <span>2026 Edition</span>
                    </div>

                    <h1 className="reveal home-name">
                        Soham<br />
                        <em>Sakaria</em><span className="period">.</span>
                    </h1>

                    <div className="reveal home-role">
                        <span className="role-label">/ Software Engineer</span>
                        <span className="role-typed">
                            {typed}<span className="caret" />
                        </span>
                    </div>

                    <p className="reveal home-bio">
                        Software Engineer at <span className="ink">CMiC</span> in Toronto,
                        building enterprise software for the construction industry. Concordia
                        <span className="ink"> MASc</span> grad — I work across the stack, from
                        Flutter &amp; React on the front, to Spring &amp; Node at the back, and
                        care about the quiet details that make software feel considered.
                    </p>

                    <div className="reveal home-actions">
                        <button className="btn-primary" onClick={() => scrollTo('projects')}>
                            Selected Work
                        </button>
                        <button className="home-link" onClick={() => scrollTo('contact')}>
                            <span>Get in touch</span>
                            <span className="underline" />
                        </button>
                    </div>

                    <div className="reveal home-socials">
                        <span className="socials-label">/ find me</span>
                        <div className="socials-row">
                            <a href="https://github.com/Soham-2411" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/soham-sakaria-13251718b/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://twitter.com/SakariaSoh88674" target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                <span>Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>

                <aside className="home-right reveal">
                    <div className="card">
                        <header className="card-bar">
                            <span className="card-dots">
                                <i /><i /><i />
                            </span>
                            <span className="card-title">soham@arch: ~ — zsh</span>
                        </header>
                        <div className="card-body">
                            <div className="gutter" aria-hidden="true">
                                {Array.from({ length: 11 }, (_, i) => (
                                    <span key={i}>{i + 1}</span>
                                ))}
                                <span className="tilde">~</span>
                                <span className="tilde">~</span>
                                <span className="tilde">~</span>
                            </div>
                            <div className="buffer">
                                <p className="line"><span className="prompt"><span className="p-user">soham</span><span className="p-at">@</span><span className="p-host">arch</span><span className="p-path"> ~</span><span className="p-sigil">$</span></span> whoami</p>
                                <p className="line indent">soham · toronto, canada</p>
                                <p className="line"><span className="prompt"><span className="p-user">soham</span><span className="p-at">@</span><span className="p-host">arch</span><span className="p-path"> ~</span><span className="p-sigil">$</span></span> stack --current</p>
                                <ul className="stack">
                                    <li><span>→</span> React · TypeScript</li>
                                    <li><span>→</span> Flutter · Dart</li>
                                    <li><span>→</span> Spring Boot · Node</li>
                                    <li><span>→</span> Postgres · Mongo · Elastic</li>
                                </ul>
                                <p className="line"><span className="prompt"><span className="p-user">soham</span><span className="p-at">@</span><span className="p-host">arch</span><span className="p-path"> ~</span><span className="p-sigil">$</span></span> status</p>
                                <p className="line indent status-line">
                                    <span className="pulse" /> software engineer @ CMiC
                                </p>
                                <p className="line tilde-row">~</p>
                                <p className="line tilde-row">~</p>
                                <p className="line tilde-row">~</p>
                            </div>
                        </div>
                    </div>

                    <div className="neofetch">
                        <pre className="tux" aria-hidden="true">{`    .--.
   |o_o |
   |:_/ |
  //   \\ \\
 (|     | )
/'\\_   _/\`\\
\\___)=(___/`}</pre>
                        <dl className="sysinfo">
                            <div><dt>os</dt><dd>Arch Linux</dd></div>
                            <div><dt>touched grass</dt><dd>01-01-2025</dd></div>
                            <div><dt>shell</dt><dd>zsh 5.9</dd></div>
                            <div><dt>life</dt><dd>None</dd></div>
                            <div><dt>editor</dt><dd>neovim</dd></div>
                            <div><dt>loc</dt><dd>Not Found</dd></div>
                        </dl>
                    </div>
                </aside>
            </div>

            <div className="home-footer">
                <button className="scroll-cue" onClick={() => scrollTo('about')}>
                    <span className="cue-label">Scroll</span>
                    <span className="cue-line" />
                </button>
                <div className="home-meta">
                    <span>(01)</span>
                    <span>Index / Opening</span>
                </div>
            </div>
        </section>
    )
}

export default Home
