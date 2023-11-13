// src/App.js
import React, { useState } from 'react';
import './App.css';




const filmes = [
  {  id: 1,
     titulo: 'JOHN WICK 4: BABA YAGA', categoria: 'Ação', imagem: 'https://universoreverso.com.br/wp-content/uploads/2023/03/john-wick-4-poster.jpg'},
  {id: 2,
     titulo: 'O Pacto (2023)',
     categoria: 'Ação', 
     imagem: 'https://cinecriticas.com.br/wp-content/uploads/2023/06/Cine1-12-scaled.jpg'},
   
    { id: 3, 
      titulo: 'Mistério em Paris', 
      categoria: 'comedia',
     imagem:"https://br.web.img2.acsta.net/c_310_420/pictures/23/04/03/16/27/2188262.jpg" },


     { id: 4, 
      titulo: 'Loucas em Apuros', 
      categoria: 'comedia',
     imagem:"https://br.web.img3.acsta.net/pictures/23/06/27/15/53/3241421.jpg" },


  { id: 5, titulo: 'Continência ao Amor',
    categoria: 'romance',
    imagem:"https://br.web.img3.acsta.net/pictures/22/08/09/21/09/3949781.jpg" },

    { id: 6, titulo: 'Como eu era antes de você',
    categoria: 'romance',
    imagem:"https://br.web.img2.acsta.net/pictures/16/02/03/19/11/303307.jpg" },

  { id: 7, 
    titulo: 'Besouro Azul', 
    categoria: 'ficcao',
    imagem: "https://gabriella-muniz.github.io/movie-on/imagens/besouro-azul.jpg"
   },


   { id: 8, 
    titulo: 'Pantera Negra', 
    categoria: 'ficcao',
    imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/17/12/07/16/09/2291532.jpg"
   }
  // Adicione mais filmes conforme necessário
];

function App() {
  const [filmesFiltrados, setFilmesFiltrados] = useState(filmes);

  const filtrarPorCategoria = (categoria) => {
    if (categoria === 'todos') {
      setFilmesFiltrados(filmes);
    } else {
      const filmesFiltrados = filmes.filter((filme) => filme.categoria === categoria);
      setFilmesFiltrados(filmesFiltrados)
      ;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie <br></br> On</h1>
        <div id="botoes-categorias">
          <button onClick={() => filtrarPorCategoria('todos')}>Todos</button>
          <button onClick={() => filtrarPorCategoria('Ação')}>Ação</button>
          <button onClick={() => filtrarPorCategoria('comedia')}>Comédia</button>
          <button onClick={() => filtrarPorCategoria('romance')}>Romance</button>
          <button onClick={() => filtrarPorCategoria('ficcao')}>Ficção Científica</button>
        </div>
      </header>
      <section id="lista-filmes">
        {filmesFiltrados.map((filme) => (
          <div key={filme.id} className="filme-card">
            <img className='img'  src={filme.imagem} alt={filme.titulo} />
            <h3>{filme.titulo}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;


