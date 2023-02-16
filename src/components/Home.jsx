import styles from "../modules/Home.module.css"
import wifi from "../assets/no-wifi.png"
import 'animate.css';


function Footer() {
    return (
      <>
      <section className={styles.home}>
         <section className={styles.video_principal}>
           <section className={styles.directo}>
             <img src={wifi} alt="!Podrias ser tu¡"/>
             <p>¿Podrias ser tu?</p>
           </section>
           <section className={styles.chat}>
            <section className={styles.mensajes}>
 
            </section>
           <section className={styles.enviar}>
           <input placeholder="Chat..."/>
            <button>Enviar</button>
           </section>
           </section>
         </section>
         <section className={styles.video_recomendaciones}>
         <section className={styles.recomendacion}>
             
             </section>
             <section className={styles.recomendacion}>
              
             </section>     
             <section className={styles.recomendacion}>
              
             </section>     
             <section className={styles.recomendacion}>
              
             </section>     
             <section className={styles.recomendacion}>
              
             </section>     
             <section className={styles.recomendacion}>
              
             </section>      
         </section>
      </section>
      </>
    )
  }
  
  export default Footer
  