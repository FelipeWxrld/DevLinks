// Botão de link. É uma tag <a> (semântica correta para navegação), estilizada como botão.
// Props: label (texto) e url (destino). Abre em nova aba com rel seguro.
export default function LinkButton({ label, url }) {
  return (
    <a className="link-button" href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
