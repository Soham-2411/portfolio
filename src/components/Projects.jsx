import { useEffect, useRef } from 'react'
import './Projects.css'

const Projects = () => {
    const projectsRef = useRef(null)

    const projects = [
        {
            id: 1,
            title: 'ThinkArt',
            description: 'ThinkArt is a flutter application based on selling of art/paintings in the digital market. In the current market, due to COVID 19, many artists have lost their jobs and also all public art galleries and public auction of paintings are closed. This is where ThinkArt comes in. This application has everything a customer wants when going to look for buying a painting.',
            technologies: ['Flutter', 'Blockchain', 'Firebase'],
            github: 'https://github.com/Soham-2411/ThinkArt',
            demo: 'https://devfolio.co/projects/thinkart-f364',
            image: '/src/assets/thinkart.jpg'
        },
        {
            id: 2,
            title: 'ScholarAid',
            description: 'ScholarAid(Android application) aims to provide a very different approach to online studying. Students can experience lab classes in augmented reality for a better online understanding of lab classes. Along with that, it provides an AI paraphrasing system where users can enter a paragraph and the AI will summarize and create a quiz based on the info.',
            technologies: ['Flutter development', 'AR'],
            github: 'https://github.com/Soham-2411/ScholarAid',
            demo: 'https://devfolio.co/projects/scholaraid-947c',
            image: '/src/assets/scholaraid.jpg'
        },
        {
            id: 3,
            title: 'SaferX',
            description: 'This application was made in collaboration. It is an android mobile application based in flutter which will ensure Women Safety and Security in India. This application aims at providing instant help to women in need and also provide information to women who are not sure how to get rid of risky situations while traveling in any part of India.',
            technologies: ['Flutter development', 'Speech-to-text'],
            github: 'https://github.com/Ctrl-Alt-Eliiiteee/SaferX',
            demo: 'https://devfolio.co/projects/safelink-d4ef',
            image: '/src/assets/saferx.jpg'
        },
        {
            id: 4,
            title: 'Elixir',
            description: 'This application was made with the pandemic in mind where people were suffering physically and mentally. The users can use the social feature to share their success stories to motivate others. They can also consult medical professionals through chat/video call. This project won Best Health Hack Synthacks Hackathon (An MLH initiative) and Best Mobile App at codestellation hackathon organised by Brandeis.',
            technologies: ['Flutter development', 'Speech-to-text'],
            github: 'https://github.com/Ctrl-Alt-Eliiiteee/Elixir/',
            demo: 'https://devfolio.co/projects/elixir',
            image: '/src/assets/elixir.jpg'
        },
        {
            id: 5,
            title: 'Warzone-Clone',
            description: 'This project was developed as a course project for Advanced programming practices. It is a Java-based recreation of Warzone, featuring player-assigned armies that can engage in territorial conflicts against opponents. The game includes an integrated AI, allowing solo players to engage in strategic battles against computer-controlled adversaries.',
            technologies: ['Java'],
            github: 'https://github.com/Soham-2411/app_risk',
            demo: null,
            image: '/src/assets/warzone.jpg'
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

        if (projectsRef.current) {
            const projectCards = projectsRef.current.querySelectorAll('.project-card')
            projectCards.forEach((card) => observer.observe(card))
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="section-header">
                    <h2>Projects</h2>
                    <div className="section-line"></div>
                </div>

                <div className="projects-grid" ref={projectsRef}>
                    {projects.map((project, index) => (
                        <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="project-image">
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15,3 21,3 21,9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className="project-placeholder">
                                    <span>{project.title}</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
