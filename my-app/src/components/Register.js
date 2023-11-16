import React, { useState } from 'react';
import './App.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    lembrarSenha: '',
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui vai a lógica do formulário
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>MOVIE ON</h1>
      <div className="box">
        <h2>Crie sua conta</h2>
        <div>
          <div className="form-group">
            <label htmlFor="nome"></label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sobrenome"></label>
            <input
              type="text"
              className="form-control"
              id="sobrenome"
              placeholder="Sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="telefone"></label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            placeholder="(__) _____-____"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha"></label>
          <input
            type="password"
            className="form-control"
            id="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha"></label>
          <input
            type="password"
            className="form-control"
            id="confirmarSenha"
            placeholder="Confirmar a senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="lembrarSenha"
            checked={formData.lembrarSenha}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="lembrarSenha">
            Lembrar a senha
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
        <div className="conta-click">
          Já possui conta? <a href="#">Clique aqui</a>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;