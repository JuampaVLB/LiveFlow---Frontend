// Modules
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
// Components
import Modal from "./Modal";
import PerfilModal from "./PerfilModal";
// Css
import styles from "../modules/Header.module.css";
// Sources
import { authApi } from "../api/auth.js";
import perfil from "../assets/perfil.jpg";
import responsive from "../assets/menu.png";
import axios, { formToJSON } from "axios";

function Header() {
  const logged = true;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [estadoModal, CambiarEstadoModal] = useState(false);
  const [estadoModal2, CambiarEstadoModal2] = useState(false);
  const [perfilmodal, CambiarPerfilModal] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    authApi
      .post("login", {
        username,
        password,
      })
      .then((result) => {
        //localStorage.setItem("token", result.data.token);
        //window.location = "home";
        alert("te logeaste correctamente");
      })
      .catch((err) => {
        let obj = JSON.parse(err.request.response);
        Swal.fire({
          title: "Error",
          text: obj.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    authApi
      .post("register", {
        username,
        password,
        email,
        tel,
      })
      .then((result) => {
        //localStorage.setItem("token", result.data.token);
        //window.location = "home";
        alert("te registraste correctamente");
      })
      .catch((err) => {
        let obj = JSON.parse(err.request.response);
        console.log(obj.message);
        Swal.fire({
          title: "Error",
          text: obj.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <>
      <header className={styles.header}>
        <section className={styles.logo}>
          <p>LiveFlow</p>
        </section>
        <section className={styles.buscador}>
          <input placeholder="   Buscar a tu flowtuber favorito" />
        </section>
        <nav className={styles.nav}>
          <ul>
            {logged ? (
              <Link className={styles.link} to="/">
                <button
                  className={styles.boton}
                  onClick={() => CambiarEstadoModal2(!estadoModal2)}
                >
                  Registro
                </button>
              </Link>
            ) : (
              <Link className={styles.link} to="/">
                <button
                  className={styles.boton}
                  onClick={() => CambiarEstadoModal(!estadoModal)}
                >
                  Login
                </button>
              </Link>
            )}
            <Link className={styles.link} to="/directo">
              Start Streaming
            </Link>
          </ul>
          <Modal estado={estadoModal} cambiarEstado={CambiarEstadoModal}>
            <FormularioModal onSubmit={handleLogin}>
              <p>Inicia Sesion</p>
              <input
                placeholder=" Username..."
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                placeholder=" Password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              <button>Sign In</button>
            </FormularioModal>
          </Modal>

          <Modal estado={estadoModal2} cambiarEstado={CambiarEstadoModal2}>
            <FormularioModal onSubmit={handleRegister}>
              <p>Register</p>
              <input
                type="text"
                placeholder=" Username..."
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <input
                type="password"
                placeholder=" Password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <input
                type="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="tel"
                placeholder="Tel..."
                onChange={(e) => setTel(e.target.value)}
                value={tel}
              />
              <button> Sign Up </button>
            </FormularioModal>
          </Modal>

          <img
            onClick={() => CambiarPerfilModal(!perfilmodal)}
            className={styles.foto}
            src={perfil}
          />

          <PerfilModal estado={perfilmodal} cambiarEstado={CambiarPerfilModal}>
            <FomrPerfilModal>hola</FomrPerfilModal>
          </PerfilModal>
        </nav>
        <nav className={styles.nav_responsive}>
          <img src={responsive} />
        </nav>
      </header>
    </>
  );
}

export default Header;

const FormularioModal = styled.form` 
width:90%;
min-height:100%;
background: none;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; 
gap:2rem;

  input{
    width:90%;
    height:15%;
  } button{
    width:90%;
    height:15%;
    background:#00aae4;
    border-style:none;
    color:white;
  }

`;
 
const FomrPerfilModal = styled.div` 
width:90%;
height: calc(100vh - 8rem);

`;
