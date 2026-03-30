import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

export default function SobreMiScreen({ onBackToMenu }) {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100%",
        minHeight: "100dvh",
        height: "100%",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
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
          backgroundImage: "url('/fondoSobreMi.png')",
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
            "linear-gradient(180deg, rgba(31,41,55,0.58) 0%, rgba(17,24,39,0.64) 100%)",
          borderRadius: "18px",
          padding: isMobile ? "20px 14px" : "30px 30px",
          maxWidth: isMobile ? "calc(100vw - 24px)" : "980px",
          width: "100%",
          color: "#fff",
          boxShadow: "0 14px 30px rgba(0,0,0,0.32), 0 0 0 1px rgba(255,255,255,0.1)",
          textAlign: "center",
          boxSizing: "border-box",
          border: "1px solid rgba(0,224,255,0.32)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "20px" : "32px",
            color: "#00e0ff",
            textShadow: "2px 2px 0 #222, 0 0 8px #fff",
            marginBottom: "10px",
            userSelect: "none",
          }}
        >
          Sobre Mí
        </h1>
        <p
          style={{
            fontFamily: "'Segoe UI', 'Inter', sans-serif",
            fontSize: isMobile ? "13px" : "17px",
            marginBottom: "18px",
            lineHeight: 1.65,
            userSelect: "none",
            textAlign: "left",
            color: "#e8f2ff",
          }}
        >
          ¡Hola! Soy Técnico Universitario en Programación graduado en la
          Universidad Tecnológica Nacional (Rosario). Mi enfoque principal es el
          desarrollo Full Stack, pero lo que realmente me motiva es la integración
          de IA para resolver problemas reales.
          <br />
          <br />
          Me muevo cómodo entre el desarrollo tradicional y las nuevas herramientas
          de automatización. Mi stack combina .NET (C#), Python (FastAPI) y
          React/Next.js, junto con implementación de modelos LLM y uso de n8n para
          construir flujos automatizados.
          <br />
          <br />
          En datos trabajo con SQL Server, MySQL y análisis con Pandas /
          Scikit-learn. Últimamente participé en proyectos de pasantías en
          Argentina y España, desde sistemas de inteligencia de mercado con
          predicción de precios hasta agentes de voz para gestión de turnos en
          inglés.
          <br />
          <br />
          Hablo inglés (B2), por lo que puedo comunicarme con equipos
          internacionales sin problema. Creo en el aprendizaje asistido por IA y
          en la adaptabilidad como claves para resolver desafíos complejos, hoy y a
          futuro.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
            gap: isMobile ? "12px" : "16px",
            marginTop: "14px",
          }}
        >
          {[
            {
              title: "Backend & Frontend",
              text: ".NET (C#), Python (FastAPI), React y Next.js",
            },
            {
              title: "IA & Automatización",
              text: "LLMs aplicados y orquestación de flujos con n8n",
            },
            {
              title: "Datos",
              text: "SQL Server, MySQL, Pandas y Scikit-learn",
            },
            {
              title: "Metodología",
              text: "Enfoque end-to-end, iterativo y orientado a impacto real",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(15, 23, 42, 0.62)",
                border: "1px solid rgba(0,224,255,0.2)",
                borderRadius: "12px",
                padding: isMobile ? "12px" : "14px 16px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  margin: "0 0 6px",
                  color: "#ffd700",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: isMobile ? "9px" : "10px",
                  letterSpacing: "0.6px",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#dbeafe",
                  fontFamily: "'Segoe UI', 'Inter', sans-serif",
                  fontSize: isMobile ? "12px" : "14px",
                  lineHeight: 1.45,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "16px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          {[
            "C#",
            ".NET",
            "Python",
            "FastAPI",
            "React",
            "Next.js",
            "n8n",
            "LLMs",
            "SQL Server",
            "MySQL",
            "Pandas",
            "Scikit-learn",
            "Docker",
            "RabbitMQ",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                padding: "6px 10px",
                borderRadius: "999px",
                border: "1px solid rgba(0,224,255,0.35)",
                background: "rgba(0,224,255,0.08)",
                fontSize: isMobile ? "10px" : "11px",
                color: "#c7f1ff",
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
