import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import "./index.scss";


export const Carrinho = ({ dados }) => {
  const { carrinhoId } = useParams();

  const carrinho = dados.find((carrinho) => carrinho.id == carrinhoId);

  console.log(carrinho);

  return (
    <div className="carrinho">
      {/* inicio da parte do modal */}

      <div className="carrinho_ext"id="id01" >
        <Nav />
        <div className="left">
          <img src={carrinho.imagem} alt="" />
        </div>

        <div className="right">
          <h2>Meu Carrinho</h2>
          <h1>{carrinho.nome}</h1>

          <p>
            {" "}
            <b> {carrinho.preco} </b>
          </p>
          <p>cor: {carrinho.cor}</p>

          <div className="Detalhedoproduto__cubocor">
            {carrinho.cor.map((cor) => (
              <div
                style={{
                  width: "40px",
                  height: "35px",
                  borderRadius: "10px",
                  backgroundColor: cor,
                  border: "none ",
                }}
              >
                {" "}
              </div>
            ))}
          </div>

          <button>
            <Link to={`/home/`}> Continuar Comprando</Link>
          </button>

          <button>
            <Link to={`/pay/${carrinho.id}`}> Finalizar Compra</Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
