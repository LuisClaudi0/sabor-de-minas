import './RecipePage.css'
import { Navigate, useParams } from 'react-router-dom'
import Banner from '../Utils/Banner'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../Utils/Header/Header.css'

export const RecipePage = () => {
  const { id } = useParams()
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/assets/bd/recipes.json')
        setRecipes(response.data.receitas)

      } catch (error) {
        console.error(`Erro ao pegar receitas: ${error}`)
      }
    }
    fetchData()
  }, [])

  if (isNaN(Number(id)) || Number(id) > 16 || Number(id) < 1) {
    return <Navigate to="/Page404" replace />;
  }
  return (
    <div>

      <div className='recipe'>

        {recipes ?

          recipes.map((recipe) => (recipe.id === id
            ?
            <div className='recipe-content' key={recipe.id}>
              <div className='recipe-left'>
                <h1>{recipe.name}</h1>
                <img src={`/${recipe.img_path}`} alt={recipe.name} />
                <p>{recipe.description}</p>
              </div>

              <div className='recipe-right'>
                <h2>Ingredientes:</h2>
                {recipe.ingredients.map((ingredient) => (<p key={ingredient}>- {ingredient}</p>))}

                <h2>Modo de Preparo:</h2>
                {recipe.preparation.map((preparation) => (<p key={preparation}>{preparation}</p>))}
              </div>
            </div>
            : ''
          ))

          : <p>Aguardando...</p>
        }




      </div>

      <Banner />
    </div>
  )

}