import styles from "./Banner.module.css"

function Banner({ img, color }) {

    return (
        <div 
            className={styles.capa} 
            styles={{ backgroundImage: `url("/img/${img}.png")` }}
        >
            <div className={styles.gradient} style={{ background: `${color}` }}>

            </div>
        </div>
    );
}

export default Banner;