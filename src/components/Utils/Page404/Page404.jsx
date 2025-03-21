import Banner from '../Banner'
import './Page404.css'

export const Page404 = () => {
  return ( 
    <div className='page404'>

      <div className='page404-banner'>
        <img src="/assets/img/PAGINA-404.svg" alt="Erro 404" />
      </div>

      <Banner />

    </div>
  )
}