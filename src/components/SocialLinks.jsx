import { icons } from './icons.jsx'

// Linha de ícones das redes sociais.
// Props: items, lista de { id, label, url }. O ícone é escolhido pelo id.
export default function SocialLinks({ items }) {
  return (
    <ul className="socials" aria-label="Redes sociais">
      {items.map((item) => {
        const Icon = icons[item.id]
        return (
          <li key={item.id}>
            <a
              className="socials__link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
