import styles from "./Promotion.module.css"
function Promotion(){
    return (
        //<div className={styles.Header}>Header</div>
        <header>
            <div className={styles.promotion}>
                <p>Summer Sale For All Swin Suits And Free Express Delivery - OFF 50%!
                    <a href="" className={styles.shop}>
                        Shop Now
                    </a>
                </p>
                <select name="" id="" className={styles.dropdown}>
                    <option value="English" className={styles.opcao}>English</option>
                    <option value="Portuguese" className={styles.opcao}>Portuguese</option>
                </select>
            </div>
        </header>

    );
}
export default Promotion;