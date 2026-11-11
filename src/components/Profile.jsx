// Mostra a foto de perfil e o @usuário.
// Props:
//   avatar     -> URL da imagem
//   username   -> texto exibido
//   sunglasses -> true/false: coloca óculos escuros sobre a foto (usado no tema claro)
export default function Profile({ avatar, username, sunglasses }) {
  return (
    <header className="profile">
      <div className="profile__photo">
        <img className="profile__avatar" src={avatar} alt={`Foto de perfil de ${username}`} width="114" height="114" />
        <Sunglasses visible={sunglasses} />
      </div>
      <h1 className="profile__username">{username}</h1>
    </header>
  )
}

// Óculos desenhados em SVG por cima da foto. Aparecem/somem com uma transição suave.
function Sunglasses({ visible }) {
  return (
    <svg
      className={`profile__sunglasses${visible ? ' is-on' : ''}`}
      viewBox="0 0 100 40"
      aria-hidden="true"
    >
      {/* hastes */}
      <path d="M2 10 L14 12 M98 10 L86 12" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      {/* lentes */}
      <path d="M12 10h34c2 0 3 1 3 3v7c0 8-6 14-15 14h-6c-9 0-15-6-16-14z" fill="#111" />
      <path d="M54 10h34c2 0 3 1 3 3l-1 7c-1 8-7 14-16 14h-6c-9 0-15-6-15-14z" fill="#111" />
      {/* ponte */}
      <path d="M48 12q4-3 8 0" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* brilho */}
      <path d="M18 14l9-1M60 14l9-1" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
