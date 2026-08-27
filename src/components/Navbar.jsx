import { useEffect, useState } from 'react'
//import profileImage from '../assets/hero.png'

const links = [
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = links.map(({ target }) => document.getElementById(target))
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('about')
        return
      }

      const current = sections.reduce((active, section) => {
        if (section && window.scrollY >= section.offsetTop - 250) return section.id
        return active
      }, 'about')
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goHome = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <nav className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4" aria-label="Main navigation">
        <div className="liquid-glass flex w-full max-w-2xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <button type="button" onClick={goHome} className="flex items-center gap-3" aria-label="Back to top">
            <img className="profile-image" src={"https://media.licdn.com/dms/image/v2/D5603AQHCmwET1OdiAg/profile-displayphoto-scale_200_200/B56ZyN3jPUKYAY-/0/1771906677048?e=2147483647&v=beta&t=6Eegk1zj4Joo-HKAiuHl4DLB6VArpDgtmwWYqs1zmCA"} alt="Witthaya Audomrat" />
            <span className="text-sm font-bold tracking-wide text-slate-800">Witthaya A.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {links.map(({ label, target }) => (
              <a
                key={target}
                href={`#${target}`}
                className={`nav-link ${activeSection === target ? 'active' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="menu-button md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <i className={isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="mobile-menu md:hidden">
          {links.map(({ label, target }) => (
            <a key={target} href={`#${target}`} onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar
