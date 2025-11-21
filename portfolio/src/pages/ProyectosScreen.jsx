import { useState } from "react";
import { motion } from "framer-motion";
import ProyectoDetalle from "./ProyectoDetalle";

export default function ProyectosScreen({ onBackToMenu }) {
  const isMobile = window.innerWidth < 600;
  const [selected, setSelected] = useState(null);

  const proyectos = [
    {
      key: "bichtec",
      nombre: "BICHTEC - Tienda virtual de dispositivos electrónicos",
      imagen: "/Home.png",
      descripcion: (
        <>
          <p
            style={{
              marginBottom: 16,
              fontSize: isMobile ? 17 : 22,
              lineHeight: 1.7,
              color: "#e0e0e0",
              textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44",
              fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
              letterSpacing: "0.5px",
            }}
          >
            <b>BICHTEC</b> es una tienda online de productos tecnológicos
            desarrollada con <b>.NET 8</b> y <b>React</b>, pensada para un
            emprendimiento real y como proyecto final universitario en la
            materia Programación 4. Permite explorar y comprar dispositivos como
            celulares, smartwatches, cargadores, parlantes y más. Incluye un
            panel de administración completo para gestionar productos,
            categorías, marcas, pedidos y stock.
          </p>
          <ul
            style={{
              marginBottom: 16,
              textAlign: "left",
              fontSize: isMobile ? 16 : 19,
              color: "#c0eaff",
              lineHeight: 1.7,
              background: "rgba(0,224,255,0.06)",
              borderRadius: "8px",
              padding: isMobile ? "10px 12px" : "16px 28px",
              boxShadow: "0 0 8px #00e0ff33",
              textShadow: "1px 1px 2px #111, 0 0 4px #00e0ff22",
              fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
            }}
          >
            <li>
              <b>Backend:</b> C# (.NET 8), Clean Architecture (Domain /
              Application / Infrastructure / Presentation), autenticación JWT
              con roles, Entity Framework Core + SQL Server, repositorios
              genéricos, paginación, logging, DTOs, Swagger, tests con xUnit y
              CI/CD con GitHub Actions.
            </li>
            <li>
              <b>Frontend:</b> React, UI limpia y responsiva, Fetch API,
              componentes reutilizables, validaciones, filtros y paginación de
              productos.
            </li>
            <li>
              <b>Otros:</b> SQL Server para la base de datos, control de
              versiones con Git y GitHub.
            </li>
          </ul>
          <p
            style={{
              marginBottom: 16,
              fontSize: isMobile ? 17 : 22,
              lineHeight: 1.7,
              color: "#e0e0e0",
              textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44",
              fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
              letterSpacing: "0.5px",
            }}
          >
            <b>Objetivo:</b> Desarrollar una tienda virtual robusta y lista para
            producción, aplicando buenas prácticas y tecnologías modernas tanto
            en backend como frontend.
          </p>
        </>
      ),
      repo: "https://github.com/emi-pereyra17/BICTECH-Tienda-Virtual",
      imagenes: ["/Home.png", "/Productos.png", "Login.png","Carrito.png", "panel.png", "pedidos.png", "Aboutus.png", "prod.png", "users.png", "productosAdmin.png"],
    },
  ];

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100vw",
        background: "black",
        backgroundImage: "url('/fondoMenu.png')",
        backgroundSize: selected ? "contain" : "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        overflowY: "auto",
        overflowX: "hidden",
        display: "block",
        paddingTop: selected ? (isMobile ? "200px" : "400px") : undefined,
      }}
    >
      {/* Botón volver */}
      {!selected && (
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
      )}

      {/* Menú */}
      {!selected ? (
        <div
          style={{
            marginTop: "100px",
            background: "rgba(34,40,49,0.75)",
            borderRadius: "12px",
            padding: isMobile ? "18px 6px" : "32px 48px",
            maxWidth: "900px",
            margin: "120px auto 40px auto",
            color: "#fff",
            textAlign: "center",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "16px" : "32px",
              color: "#00e0ff",
              marginBottom: "20px",
              textShadow: "2px 2px 0 #222, 0 0 8px #fff",
            }}
          >
            Proyectos
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {proyectos.map((proy) => (
              <div
                key={proy.key}
                onClick={() => setSelected(proy)}
                style={{
                  cursor: "pointer",
                  background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
                  border: "2.5px solid #00e0ff",
                  padding: "16px",
                  borderRadius: "18px",
                  textAlign: "center",
                  boxShadow: "0 4px 24px #00e0ff55, 0 1.5px 8px #111a",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  outline: "none",
                  filter: "drop-shadow(0 0 6px #00e0ff44)",
                  transition: "transform 0.18s, box-shadow 0.18s, border-color 0.18s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow = "0 8px 32px #00e0ff99, 0 2px 12px #111b";
                  e.currentTarget.style.borderColor = "#ffd700";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 24px #00e0ff55, 0 1.5px 8px #111a";
                  e.currentTarget.style.borderColor = "#00e0ff";
                }}
              >
                <img
                  src={proy.imagen}
                  alt={proy.nombre}
                  style={{
                    width: isMobile ? "100px" : "150px",
                    height: isMobile ? "100px" : "150px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    border: "2.5px solid #ffd700",
                    boxShadow: "0 0 12px #ffd70055",
                    marginBottom: "10px",
                    background: "#181818",
                    transition: "box-shadow 0.18s, border-color 0.18s",
                  }}
                />

                <p
                  style={{
                    marginTop: "10px",
                    color: "#ffd700",
                    fontSize: isMobile ? "12px" : "16px",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    textShadow: "1px 1px 4px #111, 0 0 8px #00e0ff33",
                    fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
                  }}
                >
                  {proy.nombre}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ProyectoDetalle
          proyecto={selected}
          onVolver={() => setSelected(null)}
        />
      )}
    </div>
  );
}