import styles from "./Header.module.css"
import Promotion from "../Promotion/Promotion.jsx";
import lupa from "../../assets/lupa.svg"
import wish from "../../assets/wish.svg"
import carrinho from "../../assets/carrinho.svg"

export default function Header(){
    return (
       <header>
        <Promotion/>
        <div className={styles.cabecalho}>
            <h1>Exclusive</h1>
            <nav>
                <ul className={styles.lista}>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign up</li>
                </ul>
            </nav>
            <div className={styles.divona}>
                <div className={styles.container}>
                    <input type="text" name="" id=""  className={styles.input}/>
                    <img src={lupa} alt="" />
                </div>
                <img src={wish} alt="" />
                <img src={carrinho} alt="" />
            </div>



        </div>
 </header>
    );
}