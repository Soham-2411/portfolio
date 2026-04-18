import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [time, setTime] = useState('')
    const { isDarkMode, toggleDarkMode } = useTheme()

    const navItems = [
        { id: 'home', label: 'Index', num: '01' },
        { id: 'about', label: 'About', num: '02' },
        { id: 'experience', label: 'Work', num: '03' },
        { id: 'projects', label: 'Projects', num: '04' },
        { id: 'contact', label: 'Contact', num: '05' }
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const tick = () => {
            const d = new Date()
            const fmt = d.toLocaleTimeString('en-GB', {
                hour: '2-digit', minute: '2-digit', timeZone: 'America/Toronto'
            })
            setTime(fmt)
        }
        tick()
        const t = setInterval(tick, 30000)
        return () => clearInterval(t)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <button className="brand" onClick={() => scrollToSection('home')} aria-label="Home">
                    <span className="brand-mark">S<span className="brand-dot">.</span>S</span>
                    <span className="brand-sub">Soham Sakaria</span>
                </button>

                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            <span className="nav-num">{item.num}</span>
                            <span className="nav-label">{item.label}</span>
                        </button>
                    ))}
                </div>

                <div className="nav-meta">
                    <span className="nav-clock">
                        <span className="clock-dot" /> YYZ · {time}
                    </span>
                    <button
                        className="theme-toggle"
                        onClick={toggleDarkMode}
                        aria-label="Toggle theme"
                        title={isDarkMode ? 'Switch to light' : 'Switch to dark'}
                    >
                        {isDarkMode ? '☼' : '☽'}
                    </button>
                    <button
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span><span></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
