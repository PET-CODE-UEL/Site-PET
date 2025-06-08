import logo from '../../assets/logo.svg'

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} className="logo" alt="Logo do PET Computação & Design"/>
        <p className="item-nav">Quem Somos</p>
        <p className="item-nav">Projetos</p>
        <p className="item-nav">Ações</p>
        <p className="item-nav">Eventos</p>
      </div>
    </>
  )
}

