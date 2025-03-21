import { Coffee } from '../Utils/Coffee/Coffee'
import './Home.css'

export const Home = () => {
  return (
    <div>
      <div className='content'>

        <div className='left-content'>
          <h1>Sabor de Minas</h1>
          <h3>Descubra os Sabores Autênticos de Minas Gerais! 🧀🔥</h3>
          <p>Bem-vindo ao Sabor de Minas, o seu guia definitivo para as receitas mais tradicionais e irresistíveis da culinária mineira! Aqui, cada prato conta uma história, cada tempero carrega um pedaço da nossa cultura, e cada garfada traz o aconchego do fogão a lenha.</p>
        </div>

        <div className='right-content'>
          <p>De um pão de queijo quentinho a um tutu de feijão bem temperado, passando pelo clássico frango com quiabo, reunimos as melhores receitas para você levar o gostinho de Minas para a sua cozinha.</p>
          <p>🌿 <strong className='underline'>Ingredientes simples, sabores inesquecíveis!</strong></p>
          <p>🔥 <strong className='underline'>Tradição que aquece o coração!</strong></p>
          <p>Escolha uma receita e embarque nessa jornada gastronômica pelo coração de Minas Gerais!</p>
        </div>

      </div>

      <Coffee />
    </div>
  )
}