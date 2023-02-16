import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "animate.css";
import styles from "../modules/Home.module.css";
import wifi from "../assets/no-wifi.png";
import Message from "./Message";

const socket = io.connect("http://localhost:4000");

function Footer() {
  const [message, setMessage] = useState("");
  const [saveMessage, setSaveMessage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message === "" || message.trim().length <= 0) {
      return alert("no escribiste nada gil");
    }

    socket.emit("message", message);

    const newMessage = {
      body: message,
      from: "Me",
    };

    setSaveMessage([...saveMessage, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    const receiveMessage = message => {
      setSaveMessage([...saveMessage, message]);
    };

    socket.on("message", receiveMessage);

    return () => {
      console.log(saveMessage);
      socket.off("message", receiveMessage);
    };
  }, [saveMessage]);

  return (
    <>
      <section className={styles.home}>
        <section className={styles.video_principal}>
          <section className={styles.directo}>
            <img src={wifi} alt="!Podrias ser tu¡" />
            <p>¿Podrias ser tu?</p>
          </section>
          <section className={styles.chat}>
            <ul className={styles.containerChat}>
            {saveMessage.map((message, index) => (
              <Message
                key={index}
                message={message.body}
                from={message.from}
              />
            ))}
            </ul>

            <form onSubmit={handleSubmit} className={styles.enviar}>
              <input
                type="text"
                placeholder="Chat..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button>Enviar</button>
            </form>
          </section>
        </section>
        <section className={styles.video_recomendaciones}>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
          <section className={styles.recomendacion}></section>
        </section>
      </section>
    </>
  );
}

export default Footer;
