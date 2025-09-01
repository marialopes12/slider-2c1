import { useState } from 'react'
import './App.css'
import Carmy from './assets/anel2.png'
import Cjoa from './assets/coracao.png'
import Curs from './assets/401958-300-300.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Anel Pandora</h2>
              <p className="desc">Anel Coracao Vermelho Elevado.</p>
              <p className="preco">R$ 1.500,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Anel Pandora</h2>
              <p className="desc">Anel Riqueza Botanica Brilhante.</p>
              <p className="preco">R$ 1.700,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★ </span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Anel Pandora</h2>
              <p className="desc">Anel de Compromisso para Namoro e Noivado.</p>
              <p className="preco">R$ 2.500,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App
