import styles from "../modules/Header.module.css"
import { Link } from "react-router-dom"
import perfil from "../assets/perfil.png"
import responsive from "../assets/menu.png"

function Header() {
   const logged = false;
    return (
      <>
        <header className={styles.header}>
          <section className={styles.logo}>
          <p>LiveFlow</p> 
          </section>
          <section className={styles.buscador}>
            <input placeholder="   Buscar a tu flowtuber favorito"/>
          </section>
          <nav className={styles.nav}>
             <ul> 
             {logged ? (
                <Link className={styles.link} to="/">
                 Logout
                </Link>
              ) : (
                <Link className={styles.link} to="/">
                  login
                </Link>
              )}
              <Link className={styles.link} to="/directo">Start Streaming</Link>
             </ul>  
             <img className={styles.foto} src={perfil}/>
           </nav>
           <nav className={styles.nav_responsive}>
             <img src={responsive}/>
           </nav>
        </header>
      </>
    )
  }
  
  export default Header
  