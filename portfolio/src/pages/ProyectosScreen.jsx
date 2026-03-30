import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProyectoDetalle from "./ProyectoDetalle";
import { useIsMobile } from "../hooks/useIsMobile";

export default function ProyectosScreen({ onBackToMenu }) {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [selected]);

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
      imagenes: ["/Home.png", "/Productos.png", "/Login.png", "/Carrito.png", "/panel.png", "/pedidos.png", "/Aboutus.png", "/prod.png", "/users.png", "/productosAdmin.png"],
    },
    {
      key: "auditor",
      nombre: "Auditor Fiscal IA - Auditoría contable con IA",
      imagen: "/Auditor.mp4",
      descripcion: (
        <>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            💻 <b>Auditor Fiscal IA</b> es una aplicación de auditoría contable que permite subir facturas y tickets en imagen o PDF, extraer los datos con IA y gestionar el Libro IVA Compras. El flujo incluye validación manual comparando la imagen con los datos extraídos en una vista lado a lado.
          </p>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            🏗️ <b>Arquitectura:</b> Microservicios: API .NET y Worker Python independientes que se comunican por RabbitMQ. La API recibe facturas, las guarda en Supabase y publica eventos; el Worker consume mensajes, ejecuta el análisis con IA y actualiza la base de datos.
          </p>
          <ul style={{ marginBottom: 16, textAlign: "left", fontSize: isMobile ? 16 : 19, color: "#c0eaff", lineHeight: 1.7, background: "rgba(0,224,255,0.06)", borderRadius: "8px", padding: isMobile ? "10px 12px" : "16px 28px", boxShadow: "0 0 8px #00e0ff33", textShadow: "1px 1px 2px #111, 0 0 4px #00e0ff22", fontFamily: "'Segoe UI', 'Press Start 2P', cursive" }}>
            <li><b>Backend (C# .NET 9):</b> API REST con ASP.NET Core y OpenAPI, Supabase (Storage + PostgreSQL), RabbitMQ para procesamiento asíncrono.</li>
            <li><b>Worker (Python):</b> Consumidor RabbitMQ, Mistral AI (Pixtral para OCR y modelo de razonamiento), lógica para comprobantes argentinos (Factura A/B/C, CUIT, fechas).</li>
            <li><b>Frontend (Next.js 16 + TypeScript):</b> App Router, Tailwind, Shadcn, dashboard por categoría/proveedor, vista de auditoría y Libro IVA Compras con TanStack Table.</li>
            <li><b>Otros:</b> Supabase, RabbitMQ (CloudAMQP), Mistral AI, Git + GitHub.</li>
          </ul>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            🎯 <b>Objetivo:</b> Demostrar un flujo completo de auditoría contable con IA: desde la subida del comprobante hasta la extracción automática, la revisión humana y la utilidad para Libro IVA Compras, usando .NET, Python y Next.js.
          </p>
        </>
      ),
      repo: "https://lnkd.in/dAgsq3Sx",
      imagenes: ["/Auditor.mp4"],
    },
    {
      key: "linkmatch",
      nombre: "LinkMatch AI - Extensión Chrome para matching CV con ofertas",
      imagen: "/LinkMatch.mp4",
      descripcion: (
        <>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            💡 <b>LinkMatch AI</b> es una extensión de Chrome donde subes tu CV (PDF) y, en cada oferta de LinkedIn, un botón te da al instante: match %, skills que suman, skills a reforzar, tips de entrevista y un mensaje para el reclutador que puedes copiar. El PDF se procesa en tu navegador; a la IA solo llega el texto.
          </p>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            🏗️ <b>Arquitectura:</b> Extensión Chrome (Manifest V3) y API REST en Python. La extensión inyecta un botón en LinkedIn Jobs, abre el side panel y habla con el backend. El backend recibe CV y oferta en texto, llama al modelo de IA y devuelve JSON. El CV y el job se guardan en chrome.storage.local; la API no almacena datos personales.
          </p>
          <ul style={{ marginBottom: 16, textAlign: "left", fontSize: isMobile ? 16 : 19, color: "#c0eaff", lineHeight: 1.7, background: "rgba(0,224,255,0.06)", borderRadius: "8px", padding: isMobile ? "10px 12px" : "16px 28px", boxShadow: "0 0 8px #00e0ff33", textShadow: "1px 1px 2px #111, 0 0 4px #00e0ff22", fontFamily: "'Segoe UI', 'Press Start 2P', cursive" }}>
            <li><b>Extensión (Plasmo + React + TypeScript):</b> Side Panel con subida de CV, resultados y mensaje para reclutador; content script en linkedin.com/jobs; extracción de texto del PDF en el cliente con pdfjs-dist; Tailwind, lucide-react, tema claro/oscuro.</li>
            <li><b>Backend (FastAPI + Python):</b> /api/analyze (CV vs oferta) y /api/analyze/recruiter-message; soporte dual Google Gemini o Mistral; prompts en español; manejo de cuota (429).</li>
            <li><b>Otros:</b> Variables de entorno, CORS para desarrollo local.</li>
          </ul>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            🎯 <b>Objetivo:</b> Mostrar un flujo real de uso de IA en búsqueda de empleo: desde la subida del CV hasta el análisis por oferta, tips de entrevista y mensaje para el reclutador, con extensión Chrome (Plasmo, React, TypeScript) y API en Python (FastAPI + Gemini/Mistral).
          </p>
        </>
      ),
      repo: null,
      imagenes: ["/LinkMatch.mp4"],
    },
    {
      key: "hoteleria",
      nombre: "Sistema de Inteligencia de Precios y Ocupación Hotelera",
      imagen: "/proyectoHotelero.png",
      descripcion: (
        <>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            Les comparto un proyecto que desarrollé ya hace un tiempo durante una pasantía para una empresa en España. Fue un buen desafío crear una solución real para el sector hotelero en Salamanca, integrando datos en tiempo real y predicciones.
          </p>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            🏗️ <b>Arquitectura y Tecnologías</b>
          </p>
          <ul style={{ marginBottom: 16, textAlign: "left", fontSize: isMobile ? 16 : 19, color: "#c0eaff", lineHeight: 1.7, background: "rgba(0,224,255,0.06)", borderRadius: "8px", padding: isMobile ? "10px 12px" : "16px 28px", boxShadow: "0 0 8px #00e0ff33", textShadow: "1px 1px 2px #111, 0 0 4px #00e0ff22", fontFamily: "'Segoe UI', 'Press Start 2P', cursive" }}>
            <li><b>Frontend:</b> Interfaz dinámica en React (Vite) + Tailwind CSS, con visualizaciones en Recharts y componentes de Radix UI.</li>
            <li><b>Backend:</b> API REST construida con FastAPI (Python) para la lógica de negocio e integración.</li>
            <li><b>Base de Datos:</b> MySQL 8 para el almacenamiento de históricos, ocupación y configuraciones.</li>
            <li><b>Infraestructura:</b> Orquestación con Docker Compose y gestión segura de secretos vía .env.</li>
          </ul>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            ⚙️ <b>Funcionalidades Core</b>
          </p>
          <ul style={{ marginBottom: 16, textAlign: "left", fontSize: isMobile ? 16 : 19, color: "#c0eaff", lineHeight: 1.7, background: "rgba(0,224,255,0.06)", borderRadius: "8px", padding: isMobile ? "10px 12px" : "16px 28px", boxShadow: "0 0 8px #00e0ff33", textShadow: "1px 1px 2px #111, 0 0 4px #00e0ff22", fontFamily: "'Segoe UI', 'Press Start 2P', cursive" }}>
            <li><b>Ingesta Automática Programada 🕒:</b> Proceso en Python (get_prices.py) que obtiene precios automáticamente todos los días a la hora configurada, sincronizado vía NTP. Extrae datos de la API de Booking y ocupación del PMS (FNS).</li>
            <li><b>Panel Operativo 🖥️:</b> Visualización de precios "en vivo" con carga progresiva y vista tipo calendario para comparar la competencia de forma ágil.</li>
            <li><b>Predicción con IA 📈:</b> Forecasting con Facebook Prophet para estimar tendencias a 7 días, con limpieza de outliers (IQR) y fallback a regresión lineal.</li>
            <li><b>Gestión Centralizada 🔑:</b> Configuración desde la propia app para modificar claves de API y horarios del "job" diario sin tocar el código.</li>
          </ul>
          <p style={{ marginBottom: 16, fontSize: isMobile ? 17 : 22, lineHeight: 1.7, color: "#e0e0e0", textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", letterSpacing: "0.5px" }}>
            🎯 <b>Objetivo del Proyecto:</b> Demostrar un flujo End-to-End de ingeniería de datos: desde la ingesta programada hasta la entrega de insights predictivos para decisiones comerciales.
          </p>
          <p style={{ marginBottom: 0, fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: "#ffd700", textShadow: "1px 1px 2px #111, 0 0 4px #ffd70044", fontFamily: "'Segoe UI', 'Press Start 2P', cursive", fontStyle: "italic" }}>
            ⚠️ <b>Nota:</b> Por políticas de confidencialidad de la empresa durante la pasantía, el código fuente no puede ser compartido.
          </p>
        </>
      ),
      repo: null,
      imagenes: ["/BardoCompetencia.mp4"],
    },
  ];

  const proyectosOrdenados = [...proyectos].reverse();

  return (
    <div
      ref={containerRef}
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
      }}
    >
      {/* Botón volver */}
      {!selected && (
        <motion.button
          onClick={onBackToMenu}
          style={{
            position: "fixed",
            top: `max(${isMobile ? "10px" : "24px"}, env(safe-area-inset-top))`,
            left: `max(${isMobile ? "10px" : "32px"}, env(safe-area-inset-left))`,
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
            background: "linear-gradient(180deg, rgba(34,40,49,0.88) 0%, rgba(30,34,41,0.9) 100%)",
            borderRadius: "18px",
            padding: isMobile ? "18px 12px" : "34px 36px",
            maxWidth: "1040px",
            width: "100%",
            margin: isMobile ? "84px 12px 40px" : "120px auto 40px",
            color: "#fff",
            textAlign: "center",
            fontFamily: "'Press Start 2P', cursive",
            boxSizing: "border-box",
            border: "1px solid rgba(0,224,255,0.35)",
            boxShadow: "0 12px 36px rgba(0,0,0,0.45), 0 0 20px rgba(0,224,255,0.12)",
            backdropFilter: "blur(3px)",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "18px" : "34px",
              color: "#00e0ff",
              marginBottom: "14px",
              textShadow: "2px 2px 0 #222, 0 0 8px #fff",
              letterSpacing: "1px",
            }}
          >
            Proyectos
          </h1>
          <p
            style={{
              margin: "0 0 22px",
              color: "#c0eaff",
              fontFamily: "'Segoe UI', sans-serif",
              fontSize: isMobile ? "13px" : "16px",
              lineHeight: 1.5,
            }}
          >
            Seleccioná un proyecto para ver su detalle, stack y demo visual.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
              gap: isMobile ? "18px" : "22px",
              width: "100%",
            }}
          >
            {proyectosOrdenados.map((proy) => (
              <div
                key={proy.key}
                onClick={() => setSelected(proy)}
                style={{
                  cursor: "pointer",
                  background: "linear-gradient(145deg, #232526 0%, #3a3f46 100%)",
                  border: "2px solid rgba(0,224,255,0.75)",
                  padding: isMobile ? "14px 12px" : "16px",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 8px 26px rgba(0,224,255,0.18), 0 2px 10px rgba(0,0,0,0.5)",
                  color: "#fff",
                  position: "relative",
                  overflow: "hidden",
                  outline: "none",
                  filter: "drop-shadow(0 0 4px #00e0ff44)",
                  transition: "transform 0.18s, box-shadow 0.18s, border-color 0.18s",
                  width: "100%",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow = "0 8px 32px #00e0ff99, 0 2px 12px #111b";
                  e.currentTarget.style.borderColor = "#ffd700";
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    const playPromise = video.play();
                    if (playPromise && typeof playPromise.catch === "function") {
                      playPromise.catch(() => {});
                    }
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 24px #00e0ff55, 0 1.5px 8px #111a";
                  e.currentTarget.style.borderColor = "#00e0ff";
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                {/\.(mp4|webm)$/i.test(proy.imagen) ? (
                  <video
                    src={proy.imagen}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      height: isMobile ? "200px" : "190px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      border: "2.5px solid #ffd700",
                      boxShadow: "0 0 12px #ffd70055",
                      marginBottom: isMobile ? "14px" : "10px",
                      background: "#181818",
                      transition: "box-shadow 0.18s, border-color 0.18s",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      willChange: "transform",
                    }}
                  />
                ) : (
                  <img
                    src={proy.imagen}
                    alt={proy.nombre}
                    style={{
                      width: "100%",
                      maxWidth: "100%",
                      height: isMobile ? "200px" : "190px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      border: "2.5px solid #ffd700",
                      boxShadow: "0 0 12px #ffd70055",
                      marginBottom: isMobile ? "14px" : "10px",
                      background: "#181818",
                      transition: "box-shadow 0.18s, border-color 0.18s",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                )}

                <p
                  style={{
                    marginTop: isMobile ? "4px" : "10px",
                    color: "#ffd700",
                    fontSize: isMobile ? "13px" : "15px",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                    textShadow: "1px 1px 4px #111, 0 0 8px #00e0ff33",
                    fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
                    textAlign: "center",
                    lineHeight: 1.45,
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