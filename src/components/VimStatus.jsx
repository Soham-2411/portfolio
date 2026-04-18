import { useEffect, useRef, useState } from 'react'
import './VimStatus.css'

const SECTIONS = ['home', 'about', 'experience', 'projects', 'contact']
const LABELS = {
    home: 'index.tsx',
    about: 'about.tsx',
    experience: 'work.tsx',
    projects: 'projects.tsx',
    contact: 'contact.tsx'
}

const VimStatus = ({ activeSection }) => {
    const [mode, setMode] = useState('NORMAL')
    const [cmd, setCmd] = useState('')
    const [pos, setPos] = useState({ line: 1, col: 1, pct: 0 })
    const [flash, setFlash] = useState(null)
    const keyBuf = useRef('')
    const bufTimer = useRef(null)

    useEffect(() => {
        const onScroll = () => {
            const sec = document.getElementById(activeSection)
            if (!sec) return
            const rect = sec.getBoundingClientRect()
            const h = document.documentElement
            const pct = Math.min(100, Math.max(0,
                Math.round((window.scrollY / (h.scrollHeight - h.clientHeight)) * 100)
            ))
            const line = Math.max(1, Math.round((-rect.top / 24) + 1))
            setPos({ line, col: 1, pct })
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [activeSection])

    const goto = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    const step = (dir) => {
        const i = SECTIONS.indexOf(activeSection)
        const next = Math.max(0, Math.min(SECTIONS.length - 1, i + dir))
        goto(SECTIONS[next])
    }
    const doFlash = (msg) => {
        setFlash(msg)
        setTimeout(() => setFlash(null), 1200)
    }

    useEffect(() => {
        const isTyping = (el) => {
            if (!el) return false
            const tag = el.tagName
            return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable
        }
        const onKey = (e) => {
            if (isTyping(e.target)) return
            if (mode === 'COMMAND') {
                if (e.key === 'Escape') { setMode('NORMAL'); setCmd(''); return }
                if (e.key === 'Enter') {
                    const c = cmd.trim()
                    if (c === 'q' || c === 'wq' || c === 'x') {
                        doFlash('E11: goodbye would be rude.')
                    } else if (c === 'w') {
                        doFlash('portfolio written. 1 soul, 999L')
                    } else if (c === 'home' || c === '1') { goto('home') }
                    else if (c === 'about' || c === '2') { goto('about') }
                    else if (c === 'work' || c === '3') { goto('experience') }
                    else if (c === 'projects' || c === '4') { goto('projects') }
                    else if (c === 'contact' || c === '5') { goto('contact') }
                    else if (c === 'help' || c === 'h') {
                        doFlash('j/k · gg/G · :1-5 · :w · esc')
                    } else if (c) {
                        doFlash(`E492: not a command: ${c}`)
                    }
                    setMode('NORMAL'); setCmd('')
                    return
                }
                if (e.key === 'Backspace') { setCmd(c => c.slice(0, -1)); return }
                if (e.key.length === 1) { setCmd(c => (c + e.key).slice(0, 30)); return }
                return
            }
            // NORMAL
            if (e.key === ':') { e.preventDefault(); setMode('COMMAND'); setCmd(''); return }
            if (e.key === 'Escape') { keyBuf.current = ''; return }
            if (e.key === 'j') { e.preventDefault(); step(1); return }
            if (e.key === 'k') { e.preventDefault(); step(-1); return }
            if (e.key === 'G') { e.preventDefault(); goto('contact'); return }
            if (e.key === 'g') {
                keyBuf.current += 'g'
                if (bufTimer.current) clearTimeout(bufTimer.current)
                if (keyBuf.current === 'gg') { goto('home'); keyBuf.current = ''; return }
                bufTimer.current = setTimeout(() => { keyBuf.current = '' }, 600)
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [mode, cmd, activeSection])

    const file = LABELS[activeSection] || 'buffer'

    return (
        <div className={`vim-bar mode-${mode.toLowerCase()}`}>
            <div className="vim-left">
                <span className="vim-mode">{mode}</span>
                <span className="vim-file">
                    <span className="vim-sep">~/soham/portfolio/</span>
                    <span className="vim-filename">{file}</span>
                    <span className="vim-flag">[+]</span>
                </span>
            </div>

            <div className="vim-center">
                {mode === 'COMMAND' ? (
                    <span className="vim-cmd">:{cmd}<span className="vim-caret" /></span>
                ) : flash ? (
                    <span className="vim-flash">{flash}</span>
                ) : (
                    <span className="vim-hint">
                        <kbd>j</kbd><kbd>k</kbd> move  ·  <kbd>gg</kbd>/<kbd>G</kbd> jump  ·  <kbd>:</kbd> cmd
                    </span>
                )}
            </div>

            <div className="vim-right">
                <span className="vim-branch">main</span>
                <span className="vim-sep">·</span>
                <span className="vim-os">linux</span>
                <span className="vim-sep">·</span>
                <span>utf-8[unix]</span>
                <span className="vim-sep">·</span>
                <span>{String(pos.line).padStart(3, ' ')}:{String(pos.col).padStart(2, '0')}</span>
                <span className="vim-sep">·</span>
                <span>{pos.pct}%</span>
            </div>
        </div>
    )
}

export default VimStatus
