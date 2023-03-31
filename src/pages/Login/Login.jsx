import React, { useState } from 'react';
import logo from "../../assets/DncDetalhe.svg";
import { Link } from 'react-router-dom';
import './index.scss';


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
      <section className="login">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <form className="login__form" onSubmit={handleSubmit}>
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
      </section>
    </div>
  );
};
export default Login;