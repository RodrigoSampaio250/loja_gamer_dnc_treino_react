import { Link } from 'react-router-dom';
import React from 'react'
import './index.scss'


const DetalhedoProduto = ({dados}) => {
   console.log(dados);
  return (

    <div className="Detalhedoproduto">

        <div className='Detalhedoproduto_esquerdo'>

            <div className="Detalhedoproduto__card">
              <img src={dados.imagem} alt="" />
              <p>{dados.nome}</p>
            </div>
                  <div className="Detalhedoproduto__descricao">
                      <h2>Descrição</h2>
      
                      <label>{dados.descricao}</label>
                      <h4>{dados.linha}</h4>
                      
                  </div>
        </div>

                  
                              



                      
                        
                       

                 

                  
                 
        </div>





    // </div>
  )




}

export default DetalhedoProduto

