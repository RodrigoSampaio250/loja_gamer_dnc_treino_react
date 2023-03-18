import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Nav from '../../components/Nav/Nav';
import ProdutoCard from '../../components/ProdutoCard/ProdutoCard'
import Footer from '../../components/Footer/Footer'

export const Home = ({dados}) => {
  return (
    <div className='home'>
      <Nav />
      <img className='home__propaganda' src="propaganda.svg" alt="" />
      <div className='home__conteiner'>
        {
          dados.map(produto => (<ProdutoCard key={produto.id} dados={produto}/>))
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home