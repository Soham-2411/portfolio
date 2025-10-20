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

    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', logo: ReactLogo },
                { name: 'JavaScript', logo: JSLogo },
                { name: 'TypeScript', logo: TSLogo }
            ]
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', logo: NodeLogo },
                { name: 'Spring', logo: SpringLogo },
                { name: 'Python', logo: PythonLogo },
                { name: 'Java', logo: JavaLogo },
                { name: 'C++', logo: CppLogo }
            ]
        },
        {
            category: 'Mobile',
            skills: [
                { name: 'Flutter', logo: FlutterLogo }
            ]
        },
        {
            category: 'Database',
            skills: [
                { name: 'MongoDB', logo: MongoLogo },
                { name: 'PostgreSQL', logo: PostgresLogo },
                { name: 'Firebase', logo: FirebaseLogo },
                { name: 'Supabase', logo: SupabaseLogo },
                { name: 'Elasticsearch', logo: ElasticLogo }
            ]
        },
        {
            category: 'Tools',
            skills: [
                { name: 'Git', logo: GitLogo },
                { name: 'Docker', logo: DockerLogo }
            ]
        }
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
                                As a Full Stack Developer, I design and build end-to-end solutions for both web and mobile platforms, 
                                ensuring seamless user experiences and robust backend functionality. You can explore the projects section 
                                to see examples of my work across a variety of technologies and domains.
                            </p>
                            <p>
                                Leveraging my skills in both frontend and backend development, I've participated in numerous hackathons, 
                                earning recognition for innovative solutions and strong team collaboration. I have also gained valuable 
                                industry experience through internships, working on mobile app development, backend systems, and 
                                scalable data-driven applications.
                            </p>
                            <p>
                                I’m open to internship and job opportunities where I can contribute, learn, and grow. 
                                If you have an opportunity that matches my skills, please don’t hesitate to get in touch.
                            </p>
                        </div>
                        <button className="btn-primary" onClick={scrollToContact}>
                            Contact
                        </button>
                    </div>
                </div>

                <div className="skills-section" ref={skillsRef}>
                    <h3>My Skills</h3>
                    <div className="skills-categories">
                        {skillCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="skill-category">
                                <h4 className="category-title">{category.category}</h4>
                                <div className="skills-grid">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-item">
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
