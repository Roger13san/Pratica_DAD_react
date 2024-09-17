import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Produtos from './components/Produtos/Produtos.jsx'
 
import styles from "./index.module.css"
import promo1 from "./assets/item1_promo.png"
import promo2 from "./assets/item2_promo.png"
import promo3 from "./assets/item3_promo.png"

import saudavel1 from "./assets/item1_saudavel.png"
import saudavel2 from "./assets/item2_saudavel.png"
import saudavel3 from "./assets/item3_saudavel.png"
import sacola from "./assets/sacola.svg"
import sacolaVerde from "./assets/sacolaverde.svg"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Cliente +</h1>
    <p className={styles.promo}>promo</p>
    <div className={styles.container}>
      <Produtos nome ="Item 1"  imagem={promo1} preço="R$ 000.000" sacola={sacola}/>
      <Produtos nome ="Item 2"  imagem={promo2} preço="R$ 000.000" sacola={sacola}/>
      <Produtos nome ="Item 3"  imagem={promo3} preço="R$ 000.000" sacola={sacola}/>
    </div>
    <h1>Outros</h1>
    <p className={styles.saudavel}>Saudavel</p>
    <div className={styles.container}>
      <Produtos nome ="Item 1"  imagem={saudavel1} preço="R$ 000.000" sacola={sacolaVerde}/>
      <Produtos nome ="Item 2"  imagem={saudavel2} preço="R$ 000.000" sacola={sacolaVerde}/>
      <Produtos nome ="Item 3"  imagem={saudavel3} preço="R$ 000.000" sacola={sacolaVerde}/>
    </div>

    
    
  </StrictMode>,
)
