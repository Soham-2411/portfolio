import { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
    const ref = useRef(null)

    const experiences = [
        {
            id: 0,
            role: 'Software Engineer',
            title: 'Software Engineer',
            company: 'CMiC',
            location: 'Toronto, ON',
            period: '2026 · Feb — Present',
            description: [
                'Building features across the stack for enterprise construction software used by major North American contractors.',
                'Working on web and platform modules, translating product requirements into shipped functionality.',
                'Collaborating across design, product, and QA to deliver reliable, maintainable releases.'
            ],
            stack: ['Java', 'JavaScript', 'Oracle', 'Spring']
        },
        {
            id: 1,
            role: 'Research Intern',
            title: 'Mitacs Globalink Research Internship',
            company: 'Carleton University',
            location: 'Ottawa, ON',
            period: '2022 · Jul — Sep',
            description: [
                'Researched with Prof. David Thue on definitions of "game mechanics".',
                'Built a Unity 3D platform for users to submit visual definitions as block diagrams.',
                'Conducted user studies with public participants.'
            ],
            stack: ['Unity', 'C#', 'Research']
        },
        {
            id: 2,
            role: 'Android Developer',
            title: 'Android App Developer',
            company: 'Remote — Australia',
            location: 'Remote',
            period: '2021 · Jul — Dec',
            description: [
                'Developed a mobile app to track non-documented clinical activity at Royal Brisbane and Women\'s Hospital.',
                'Collaborated with a team of 3 interns to ship patient–doctor appointment management.',
                'Built the entire app in Flutter from design handoff to release.'
            ],
            stack: ['Flutter', 'Firebase', 'Dart']
        },
        {
            id: 3,
            role: 'Flutter Developer',
            title: 'Flutter App Developer',
            company: 'Mentor Match India',
            location: 'Chennai, IN',
            period: '2020 · Dec — Mar',
            description: [
                'Built cross-platform modules for a mentorship matching platform.',
                'Worked closely with founders to ship polished, user-tested flows.',
                'Integrated Firebase backend for real-time messaging and data.'
            ],
            stack: ['Flutter', 'Firebase']
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
        }, { threshold: 0, rootMargin: '0px 0px -10% 0px' })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="experience" className="section experience" ref={ref}>
            <div className="section-inner">
                <header className="exp-header">
                    <div className="reveal eyebrow"><span>(03) · Work</span></div>
                    <h2 className="reveal section-title">
                        Places I've<br /><em>built</em> things.
                    </h2>
                </header>

                <ol className="exp-list">
                    {experiences.map((exp, idx) => (
                        <li className="reveal exp-item" key={exp.id}>
                            <div className="exp-index">
                                <span className="num">/{String(idx + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="exp-body">
                                <div className="exp-top">
                                    <div>
                                        <h3 className="exp-title">{exp.title}</h3>
                                        <div className="exp-company">
                                            <span>{exp.company}</span>
                                            <span className="bullet">·</span>
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                    <div className="exp-period">{exp.period}</div>
                                </div>
                                <ul className="exp-desc">
                                    {exp.description.map((d, i) => (
                                        <li key={i}>{d}</li>
                                    ))}
                                </ul>
                                <div className="exp-stack">
                                    {exp.stack.map((s, i) => <span key={i}>{s}</span>)}
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default Experience
