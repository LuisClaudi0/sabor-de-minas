import './NavCamps.css'
import { FaFilter, FaSearch } from "react-icons/fa";

export const NavCamps = ({ children, type, to, filter, setFilter, search, setSearch }) => {

  return (
    <>
      {type === 'input' ? 
        <div className='camp camp-input'>
          <FaSearch className='icon' color='#1f1f1f' size={15} />
          <input type="text" placeholder='O que procura?' onChange={(e) => setSearch(e.target.value) } value={search} />
        </div> :
        <div className='camp' onClick={() => setFilter(to)}>
          <FaFilter className='icon' color='#1f1f1f' size={15} />
          <p className={`${filter === to ? 'active-link' : ''}`}>{children}</p>
        </div>
      }
    </>
  )
}