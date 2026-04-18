import { useEffect, useRef } from 'react'
import './About.css'

import ReactLogo from '../assets/React.png'
import JSLogo from '../assets/JS.png'
import TSLogo from '../assets/TS.png'
import PythonLogo from '../assets/Python.png'
import JavaLogo from '../assets/Java.png'
import CppLogo from '../assets/C++.png'
import FlutterLogo from '../assets/Flutter.png'
import FirebaseLogo from '../assets/Firebase.png'
import NodeLogo from '../assets/Node.png'
import GitLogo from '../assets/Git.png'
import DockerLogo from '../assets/Docker.png'
import SpringLogo from '../assets/Spring.png'
import MongoLogo from '../assets/Mongo.png'
import PostgresLogo from '../assets/Postgres.png'
import SupabaseLogo from '../assets/Supabase.png'
import ElasticLogo from '../assets/elastic.png'

const About = () => {
    const ref = useRef(null)

    const skillCategories = [
        { category: 'Frontend', skills: [
            { name: 'React', logo: ReactLogo },
            { name: 'JavaScript', logo: JSLogo },
            { name: 'TypeScript', logo: TSLogo }
        ]},
        { category: 'Backend', skills: [
            { name: 'Node.js', logo: NodeLogo },
            { name: 'Spring', logo: SpringLogo },
            { name: 'Python', logo: PythonLogo },
            { name: 'Java', logo: JavaLogo },
            { name: 'C++', logo: CppLogo }
        ]},
        { category: 'Mobile', skills: [
            { name: 'Flutter', logo: FlutterLogo }
        ]},
        { category: 'Database', skills: [
            { name: 'MongoDB', logo: MongoLogo },
            { name: 'PostgreSQL', logo: PostgresLogo },
            { name: 'Firebase', logo: FirebaseLogo },
            { name: 'Supabase', logo: SupabaseLogo },
            { name: 'Elasticsearch', logo: ElasticLogo }
        ]},
        { category: 'Tools', skills: [
            { name: 'Git', logo: GitLogo },
            { name: 'Docker', logo: DockerLogo }
        ]}
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
        ref.current?.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transitionDelay = `${(i % 6) * 70}ms`
            obs.observe(el)
        })
        return () => obs.disconnect()
    }, [])

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="about" className="section about" ref={ref}>
            <div className="section-inner">
                <header className="about-header">
                    <div className="reveal eyebrow">
                        <span>(02) · About</span>
                    </div>
                    <h2 className="reveal section-title">
                        A short <em>note</em> about me,<br />
                        for the curious.
                    </h2>
                </header>

                <div className="about-grid">
                    <aside className="about-meta">
                        <dl>
                            <div><dt>Based in</dt><dd>Toronto, CA</dd></div>
                            <div><dt>Degree</dt><dd>M.A.Sc, Concordia</dd></div>
                            <div><dt>Focus</dt><dd>Full Stack · Mobile</dd></div>
                            <div><dt>Currently</dt><dd><span className="dot" /> SWE @ CMiC</dd></div>
                        </dl>
                    </aside>

                    <article className="about-prose">
                        <p className="reveal lead">
                            As a full stack developer, I design and build <em>end-to-end</em>
                            products — web and mobile — where the user experience and the system
                            underneath both feel deliberate.
                        </p>
                        <p className="reveal">
                            I've competed in — and won — a handful of hackathons, shipped apps
                            through internships in Canada, India, and remotely for teams in
                            Australia, and spent time on research at Carleton University.
                        </p>
                        <p className="reveal">
                            Today I'm a <em>Software Engineer at CMiC</em> in Toronto, working
                            on enterprise software for the construction industry. Always happy
                            to talk shop, compare notes, or just say hi —
                        </p>
                        <div className="reveal">
                            <button className="btn-primary" onClick={scrollToContact}>
                                Say Hello
                            </button>
                        </div>
                    </article>
                </div>

                <div className="skills">
                    <div className="reveal skills-head">
                        <span className="eyebrow"><span>Stack · Index</span></span>
                        <span className="skills-count">
                            {skillCategories.reduce((n, c) => n + c.skills.length, 0).toString().padStart(2, '0')} tools
                        </span>
                    </div>

                    <div className="skills-list">
                        {skillCategories.map((cat, ci) => (
                            <div className="reveal skill-row" key={ci}>
                                <div className="skill-cat">
                                    <span className="cat-num">{String(ci + 1).padStart(2, '0')}</span>
                                    <span className="cat-name">{cat.category}</span>
                                </div>
                                <div className="skill-items">
                                    {cat.skills.map((s, i) => (
                                        <span className="skill-chip" key={i}>
                                            <img src={s.logo} alt="" />
                                            <span>{s.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
