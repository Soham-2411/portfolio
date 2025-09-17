import { useEffect, useRef } from 'react'
import './Home.css'

const Home = () => {
    const nameRef = useRef(null)
    const taglineRef = useRef(null)

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

        if (nameRef.current) observer.observe(nameRef.current)
        if (taglineRef.current) observer.observe(taglineRef.current)

        return () => observer.disconnect()
    }, [])

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="home">
            <div className="home-container">
                <div className="home-content">
                    <div className="home-text">
                        <h4 className="greeting">Hi, my name is</h4>
                        <h1 ref={nameRef} className="name">Soham Sakaria.</h1>
                        <h1 ref={taglineRef} className="tagline">
                            I build apps for mobile and web.
                        </h1>
                        <p className="description">
                            I am a graduate of Concordia University with a Master’s in Applied Computer Science.
                            I have a strong passion for development, working across the full stack to build impactful applications.
                            I develop mobile applications with Flutter and create dynamic, scalable web applications using ReactJS and backend technologies such as Spring Boot and Node.js.
                        </p>
                        <div className="home-buttons">
                            <button className="btn-primary" onClick={scrollToAbout}>
                                About me
                            </button>
                        </div>
                    </div>
                </div>

                <div className="home-visual">
                    <div className="floating-card">
                        <div className="card-content">
                            <div className="tech-stack">
                                <span>React</span>
                                <span>Flutter</span>
                                <span>JavaScript</span>
                                <span>Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default Home
