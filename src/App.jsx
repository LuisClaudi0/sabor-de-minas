import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import Home from './components/Home'
import Pages from './components/Pages'
import Page404 from './components/Utils/Page404'
import { Recipes } from './components/Recipes/Recipes'
import { RecipePage } from './components/RecipePage/RecipePage'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/receitas' element={<Recipes />} />
        <Route path='/receitas/:id' element={<RecipePage />}/>
        <Route path='/receitas/*' element={<Page404 />}/>
        <Route path='/historia' element={<Pages page='history' />} />
        <Route path='/curiosidades' element={<Pages />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    )
}

export default App