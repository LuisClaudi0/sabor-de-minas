import { NavCamps } from '../NavCamps/NavCamps'
import './Nav.css'

export const Nav = ({ search, setSearch, filter, setFilter}) => {

  return (
    <div className='nav'>
      <NavCamps search={search} setSearch={setSearch} type='input'></NavCamps>
      <NavCamps filter={filter} setFilter={setFilter} to='Todos'>Todos</NavCamps>
      <NavCamps filter={filter} setFilter={setFilter} to='Entrada'>Entradas</NavCamps>
      <NavCamps filter={filter} setFilter={setFilter} to='Prato Principal'>Pratos Principais</NavCamps>
      <NavCamps filter={filter} setFilter={setFilter} to='Lanche e Quitanda'>Quitandas</NavCamps>
      <NavCamps filter={filter} setFilter={setFilter} to='Sobremesa'>Sobremesas</NavCamps>
    </div>
  )
}