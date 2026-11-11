import { useEffect, useState } from 'react'

export const THEME_KEY = 'devlinks-theme'

// Lê o tema salvo. Se não existir (ou o localStorage estiver bloqueado), usa o escuro, como no Figma.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage indisponível: segue com o padrão
  }
  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Sempre que o tema muda: atualiza o <html> (que o CSS usa) e salva no localStorage.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // ignora erro de armazenamento
    }
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
