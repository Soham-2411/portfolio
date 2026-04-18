import { useEffect, useRef, useState } from 'react'
import './Projects.css'

const Projects = () => {
    const ref = useRef(null)
    const [hovered, setHovered] = useState(null)

    const projects = [
        {
            id: 1,
            title: 'ThinkArt',
            year: '2021',
            tagline: 'A digital marketplace for art, on the blockchain.',
            description: 'A Flutter app for buying and selling paintings in a digital market. Built during COVID when galleries and physical auctions closed — ThinkArt replaces them with a blockchain-backed auction flow for artists and collectors.',
            technologies: ['Flutter', 'Blockchain', 'Firebase'],
            github: 'https://github.com/Soham-2411/ThinkArt',
            demo: 'https://devfolio.co/projects/thinkart-f364'
        },
        {
            id: 2,
            title: 'ScholarAid',
            year: '2021',
            tagline: 'Lab classes in augmented reality.',
            description: 'An Android app that reimagines online study: experience lab classes in AR, and use the built-in AI to paraphrase passages and auto-generate quizzes from any paragraph of text.',
            technologies: ['Flutter', 'AR', 'AI'],
            github: 'https://github.com/Soham-2411/ScholarAid',
            demo: 'https://devfolio.co/projects/scholaraid-947c'
        },
        {
            id: 3,
            title: 'SaferX',
            year: '2021',
            tagline: 'An instant-help network for women in India.',
            description: 'A collaborative Flutter app focused on women\'s safety — delivering instant help, voice-triggered SOS via speech-to-text, and guidance for risky travel scenarios across India.',
            technologies: ['Flutter', 'Speech-to-text'],
            github: 'https://github.com/Ctrl-Alt-Eliiiteee/SaferX',
            demo: 'https://devfolio.co/projects/safelink-d4ef'
        },
        {
            id: 4,
            title: 'Elixir',
            year: '2021',
            tagline: 'A mental-health companion for the pandemic.',
            description: 'Built during the pandemic to help people struggling physically and mentally. Share success stories with the community, and consult medical professionals via chat or video call. Won Best Health Hack at Synthacks (MLH) and Best Mobile App at Brandeis Codestellation.',
            technologies: ['Flutter', 'Firebase', 'WebRTC'],
            github: 'https://github.com/Ctrl-Alt-Eliiiteee/Elixir/',
            demo: 'https://devfolio.co/projects/elixir',
            award: 'Best Health Hack · Synthacks'
        },
        {
            id: 5,
            title: 'Warzone',
            year: '2024',
            tagline: 'A Java reimagining of the classic strategy game.',
            description: 'A course project for Advanced Programming Practices — a Java-based recreation of Warzone with territorial combat, player-assigned armies, and an integrated AI for solo strategic play.',
            technologies: ['Java', 'OOP', 'AI'],
            github: 'https://github.com/Soham-2411/app_risk',
            demo: null
        }
    ]

    useEffect(() => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('animate-in')
                    obs.unobserve(e.target)
                }
            })
        }, { threshold: 0.12 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="projects" className="section projects" ref={ref}>
            <div className="section-inner">
                <header className="proj-header">
                    <div className="reveal eyebrow"><span>(04) · Projects</span></div>
                    <h2 className="reveal section-title">
                        Selected <em>work</em>,<br />
                        mostly shipped in Flutter.
                    </h2>
                    <p className="reveal proj-sub">
                        A sample of things I've built — hackathon wins, course projects,
                        and side experiments. More on <a href="https://github.com/Soham-2411" target="_blank" rel="noreferrer">GitHub</a>.
                    </p>
                </header>

                <ol className="proj-list">
                    {projects.map((p, idx) => (
                        <li
                            className="reveal proj-item"
                            key={p.id}
                            onMouseEnter={() => setHovered(p.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className="proj-meta">
                                <span className="proj-num">{String(idx + 1).padStart(2, '0')} /</span>
                                <span className="proj-year">{p.year}</span>
                            </div>

                            <div className="proj-main">
                                <div className="proj-title-row">
                                    <h3 className="proj-title">
                                        {p.title}
                                        <span className="proj-dot">.</span>
                                    </h3>
                                    <p className="proj-tag">{p.tagline}</p>
                                </div>

                                <p className="proj-desc">{p.description}</p>

                                <div className="proj-row-bottom">
                                    <div className="proj-tech">
                                        {p.technologies.map((t, i) => <span key={i}>{t}</span>)}
                                        {p.award && <span className="proj-award">★ {p.award}</span>}
                                    </div>
                                    <div className="proj-links">
                                        <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                                            <span>Source</span>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
                                        </a>
                                        {p.demo && (
                                            <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                                                <span>Live</span>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H9M17 7V15"/></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={`proj-glow ${hovered === p.id ? 'on' : ''}`} aria-hidden="true" />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Projects
