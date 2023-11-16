import React from 'react';
import "./App.css";

const LoginForm = () => {
  return (
    <div>
      <h1>MOVIE ON</h1>
      <form>
        <h2>Entrar</h2>
        <div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"></label>  
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="E-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"></label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              // className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Lembrar a senha
            </label>
          </div>
          <button type="submit">
            Entrar
          </button>
          <div>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <p>
            Novo por aqui? <a href="#">Assine agora</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
