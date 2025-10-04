import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function ContactoScreen({ onBackToMenu }) {
  const isMobile = window.innerWidth < 600;
  const formRef = useRef();
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y7u5aaf", // Tu Service ID
        "template_n02i32r", // Tu Template ID
        formRef.current,
        "ARPqUYluLOnBKKQY9" // Tu Public Key
      )
      .then(() => setEnviado(true))
      .catch((error) => alert("Error al enviar: " + error.text));
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#222831",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Fondo con imagen desenfocada */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/backgroundContact.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          filter: "blur(1.8px)",
        }}
      />
      {/* Capa blanca animada */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255,255,255,0.15)",
          zIndex: 1,
          pointerEvents: "none",
        }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      {/* Nubes animadas */}
      <motion.img
        src="/cloud3.png"
        alt="Nube"
        style={{
          position: "absolute",
          top: "5%",
          width: isMobile ? "22px" : "35px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.6,
          filter: "drop-shadow(0 0 8px #fff)",
        }}
        initial={{ left: "-30%" }}
        animate={{ left: ["-30%", "90%"] }}
        transition={{
          duration: 80,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <motion.img
        src="/cloud1.png"
        alt="Nube"
        style={{
          position: "absolute",
          top: "12%",
          width: isMobile ? "40px" : "70px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.85,
          filter: "drop-shadow(0 0 8px #fff)",
        }}
        initial={{ left: "-15%" }}
        animate={{ left: ["-15%", "105%"] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <motion.img
        src="/cloud2.png"
        alt="Nube"
        style={{
          position: "absolute",
          top: "18%",
          width: isMobile ? "30px" : "50px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.7,
          filter: "drop-shadow(0 0 8px #fff)",
        }}
        initial={{ left: "10%" }}
        animate={{ left: ["10%", "110%"] }}
        transition={{
          duration: 160,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <motion.img
        src="/cloud3.png"
        alt="Nube"
        style={{
          position: "absolute",
          top: "8%",
          width: isMobile ? "25px" : "40px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.6,
          filter: "drop-shadow(0 0 8px #fff)",
        }}
        initial={{ left: "50%" }}
        animate={{ left: ["50%", "120%"] }}
        transition={{
          duration: 70,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <motion.img
        src="/cloud1.png"
        alt="Nube"
        style={{
          position: "absolute",
          top: "26%",
          width: isMobile ? "22px" : "35px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.5,
          filter: "drop-shadow(0 0 8px #fff)",
        }}
        initial={{ left: "80%" }}
        animate={{ left: ["80%", "130%"] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      {/* Botón volver al menú */}
      <motion.button
        onClick={onBackToMenu}
        style={{
          position: "fixed",
          top: isMobile ? "10px" : "24px",
          left: isMobile ? "10px" : "32px",
          background: "#222831",
          color: "#00e0ff",
          border: "2px solid #00e0ff",
          borderRadius: "0",
          fontFamily: "'Press Start 2P', cursive",
          fontSize: isMobile ? "8px" : "8px",
          padding: isMobile ? "4px 10px" : "8px 16px",
          cursor: "pointer",
          zIndex: 20,
          fontWeight: "bold",
          letterSpacing: "2px",
          userSelect: "none",
        }}
        whileHover={{
          backgroundColor: "#00e0ff",
          color: "#222831",
          borderColor: "#ffd700",
        }}
      >
        ← MENU
      </motion.button>
      {/* Formulario */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          background: "rgba(34, 40, 49, 0.7)",
          borderRadius: "12px",
          padding: isMobile ? "18px 6px" : "32px 48px",
          maxWidth: isMobile ? "98vw" : "500px",
          width: "100%",
          color: "#fff",
          boxShadow: "0 0 16px #222",
          textAlign: "center",
          boxSizing: "border-box",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "16px" : "32px",
            color: "#00e0ff",
            textShadow: "2px 2px 0 #222, 0 0 8px #fff",
            marginBottom: "18px",
            userSelect: "none",
          }}
        >
          Contacto
        </h1>
        {enviado ? (
          <p
            style={{
              color: "#00e0ff",
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            ¡Mensaje enviado! Te responderé pronto.
          </p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit}>
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label
                htmlFor="nombre"
                style={{
                  fontSize: isMobile ? "10px" : "14px",
                  color: "#ffd700",
                  textShadow: "1px 1px 0 #222",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Nombre:
              </label>
              <input
                id="nombre"
                name="nombre" // <-- IMPORTANTE
                type="text"
                style={{
                  width: "100%",
                  padding: "8px",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: isMobile ? "10px" : "14px",
                  border: "2px solid #00e0ff",
                  borderRadius: "0",
                  background: "#393e46",
                  color: "#fff",
                  outline: "none",
                  boxShadow: "0 0 4px #00e0ff",
                }}
                autoComplete="off"
                required
              />
            </div>
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label
                htmlFor="email"
                style={{
                  fontSize: isMobile ? "10px" : "14px",
                  color: "#ffd700",
                  textShadow: "1px 1px 0 #222",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Email:
              </label>
              <input
                id="email"
                name="email" // <-- IMPORTANTE
                type="email"
                style={{
                  width: "100%",
                  padding: "8px",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: isMobile ? "10px" : "14px",
                  border: "2px solid #00e0ff",
                  borderRadius: "0",
                  background: "#393e46",
                  color: "#fff",
                  outline: "none",
                  boxShadow: "0 0 4px #00e0ff",
                }}
                autoComplete="off"
                required
              />
            </div>
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label
                htmlFor="mensaje"
                style={{
                  fontSize: isMobile ? "10px" : "14px",
                  color: "#ffd700",
                  textShadow: "1px 1px 0 #222",
                  marginBottom: "6px",
                  display: "block",
                }}
              >
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje" // <-- IMPORTANTE
                rows={isMobile ? 3 : 5}
                style={{
                  width: "100%",
                  padding: "8px",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: isMobile ? "10px" : "14px",
                  border: "2px solid #00e0ff",
                  borderRadius: "0",
                  background: "#393e46",
                  color: "#fff",
                  outline: "none",
                  boxShadow: "0 0 4px #00e0ff",
                  resize: "vertical",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                background: "#00e0ff",
                color: "#222831",
                border: "2px solid #ffd700",
                borderRadius: "0",
                fontFamily: "'Press Start 2P', cursive",
                fontSize: isMobile ? "10px" : "14px",
                padding: isMobile ? "6px 12px" : "10px 24px",
                cursor: "pointer",
                fontWeight: "bold",
                letterSpacing: "2px",
                boxShadow: "0 0 8px #00e0ff",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              ENVIAR
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
