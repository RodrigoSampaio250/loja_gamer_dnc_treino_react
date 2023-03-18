import React from 'react'
import './index.scss';
import logo from "../../assets/DncDetalhe.svg";
import carrinho from "../../assets/carrinhoEsq.svg"
import lupa from "../../assets/lupa.svg"

export const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav__cart-shop">
          <img src={logo} alt="logo" className="nav__logo" />
          <img src={lupa} alt="search logo" className="nav__search-logo" />
          <input type="text" placeholder="Search" />
          <img className='nav__carrinho' src={carrinho} alt="carrinho" />
        </div>
        
        <div>
          <ul>
            <li>Novidades</li>
            <li>Jogos</li>
            <li>Video Games</li>
            <li>Mesas Gamer</li>
            <li>Promoções</li>
            <li>Atendimento</li>
          </ul>
        </div>
    </div>
  )
}

export default Nav