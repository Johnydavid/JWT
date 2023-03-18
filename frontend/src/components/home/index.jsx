import styles from "./styles.modules.css";

const Home = () =>{

    const handleLogout = () =>{
        localStorage.removeItem("token");
        window.location.reload();
    }
    return(
        <div className = {styles.main_container}>
            <nav className = {styles.navbar}>
                <h1> GUVI Store</h1>
                <button className = {styles.white_btn} onClick = {handleLogout}> Logout </button>
            </nav>

        </div>
    )
}

export default Home;
