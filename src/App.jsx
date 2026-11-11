import Profile from './components/Profile.jsx'
import LinkButton from './components/LinkButton.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import Footer from './components/Footer.jsx'
import { profile, links, socials } from './data/profile.js'

export default function App() {
  return (
    <main className="page">
      <Profile avatar={profile.avatar} username={profile.username} />

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
