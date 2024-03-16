import styles from "./Homepage.module.css"

const Homepage = () => {

    console.log("Homepage rendered")
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome To My Shop</h1>
        </div>
    );
}

export default Homepage;
