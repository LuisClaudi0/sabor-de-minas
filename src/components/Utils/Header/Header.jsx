import './Header.css'
import { MenuLink } from '../MenuLink/MenuLink'
import logo from '/assets/img/LOGO-CINZA.svg'

export const Header = () => {
  return (
    <div className='header'>
      <div className='main'>
        <MenuLink to='/' ><img className='header-logo' src={logo} alt="Início" /></MenuLink>
      </div>
      <div className='sec'>
        <MenuLink to='/receitas' >Receitas</MenuLink>
        <MenuLink to='/historia' >História</MenuLink>
        <MenuLink to='/curiosidades' >Curiosidades</MenuLink>
      </div>
    </div>
  )
}