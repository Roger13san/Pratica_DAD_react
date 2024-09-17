import styles from "./Produtos.module.css"

const Produtos = ({nome,preço,imagem, sacola}) =>{
    return (
        <div className={styles.Principal}>
            <div className={styles.container}>
                <img className={styles.banner} src={imagem}/>
            </div>
            <div className={styles.divzona}>
                <p className={styles.nome}><b>{nome}</b></p>
                <p className={styles.kg}>1Kg/preço</p>
                <p className={styles.preco}><b>{preço}</b></p>
                <img className={styles.bannerSacola} src={sacola}/>
            </div>
            
        </div>
    )
}


export default Produtos