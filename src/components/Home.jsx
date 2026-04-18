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
                        Graduate of <span className="ink">Concordia University</span> with a Master's
                        in Applied Computer Science. I build end-to-end products — mobile in
                        Flutter, web in React, backends in Spring &amp; Node — and care about
                        the quiet details that make software feel considered.
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
                            <div><dt>touched grass</dt><dd>2023-10-01</dd></div>
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
