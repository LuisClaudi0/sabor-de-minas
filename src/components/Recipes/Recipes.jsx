import { useEffect, useState } from 'react'
import { Nav } from '../Utils/Nav/Nav'
import './Recipes.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Recipes = () => {

  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(null)
  const [filter, setFilter] = useState('Todos')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('assets/bd/recipes.json')
        setRecipes(response.data.receitas)

      } catch (error) {
        console.error(`Erro ao pegar recitas: ${error}`)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <Nav filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />

      <ul className='recipes'>

        {recipes ? (
          recipes
            .filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()))
            .filter(recipe => filter === 'Todos' || recipe.category === filter)
            .map(recipe => (
              <li key={recipe.id} className='recipes-content' onClick={() => navigate(`/receitas/${recipe.id}`)}>
                <div className='recipes__content__banner'>
                  <img src={recipe.img_path} alt="Banner da Receita" />
                </div>
                <div className='recipes__content__text'>
                  <h4>{recipe.name}</h4>
                  <p className='category'>({recipe.category})</p>
                  <p>{recipe.small_description}</p>
                </div>
              </li>
            ))
        ) : (
          <p>Carregando receitas...</p>
        )}

      </ul>


    </div>
  )
}