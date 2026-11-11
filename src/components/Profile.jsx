// Mostra a foto de perfil e o @usuário.
// Props: avatar (URL da imagem) e username (texto exibido).
export default function Profile({ avatar, username }) {
  return (
    <header className="profile">
      <div className="profile__photo">
        <img className="profile__avatar" src={avatar} alt={`Foto de perfil de ${username}`} width="114" height="114" />
      </div>
      <h1 className="profile__username">{username}</h1>
    </header>
  )
}
