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
        <div className='Detalhedoproduto_direito'>

                      <div className="Detalhedoproduto_direito_nome">
                          <h2>{dados.nome}</h2>
                          <h1>{dados.linha}</h1>
                          

             
                      </div>
                      <div className="Detalhedoproduto_direito_preco">
                                <p>{dados.preco}</p>  
                      </div>                
                   
                      <div className='Detalhedoproduto_direito_cor'>                 
                        
                        Cor:{" "}
                                  {dados.cor.length === 1? dados.cor.map((cor, index) => (<span key={index}>{cor}</span>))
                                    : dados.cor.map((cor, index) => index + 1 === dados.cor.length ? (                                    
                                    <span key={index}>{cor}</span>) : ( <span key={index}>{cor}, </span>  )  )} 

                      </div>
                                  <div className="Detalhedoproduto__cubocor" > 

                                  { dados.cor.map((cor) => (  <div style={{   
                                    width:"40px", height:"35px", borderRadius:"10px", 
                                    backgroundColor: cor,  border: "none " , }}>  </div>  ))   } 

                                  </div> 

                  
                                  <button className='Detalhedoproduto_direito_button'>
                        <img src="../carrinhoDir.svg" alt="" width="20px" />
                        <Link to={`/carrinho/${dados.id}`}> Adicionar ao Carrinho</Link>
                        
                        </button>



                      
                        
                       

                 

                  
                 
        </div>



    

     </div>
  )




}

export default DetalhedoProduto

