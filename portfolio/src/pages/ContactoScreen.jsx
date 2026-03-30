import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function ContactoScreen({ onBackToMenu }) {
  const isMobile = useIsMobile();
  const formRef = useRef();
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      await emailjs.sendForm(
        "service_y7u5aaf", // Tu Service ID
        "template_n02i32r", // Tu Template ID
        formRef.current,
        "ARPqUYluLOnBKKQY9" // Tu Public Key
      );
      setEnviado(true);
    } catch (error) {
      alert("Error al enviar: " + error.text);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100%",
        minHeight: "100dvh",
        height: "100%",
        position: "relative",
        overflow: "auto",
        background: "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "68px 12px 28px" : "90px 24px 36px",
        boxSizing: "border-box",
      }}
    >
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
          filter: "blur(2px)",
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background:
            "linear-gradient(180deg, rgba(17,24,39,0.56) 0%, rgba(17,24,39,0.8) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
        animate={{ opacity: [0.72, 0.82, 0.72] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="/cloud3.png"
        alt="Nube"
        style={{
          position: "absolute",
          top: "5%",
          width: isMobile ? "20px" : "34px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.6,
          filter: "drop-shadow(0 0 8px #fff)",
        }}
        initial={{ left: "-30%" }}
        animate={{ left: ["-30%", "90%"] }}
        transition={{
          duration: 95,
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
          width: isMobile ? "30px" : "52px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.85,
          filter: "drop-shadow(0 0 8px #fff)",
        }}
        initial={{ left: "-15%" }}
        animate={{ left: ["-15%", "105%"] }}
        transition={{
          duration: 70,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      <motion.button
        onClick={onBackToMenu}
        style={{
          position: "fixed",
          top: `max(${isMobile ? "10px" : "24px"}, env(safe-area-inset-top))`,
          left: `max(${isMobile ? "10px" : "32px"}, env(safe-area-inset-left))`,
          background: "#222831",
          color: "#00e0ff",
          border: "2px solid #00e0ff",
          borderRadius: "10px",
          fontFamily: "'Press Start 2P', cursive",
          fontSize: "8px",
          padding: isMobile ? "6px 10px" : "8px 16px",
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

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 3,
          background:
            "linear-gradient(180deg, rgba(31,41,55,0.6) 0%, rgba(17,24,39,0.66) 100%)",
          borderRadius: "18px",
          padding: isMobile ? "20px 14px" : "30px 30px",
          maxWidth: isMobile ? "calc(100vw - 24px)" : "760px",
          width: "100%",
          color: "#fff",
          boxShadow: "0 18px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)",
          textAlign: "left",
          boxSizing: "border-box",
          fontFamily: "'Segoe UI', 'Inter', sans-serif",
          border: "1px solid rgba(0,224,255,0.25)",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "22px" : "30px",
            color: "#00e0ff",
            textShadow: "2px 2px 0 #222, 0 0 8px #fff",
            marginBottom: "8px",
            userSelect: "none",
            fontFamily: "'Press Start 2P', cursive",
            textAlign: "center",
          }}
        >
          Contacto
        </h1>
        <p
          style={{
            margin: "0 0 20px",
            fontSize: isMobile ? "13px" : "15px",
            color: "#d1ecff",
            lineHeight: 1.55,
            textAlign: "center",
          }}
        >
          ¿Tenés una propuesta o idea para construir juntos? Enviame un mensaje y
          te respondo a la brevedad.
        </p>
        {enviado ? (
          <p
            style={{
              color: "#00e0ff",
              fontFamily: "'Press Start 2P', cursive",
              textAlign: "center",
              fontSize: isMobile ? "11px" : "13px",
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.4)",
              borderRadius: "10px",
              padding: "14px 12px",
            }}
          >
            ¡Mensaje enviado! Te responderé pronto.
          </p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit}>
            <div style={{ marginBottom: "16px", textAlign: "left" }}>
              <label
                htmlFor="nombre"
                style={{
                  fontSize: isMobile ? "12px" : "14px",
                  color: "#ffd700",
                  marginBottom: "6px",
                  display: "block",
                  fontWeight: 600,
                }}
              >
                Nombre:
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                style={{
                  width: "100%",
                  padding: isMobile ? "10px 12px" : "12px 14px",
                  boxSizing: "border-box",
                  fontFamily: "'Segoe UI', 'Inter', sans-serif",
                  fontSize: isMobile ? "13px" : "15px",
                  border: "1px solid rgba(0,224,255,0.45)",
                  borderRadius: "10px",
                  background: "rgba(17,24,39,0.78)",
                  color: "#fff",
                  outline: "none",
                }}
                autoComplete="off"
                required
              />
            </div>
            <div style={{ marginBottom: "16px", textAlign: "left" }}>
              <label
                htmlFor="email"
                style={{
                  fontSize: isMobile ? "12px" : "14px",
                  color: "#ffd700",
                  marginBottom: "6px",
                  display: "block",
                  fontWeight: 600,
                }}
              >
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                style={{
                  width: "100%",
                  padding: isMobile ? "10px 12px" : "12px 14px",
                  boxSizing: "border-box",
                  fontFamily: "'Segoe UI', 'Inter', sans-serif",
                  fontSize: isMobile ? "13px" : "15px",
                  border: "1px solid rgba(0,224,255,0.45)",
                  borderRadius: "10px",
                  background: "rgba(17,24,39,0.78)",
                  color: "#fff",
                  outline: "none",
                }}
                autoComplete="off"
                required
              />
            </div>
            <div style={{ marginBottom: "18px", textAlign: "left" }}>
              <label
                htmlFor="mensaje"
                style={{
                  fontSize: isMobile ? "12px" : "14px",
                  color: "#ffd700",
                  marginBottom: "6px",
                  display: "block",
                  fontWeight: 600,
                }}
              >
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={isMobile ? 3 : 5}
                style={{
                  width: "100%",
                  padding: isMobile ? "10px 12px" : "12px 14px",
                  boxSizing: "border-box",
                  fontFamily: "'Segoe UI', 'Inter', sans-serif",
                  fontSize: isMobile ? "13px" : "15px",
                  border: "1px solid rgba(0,224,255,0.45)",
                  borderRadius: "10px",
                  background: "rgba(17,24,39,0.78)",
                  color: "#fff",
                  outline: "none",
                  resize: "vertical",
                  minHeight: isMobile ? "110px" : "140px",
                }}
                required
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                disabled={enviando}
                style={{
                  background: enviando ? "#6b7280" : "#00e0ff",
                  color: "#111827",
                  border: "2px solid #ffd700",
                  borderRadius: "10px",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: isMobile ? "10px" : "12px",
                  padding: isMobile ? "10px 14px" : "12px 22px",
                  cursor: enviando ? "not-allowed" : "pointer",
                  fontWeight: "bold",
                  letterSpacing: "1.5px",
                  boxShadow: "0 0 8px #00e0ff",
                  transition: "background 0.2s, color 0.2s",
                  minWidth: isMobile ? "180px" : "220px",
                }}
              >
                {enviando ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
