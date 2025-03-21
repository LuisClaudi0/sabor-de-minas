import './Header.css'
import { MenuLink } from '../MenuLink/MenuLink'

export const Header = () => {
  return (
    <div className='header'>
      <div className='main'>
        <MenuLink to='/' ><img className='header-logo' src="assets\img\LOGO-CINZA.svg" alt="Logo" /></MenuLink>
      </div>
      <div className='sec'>
        <MenuLink to='/receitas' >Receitas</MenuLink>
        <MenuLink to='/historia' >História</MenuLink>
        <MenuLink to='/curiosidades' >Curiosidades</MenuLink>
      </div>
    </div>
  )
}