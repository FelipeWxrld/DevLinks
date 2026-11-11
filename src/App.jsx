import Profile from './components/Profile.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import LinkButton from './components/LinkButton.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import Footer from './components/Footer.jsx'
import { useTheme } from './hooks/useTheme.js'
import { profile, links, socials } from './data/profile.js'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="page">
      {/* No tema claro o avatar usa óculos escuros; no escuro, sem óculos */}
      <Profile avatar={profile.avatar} username={profile.username} sunglasses={theme === 'light'} />

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <nav className="links" aria-label="Meus links">
        {links.map((link) => (
          <LinkButton key={link.id} label={link.label} url={link.url} />
        ))}
      </nav>

      <SocialLinks items={socials} />

      <Footer name={profile.name} />
    </main>
  )
}
