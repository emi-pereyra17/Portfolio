import { useEffect } from "react";
import { motion } from "framer-motion";

export default function StartScreen({ onStart }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        onStart();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onStart]);

  // Estilos base
  const baseStyles = {
    h1: {
      fontFamily: "'Press Start 2P', cursive",
      fontSize: "38px",
      color: "#ffffff",
      background: "rgba(34, 40, 49, 0.85)",
      padding: "12px 32px",
      borderRadius: "12px",
      textShadow: "2px 2px 0 #00e0ff, 0 0 8px #222",
      marginBottom: "18px",
      textAlign: "center",
      maxWidth: "90vw",
      wordBreak: "break-word",
    },
    h2: {
      fontFamily: "'Press Start 2P', cursive",
      fontSize: "18px",
      color: "#00e0ff",
      textShadow: "1px 1px 0 #222, 0 0 6px #fff",
      marginBottom: "60px",
      textAlign: "center",
      maxWidth: "90vw",
      wordBreak: "break-word",
    },
    button: {
      fontFamily: "'Press Start 2P', cursive",
      fontSize: "16px",
      padding: "10px 22px",
      color: "#ffffff",
      background: "#222831",
      border: "2px solid #00e0ff",
      borderRadius: "0",
      boxShadow: "0 0 0 4px #222, 0 0 8px #00e0ff",
      cursor: "pointer",
      textShadow: "2px 2px 0 #00e0ff, 0 0 6px #fff",
      marginBottom: "8px",
      maxWidth: "90vw",
      wordBreak: "break-word",
    },
    p: {
      fontFamily: "'Press Start 2P', cursive",
      fontSize: "12px",
      color: "#ffffff",
      marginTop: "18px",
      textShadow: "1px 1px 0 #00e0ff",
      maxWidth: "90vw",
      wordBreak: "break-word",
    },
  };

  // Media query para celulares
  const isMobile = window.innerWidth < 600;
  if (isMobile) {
    baseStyles.h1.fontSize = "22px";
    baseStyles.h1.padding = "8px 10px";
    baseStyles.h2.fontSize = "13px";
    baseStyles.h2.marginBottom = "32px";
    baseStyles.button.fontSize = "12px";
    baseStyles.button.padding = "8px 10px";
    baseStyles.p.fontSize = "9px";
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fondo estático */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/fondoStart.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
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
          userSelect: "none",
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
      {/* Primera nube */}
      <motion.img
        src="/cloud1.png"
        alt="Nubes"
        style={{
          position: "absolute",
          top: "12%",
          width: isMobile ? "40px" : "70px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.85,
          filter: "drop-shadow(0 0 8px #fff)",
          userSelect: "none",
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
      {/* Segunda nube */}
      <motion.img
        src="/cloud2.png"
        alt="Nubes"
        style={{
          position: "absolute",
          top: "18%",
          width: isMobile ? "30px" : "50px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.7,
          filter: "drop-shadow(0 0 8px #fff)",
          userSelect: "none",
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
      {/* Tercera nube */}
      <motion.img
        src="/cloud3.png"
        alt="Nubes"
        style={{
          position: "absolute",
          top: "8%",
          width: isMobile ? "25px" : "40px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.6,
          filter: "drop-shadow(0 0 8px #fff)",
          userSelect: "none",
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
      {/* Cuarta nube */}
      <motion.img
        src="/cloud1.png"
        alt="Nubes"
        style={{
          position: "absolute",
          top: "26%",
          width: isMobile ? "22px" : "35px",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0.5,
          filter: "drop-shadow(0 0 8px #fff)",
          userSelect: "none",
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
      <h1 style={{ ...baseStyles.h1, zIndex: 2, userSelect: "none", }}>Emiliano Pereyra</h1>
      <h2 style={{ ...baseStyles.h2, zIndex: 2, userSelect: "none", }}>Desarrollador FullStack</h2>
      <motion.button
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        onClick={onStart}
        style={{ ...baseStyles.button, zIndex: 2 }}
      >
        PRESS START
      </motion.button>
      <p style={{ ...baseStyles.p, zIndex: 2, userSelect: "none", }}>(Presiona Enter o haz click)</p>
    </div>
  );
}
