import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

export default function MenuScreen({ onSelect }) {
  const options = [
    { label: "Sobre mí", key: "sobreMi" },
    { label: "Proyectos", key: "proyectos" },
    { label: "Contacto", key: "contacto" },
    { label: "Descargar CV", key: "cv" },
  ];

  const isMobile = useIsMobile();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setSelected((prev) => (prev + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        setSelected((prev) => (prev - 1 + options.length) % options.length);
      } else if (e.key === "Enter") {
        if (options[selected].key === "cv") {
          window.open("/Curriculum Vitae (Emiliano Pereyra).pdf", "_blank");
        } else {
          onSelect(options[selected].key);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, options, onSelect]);

  // Soporte para tap/click en móvil y desktop
  const handleOptionSelect = (key) => {
    if (key === "cv") {
      window.open("/Currículum Vitae (Emiliano Pereyra).pdf", "_blank");
    } else {
      onSelect(key);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100%",
        background: "black",
        backgroundImage: "url('/FondoExtra.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        gap: "30px",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
      {/* Fin nubes animadas */}
      <div
        style={{
          marginBottom: isMobile ? "14px" : "18px",
          fontFamily: "'Press Start 2P', cursive",
          fontSize: isMobile ? "11px" : "15px",
          color: "#ffd700",
          textShadow: "2px 2px 0 #222, 0 0 8px #00e0ff",
          letterSpacing: "2px",
          textAlign: "center",
          fontWeight: "bold",
          background: "rgba(34,40,49,0.7)",
          padding: isMobile ? "4px 8px" : "7px 16px",
          borderRadius: "8px",
          boxShadow: "0 0 6px #222",
          userSelect: "none",
        }}
      >
        Usa las flechas del teclado para navegar y Enter para seleccionar
        <br />
        <span style={{ fontSize: isMobile ? "10px" : "13px", color: "#fff" }}>
          (O toca una opción en celular)
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? "10px" : "16px",
          marginTop: isMobile ? "30px" : "60px",
        }}
      >
        {options.map((opt, idx) => (
          <div
            key={opt.key}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: isMobile ? "12px" : "16px",
              padding: isMobile ? "6px 12px" : "8px 18px",
              color: idx === selected ? "#ffd700" : "#fff",
              background: idx === selected ? "#222831" : "#161616",
              border: "2px solid #00e0ff",
              borderRadius: "0",
              boxShadow:
                idx === selected
                  ? "0 0 0 2px #ffd700, 0 0 4px #fff"
                  : "0 0 0 2px #222, 0 0 4px #00e0ff",
              textShadow:
                idx === selected
                  ? "2px 2px 0 #ffd700, 0 0 4px #fff"
                  : "2px 2px 0 #00e0ff, 0 0 2px #fff",
              marginBottom: "0",
              display: "flex",
              alignItems: "center",
              minWidth: isMobile ? "110px" : "160px",
              justifyContent: "flex-start",
              position: "relative",
              outline: "none",
              imageRendering: "pixelated",
              cursor: "pointer", 
              userSelect: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            tabIndex={0}
            onClick={() => handleOptionSelect(opt.key)}
            onTouchStart={() => handleOptionSelect(opt.key)}
          >
            <span
              style={{
                display: "inline-block",
                width: isMobile ? "18px" : "24px",
                textAlign: "right",
                marginRight: "8px",
                fontSize: isMobile ? "14px" : "18px",
                color: idx === selected ? "#ffd700" : "transparent",
                transition: "color 0.2s",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              {idx === selected ? "►" : ""}
            </span>
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
}