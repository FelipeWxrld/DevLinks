// Rodapé. Prop: name (quem fez a página).
export default function Footer({ name }) {
  return (
    <footer className="footer">
      Feito com <span aria-label="amor" role="img">♥</span> por {name}
    </footer>
  )
}
