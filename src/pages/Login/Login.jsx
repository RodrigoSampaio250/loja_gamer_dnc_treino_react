import React, { useState } from 'react';
import logo from "../../assets/DncDetalhe.svg";
import { Link } from 'react-router-dom';
import './index.scss';


const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let cpfValidSubmit = true;
    let passwordValidSubmit = true;


    if (cpf.trim() === '') {
      setCpfError('Por favor, insira seu CPF.');
      cpfValidSubmit= false;
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
      setCpfError('Por favor, insira um CPF válido.');
      cpfValidSubmit = false;
    } else {
      setCpfError('');
    }

    if (password.trim() === '') {
      setPasswordError('Por favor, insira sua senha.');
      passwordValidSubmit = false;
    } else {
      setPasswordError('');
    }

    if (cpfValidSubmit && passwordValidSubmit) {
      //Simulação de chamada para um API de autenticação
      setTimeout(() => {
        setIsConfirmed(true);
        console.log('Login realizado com sucesso!');
      }, 2000);
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
        {isConfirmed && (
          <p>Login realizado com sucesso!</p>
        )}
      </section>
    </div>
  );
};
export default Login;