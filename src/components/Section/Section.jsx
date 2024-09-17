import styles from "./Section.module.css"

const Section = ({title, subtitle, products}) =>{
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.rediv}></div>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}


export default Section