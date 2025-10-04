import { motion } from "framer-motion";

export default function SobreMiScreen({ onBackToMenu }) {
  const isMobile = window.innerWidth < 600;

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
          filter: "blur(1.8px)",
        }}
      />
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
      <div
        style={{
          position: "relative",
          zIndex: 3,
          background: "rgba(34, 40, 49, 0.70)",
          borderRadius: "8px",
          padding: isMobile ? "18px 6px" : "32px 48px",
          maxWidth: isMobile ? "98vw" : "1050px",
          width: "100%",
          color: "#fff",
          boxShadow: "0 0 16px #222",
          textAlign: "center",
          boxSizing: "border-box",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "16px" : "32px",
            color: "#00e0ff",
            textShadow: "2px 2px 0 #222, 0 0 8px #fff",
            marginBottom: "12px",
            userSelect: "none",
          }}
        >
          Sobre Mí
        </h1>
        <p
          style={{
            fontFamily: "'Avenir', 'Helvetica', 'Arial', sans-serif",
            fontSize: isMobile ? "10px" : "18px",
            marginBottom: "18px",
            lineHeight: 1.5,
            userSelect: "none",
          }}
        >
          🎓 Soy estudiante de la Tecnicatura en Programación en la Universidad
          Tecnológica Nacional de Rosario, actualmente en mi último
          cuatrimestre. A lo largo de mi formación adquirí una sólida base en
          desarrollo de software, lo que me permite desenvolverme en distintos
          entornos y adaptarme rápidamente a nuevos desafíos como Desarrollador
          FullStack con orientación en Backend.
          <br style={{ userSelect: "none" }}></br>
          🚀 Me apasiona la tecnología y el aprendizaje constante. Disfruto
          enfrentar problemas complejos y transformarlos en soluciones
          prácticas, manteniendo siempre el foco en la calidad y en la mejora
          continua.
          <br style={{ userSelect: "none" }}></br>
          🤝 Tengo experiencia trabajando en equipos de desarrollo, colaborando
          con metodologías ágiles y comunicándome de manera efectiva para
          alcanzar objetivos en conjunto.
          <br style={{ userSelect: "none" }}></br>
          🌎 Además, cuento con un nivel intermedio de inglés, lo que me permite
          mantener conversaciones, comprender documentación técnica y acceder a
          recursos de aprendizaje internacionales.
        </p>
        <h2
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "12px" : "22px",
            color: "#ffd700",
            textShadow: "1px 1px 0 #222, 0 0 6px #fff",
            marginBottom: "10px",
            userSelect: "none",
          }}
        >
          Tecnologías que uso (Principales):
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: isMobile ? "8px" : "16px",
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "8px" : "16px",
            color: "#fff",
          }}
        >
          <li>
            <i
              className="devicon-csharp-plain colored"
              title="C#"
              style={{
                fontSize: isMobile ? "12px" : "66px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                userSelect: "none",
              }}
            ></i>
          </li>
          <li>
            <i
              className="devicon-dotnetcore-plain colored"
              title=".NET"
              style={{
                fontSize: isMobile ? "12px" : "66px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                userSelect: "none",
              }}
            ></i>
          </li>
          <li>
            <i
              className="devicon-azuresqldatabase-plain colored"
              title="SQL"
              style={{
                fontSize: isMobile ? "12px" : "66px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                userSelect: "none",
              }}
            ></i>
          </li>
          <li>
            <i
              className="devicon-react-original colored"
              title="React"
              style={{
                fontSize: isMobile ? "12px" : "66px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                userSelect: "none",
              }}
            ></i>
          </li>
        </ul>
        <h4
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "9px" : "16px",
            color: "#00e0ff",
            textShadow: "1px 1px 0 #222, 0 0 4px #fff",
            marginBottom: "8px",
            marginTop: "16px",
            fontWeight: "normal",
            letterSpacing: "1px",
            userSelect: "none",
          }}
        >
          Tecnologías secundarias:
        </h4>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: isMobile ? "4px" : "12px",
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "6px" : "13px",
            color: "#b0b0b0",
          }}
        >
          <li>
            <i
              className="devicon-html5-plain"
              title="HTML5"
              style={{
                fontSize: isMobile ? "8px" : "36px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                opacity: 0.7,
                userSelect: "none",
              }}
            ></i>
          </li>
          <li>
            <i
              className="devicon-css3-plain"
              title="CSS3"
              style={{
                fontSize: isMobile ? "8px" : "36px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                opacity: 0.7,
                userSelect: "none",
              }}
            ></i>
          </li>
          <li>
            <i
              className="devicon-javascript-plain"
              title="JavaScript"
              style={{
                fontSize: isMobile ? "8px" : "36px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                opacity: 0.7,
                userSelect: "none",
              }}
            ></i>
          </li>
          <li>
            <i
              className="devicon-python-plain"
              title="Python"
              style={{
                fontSize: isMobile ? "8px" : "36px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                opacity: 0.7,
                userSelect: "none",
              }}
            ></i>
          </li>
          <li>
            <i
              className="devicon-java-plain"
              title="Java"
              style={{
                fontSize: isMobile ? "8px" : "36px",
                verticalAlign: "middle",
                color: "inherit",
                textShadow: "none",
                cursor: "pointer",
                opacity: 0.7,
                userSelect: "none",
              }}
            ></i>
          </li>
        </ul>       
      </div>
    </div>
  );
}
