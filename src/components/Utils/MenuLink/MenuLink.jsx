import { Link, useLocation } from 'react-router-dom'
import './MenuLink.css'

export const MenuLink = ({ to, children }) => {

  const location = useLocation()
 
  return (
    <Link className={`${location.pathname === to ? 'active-link' : ''}`} to={to}> {children} </Link>
  )
}