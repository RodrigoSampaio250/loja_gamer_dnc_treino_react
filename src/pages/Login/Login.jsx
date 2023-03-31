import React, { useState } from 'react';
<<<<<<< HEAD
import logo from "../../assets/DncDetalhe.svg";
import { Link } from 'react-router-dom';
import './index.scss';


=======
import { BrowserRouter, Link, Route } from 'react-router-dom';
import logo from '../../assets/DncDetalhe.svg';
import './index.scss';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo(a) à página inicial!</h1>
      <Link to="/login">Voltar para a página de login</Link>
    </div>
  );
};
>>>>>>> 350e1b9793a51bacdedbe87ab17e79fe76c6ecd2
const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

=======
    
>>>>>>> 350e1b9793a51bacdedbe87ab17e79fe76c6ecd2
    if (cpf.trim() === '') {
      setCpfError('Por favor, insira seu CPF.');
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      setCpfError('Por favor, insira um CPF válido.');
    } else {
      setCpfError('');
    }

    if (password.trim() === '') {
      setPasswordError('Por favor, insira sua senha.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div>
      <section className="login">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <form className="login__form" onSubmit={handleSubmit}>
<<<<<<< HEAD
          <h1>Acesse com seu login ou cadastre-se!</h1>
          <h2>Você pode entrar com o seu CPF</h2>
          <div className="login__input-wrapper">
            <label htmlFor="cpf">Digite seu CPF:</label>
            <input
              type="text"
              placeholder="___.___.___-__"
              id="cpf"
              className="login__input-name"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            {cpfError && <p className="login__error">{cpfError}</p>}
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="login__error">{passwordError}</p>}
          </div>
          <button type="submit">Entrar</button>
        </form>
=======
              <h1>Acesse com seu login ou cadastre-se!</h1>
              <h2>você pode entrar com o seu CPF</h2>
              <div className="login__input-wrapper">
                  <label htmlFor="name">Digite seu CPF:</label>
                  <input type="text" placeholder="Nome completo" id="name" className="login__input-name" />
                  <label htmlFor="password">Senha:</label>
                  <input type="password" id="password" placeholder="********" />
              </div>
              <button type="submit">
                <Link to={"/home"}>Entrar</Link>
              </button>
          </form>

>>>>>>> 350e1b9793a51bacdedbe87ab17e79fe76c6ecd2
      </section>
    </div>
  );
};
export default Login;