import { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
    const timelineRef = useRef(null)

    const experiences = [
        {
            id: 1,
            title: 'Mitacs Globalink Research Internship',
            company: 'Carleton University, Ottawa, Ontario',
            period: 'Jul 2022 - Sep 2022',
            description: [
                'Conducted research work under Professor David Thue on different definitions of the term "Game mechanics".',
                'Made a platform for users to provide their own definition of the term using visual representations such as block diagrams.',
                'Used the software Unity 3d to make the application which would be tested on the public.'
            ],
            type: 'left'
        },
        {
            id: 2,
            title: 'Android App Developer',
            company: 'Australia (Remote)',
            period: 'Jul 2021 - Dec 2021',
            description: [
                'Worked to participate in the development of a mobile app to track the non-documented clinical activity of the staff of Royal Brisbane and Women\'s Hospital.',
                'Collaborated with 3 interns to develop an app to manage appointments for different patients with different doctors.',
                'Made the application using Flutter software.'
            ],
            type: 'right'
        },
        {
            id: 3,
            title: 'Flutter App Developer',
            company: 'Mentor Match India, Chennai, Tamil Nadu',
            period: 'Dec 2020 - Mar 2021',
            description: [
                'Worked to participate in the development of a mobile app to track the non-documented clinical activity of the staff of Royal Brisbane and Women\'s Hospital.',
                'Collaborated with 3 interns to develop an app to manage appointments for different patients with different doctors.',
                'Made the application using Flutter software.'
            ],
            type: 'left'
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

        if (timelineRef.current) {
            const timelineItems = timelineRef.current.querySelectorAll('.timeline-item')
            timelineItems.forEach((item) => observer.observe(item))
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="experience" className="experience">
            <div className="experience-container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <div className="section-line"></div>
                </div>

                <div className="timeline" ref={timelineRef}>
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`timeline-item ${exp.type}`}>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.title}</h3>
                                    <div className="timeline-meta">
                                        <span className="company">{exp.company}</span>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                </div>
                                <ul className="timeline-description">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
