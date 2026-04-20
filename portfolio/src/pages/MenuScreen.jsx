import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const PIXEL_BURST_COLORS = ["#00e0ff", "#ffd700", "#ffffff", "#b8ffc8"];
const CONFIRM_ACTION_MS = 420;

/** Archivo en /public — nombre real del PDF (sin tilde en "Curriculum"). */
const CV_PUBLIC_URL = encodeURI(
  `${import.meta.env.BASE_URL}Curriculum Vitae (Emiliano Pereyra).pdf`
);

function playSfx(url, volume = 0.55) {
  const a = new Audio(url);
  a.volume = volume;
  a.play().catch(() => {});
}

function PixelBurst({ isMobile }) {
  const pixels = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const spread = isMobile ? 44 : 72;
        return {
          dx: (Math.random() - 0.5) * spread,
          dy: -10 - Math.random() * 28,
          size: 3 + (i % 3),
          color: PIXEL_BURST_COLORS[i % PIXEL_BURST_COLORS.length],
          delay: Math.random() * 0.06,
          rot: (Math.random() - 0.5) * 90,
        };
      }),
    [isMobile]
  );

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 0,
        height: 0,
        pointerEvents: "none",
        zIndex: 6,
        overflow: "visible",
      }}
    >
      {pixels.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            x: p.dx,
            y: p.dy,
            opacity: 0,
            scale: 0.2,
            rotate: p.rot,
          }}
          transition={{
            duration: 0.42,
            delay: p.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            background: p.color,
            imageRendering: "pixelated",
            boxShadow: `0 0 ${Math.max(2, p.size)}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

function ConfirmPixelExplosion({ isMobile }) {
  const pixels = useMemo(() => {
    const count = isMobile ? 22 : 32;
    return Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
      const dist =
        (isMobile ? 72 : 110) + Math.random() * (isMobile ? 70 : 130);
      return {
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        size: 4 + Math.floor(Math.random() * 5),
        color: PIXEL_BURST_COLORS[i % PIXEL_BURST_COLORS.length],
        delay: Math.random() * 0.05,
        rot: (Math.random() - 0.5) * 180,
      };
    });
  }, [isMobile]);

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        top: "42%",
        width: 0,
        height: 0,
        pointerEvents: "none",
        zIndex: 20,
        overflow: "visible",
      }}
    >
      {pixels.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
          animate={{
            x: p.dx,
            y: p.dy,
            opacity: 0,
            scale: 0.15,
            rotate: p.rot,
          }}
          transition={{
            duration: 0.58,
            delay: p.delay,
            ease: [0.15, 0.85, 0.35, 1],
          }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: p.size,
            height: p.size,
            marginLeft: -p.size / 2,
            marginTop: -p.size / 2,
            background: p.color,
            imageRendering: "pixelated",
            boxShadow: `0 0 ${Math.max(3, p.size)}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

export default function MenuScreen({ onSelect }) {
  const options = [
    { label: "Sobre mí", key: "sobreMi" },
    { label: "Proyectos", key: "proyectos" },
    { label: "Contacto", key: "contacto" },
    { label: "Ver Currículum", key: "cv" },
  ];

  const isMobile = useIsMobile();
  const [selected, setSelected] = useState(0);
  const [burstKey, setBurstKey] = useState(0);
  const [confirmBurstKey, setConfirmBurstKey] = useState(0);
  const [confirmPunchKey, setConfirmPunchKey] = useState(null);
  const prevSelectedRef = useRef(-1);
  const isConfirmingRef = useRef(false);
  const confirmTimerRef = useRef(null);

  useEffect(() => {
    if (prevSelectedRef.current !== selected) {
      prevSelectedRef.current = selected;
      setBurstKey((k) => k + 1);
    }
  }, [selected]);

  const runMenuAction = useCallback(
    (key) => {
      if (isConfirmingRef.current) return;
      isConfirmingRef.current = true;
      playSfx("/seleccionar.mp3");
      setConfirmPunchKey(key);
      setConfirmBurstKey((k) => k + 1);

      if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
      confirmTimerRef.current = setTimeout(() => {
        confirmTimerRef.current = null;
        isConfirmingRef.current = false;
        setConfirmPunchKey(null);
        if (key === "cv") {
          window.open(CV_PUBLIC_URL, "_blank", "noopener,noreferrer");
        } else {
          onSelect(key);
        }
      }, CONFIRM_ACTION_MS);
    },
    [onSelect]
  );

  useEffect(() => {
    return () => {
      if (confirmTimerRef.current) clearTimeout(confirmTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        playSfx("/mover.mp3", 0.45);
        setSelected((prev) => (prev + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        playSfx("/mover.mp3", 0.45);
        setSelected((prev) => (prev - 1 + options.length) % options.length);
      } else if (e.key === "Enter") {
        runMenuAction(options[selected].key);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, options, runMenuAction]);

  const handleOptionSelect = (key) => {
    runMenuAction(key);
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
      {confirmBurstKey > 0 ? (
        <>
          <motion.div
            key={`confirm-flash-${confirmBurstKey}`}
            initial={{ opacity: 0.28 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              background:
                "radial-gradient(circle at 50% 40%, rgba(0,224,255,0.45), rgba(255,215,0,0.12) 35%, transparent 58%)",
              pointerEvents: "none",
              zIndex: 19,
            }}
            aria-hidden
          />
          <ConfirmPixelExplosion key={confirmBurstKey} isMobile={isMobile} />
        </>
      ) : null}
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
          position: "relative",
          zIndex: 4,
        }}
      >
        {options.map((opt, idx) => (
          <motion.div
            key={opt.key}
            animate={
              confirmPunchKey === opt.key
                ? { scale: [1, 1.22, 1.05, 1], y: [0, -10, -2, 0] }
                : idx === selected
                  ? { scale: [1, 1.07, 1], y: [0, -5, 0] }
                  : { scale: 1, y: 0 }
            }
            transition={
              confirmPunchKey === opt.key
                ? {
                    duration: 0.48,
                    times: [0, 0.28, 0.65, 1],
                    ease: [0.34, 1.45, 0.64, 1],
                  }
                : idx === selected
                  ? {
                      duration: 0.38,
                      times: [0, 0.42, 1],
                      ease: [0.34, 1.2, 0.64, 1],
                    }
                  : { duration: 0.14, ease: "easeOut" }
            }
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
            {idx === selected ? (
              <PixelBurst key={burstKey} isMobile={isMobile} />
            ) : null}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}