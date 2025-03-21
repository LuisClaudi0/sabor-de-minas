import Banner from '../Utils/Banner'
import './Pages.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Pages = ({ page }) => {

  const [history, setHistory] = useState(null)
  const [curiosity, setCuriosity] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try{
        const historyResponse = await axios.get('/assets/bd/history.json')
        setHistory(historyResponse.data)

        const curiosityResponse = await axios.get('/assets/bd/curiosity.json')
        setCuriosity(curiosityResponse.data)

      } catch(error){
        console.error(error)
      }
    }
    fetchData()
  }, [])


  const showItems = (bdName, limit, operation) => 
    bdName.content
      .filter((_, index) => (operation ? index < limit : index > limit))
      .map((item, index) => (
        <div key={index}>
          {item.title && <h1>{item.title}</h1>}
          {item.paragraph && <p>{item.paragraph}</p>}
        </div>
      ));

  const renderContent = (data, leftLimit, rightLimit) => (
    <>
      <div className='content pages-content'>
        {data === history 
        ? <img className='img' src="\assets\img\GASTRONOMIA-MINEIRA.svg" alt="Banner Gastronomia Mineira" />
        : <img className='img' src="\assets\img\CURIOSIDADES.svg" alt="Banner Curiosidades" />
        }
        
        <div className='content-text'>
          <div className='left-content left'>{showItems(data, leftLimit, true)}</div>
          <div className='right-content right'>{showItems(data, rightLimit, false)}</div>
        </div>
      </div>
    </>
  );
  

  return (
    <div>

      <div className='pages'>
          {page === 'history' 

            ? history ?
              renderContent(history, 4, 3)
            : <div>Carregando...</div>

            : curiosity ? 
              renderContent(curiosity, 3, 2) 
            : <div>Carregando...</div>
          }
        </div>

        <Banner />
    </div>
  )
}