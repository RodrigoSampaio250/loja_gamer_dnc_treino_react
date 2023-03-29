import React, { useState } from 'react';
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
const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
      <section className='login'>
        <nav>
          <img src={logo} alt="" />
        </nav>
        <form className="login__form" onSubmit={handleSubmit}>
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

      </section>
    </div>
  )
}

export default Login
