import { useEffect, useRef } from 'react'
import './About.css'

// Import all the skill logos
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
    const skillsRef = useRef(null)

    const skills = [
        { name: 'React', logo: ReactLogo },
        { name: 'JavaScript', logo: JSLogo },
        { name: 'TypeScript', logo: TSLogo },
        { name: 'Python', logo: PythonLogo },
        { name: 'Java', logo: JavaLogo },
        { name: 'C++', logo: CppLogo },
        { name: 'Flutter', logo: FlutterLogo },
        { name: 'Firebase', logo: FirebaseLogo },
        { name: 'Node.js', logo: NodeLogo },
        { name: 'Git', logo: GitLogo },
        { name: 'Docker', logo: DockerLogo },
        { name: 'Spring', logo: SpringLogo },
        { name: 'MongoDB', logo: MongoLogo },
        { name: 'PostgreSQL', logo: PostgresLogo },
        { name: 'Supabase', logo: SupabaseLogo },
        { name: 'Elasticsearch', logo: ElasticLogo }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (skillsRef.current) {
            observer.observe(skillsRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="section-header">
                    <h2>About Me</h2>
                    <div className="section-line"></div>
                    <p>
                        Here, you will find more information about me, what I do, and my current skills in terms
                        of programming and technology.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Get to know me!</h3>
                        <div className="about-description">
                            <p>
                                As a Front-end Developer, I construct the user interfaces for both mobile apps and
                                websites, helping to the overall success of each product. You may explore the
                                projects section to see examples of my work.
                            </p>
                            <p>
                                Applying my skills, I've actively participated in numerous hackathons, achieving
                                success in several. My strength lies in exceptional team collaboration. Additionally,
                                I have gained industry experience through internships in mobile development.
                            </p>
                            <p>
                                I'm open to Internship and job opportunities where I can contribute, learn and grow. If you
                                have a good opportunity that matches my skills, then please do not hesitate to
                                contact me.
                            </p>
                        </div>
                        <button className="btn-primary" onClick={scrollToContact}>
                            Contact
                        </button>
                    </div>
                </div>

                <div className="skills-section" ref={skillsRef}>
                    <h3>My Skills</h3>
                    <div className="skills-scroll-container">
                        <div className="skills-scroll">
                            {/* First set of skills */}
                            {skills.map((skill, index) => (
                                <div key={`${skill.name}-1`} className="skill-item">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="skill-logo"
                                    />
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                            {/* Duplicate set for seamless scrolling */}
                            {skills.map((skill, index) => (
                                <div key={`${skill.name}-2`} className="skill-item">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="skill-logo"
                                    />
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
