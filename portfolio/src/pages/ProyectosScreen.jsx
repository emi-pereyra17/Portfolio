import { useEffect, useRef, useState } from "react";
import ProyectoDetalle from "./ProyectoDetalle";
import { useIsMobile } from "../hooks/useIsMobile";

const NARROW_MAX_PX = 960;

export default function ProyectosScreen({ onBackToMenu }) {
  const isMobile = useIsMobile();
  const [isNarrowViewport, setIsNarrowViewport] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${NARROW_MAX_PX}px)`).matches
      : false
  );
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${NARROW_MAX_PX}px)`);
    const handler = (e) => setIsNarrowViewport(e.matches);
    setIsNarrowViewport(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [selected]);

  const proyectos = [
    {
      key: "bichtec",
      nombre: "BICHTEC - Tienda virtual de dispositivos electrónicos",
      imagen: "/tienda.jpg",
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
      imagenes: [
        "/tienda.jpg",
        "/Home.png",
        "/Productos.png",
        "/Login.png",
        "/Carrito.png",
        "/panel.png",
        "/pedidos.png",
        "/Aboutus.png",
        "/prod.png",
        "/users.png",
        "/productosAdmin.png",
      ],
    },
    {
      key: "auditor",
      nombre: "Auditor Fiscal IA - Auditoría contable con IA",
      imagen: "/contabilidad-basica.jpg",
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
      imagen: "/linkedin.jpg",
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
      imagen: "/hotel.avif",
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
    {
      key: "sistema-servicios",
      nombre: "Sistema de control de asistencia en tiempo real",
      imagen: "/cuidados.avif",
      descripcion: (
        <>
          <p
            style={{
              marginBottom: 16,
              fontSize: isMobile ? 17 : 22,
              lineHeight: 1.7,
              color: "#ffd700",
              textShadow: "1px 1px 2px #111, 0 0 6px #00e0ff44",
              fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
              letterSpacing: "0.5px",
            }}
          >
            <b>Plataforma de gestión y seguimiento de servicios de cuidado</b>
          </p>
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
            Desarrollé una solución integral para gestionar turnos de cuidadores,
            registrar asistencias y supervisar la prestación de servicios en
            múltiples sucursales.
          </p>
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
            El sistema integra una API desarrollada con <b>FastAPI</b>,
            automatizaciones con <b>n8n</b>, una base de datos y una aplicación
            móvil para que los cuidadores puedan gestionar sus turnos y reportar
            el estado de cada servicio.
          </p>
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
            Entre sus funcionalidades se incluyen el inicio de sesión, la
            visualización de turnos, el registro de estados como “en camino”, la
            validación de proximidad mediante geolocalización y la generación de
            alertas ante determinadas situaciones, como la salida de la zona del
            domicilio o la falta de respuesta.
          </p>
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
            Al finalizar cada turno, el cuidador puede completar un informe sobre
            el estado general, la higiene y otros aspectos relevantes del
            servicio. Estos registros se centralizan en un panel web que permite
            consultar la información y descargar reportes en PDF.
          </p>
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
            La solución también incorpora funciones de inteligencia artificial
            para corregir errores de escritura en los comentarios de los
            informes.
          </p>
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
            El proyecto reemplazó parte de un flujo de confirmaciones por
            WhatsApp que dejó de ser viable, trasladando el proceso a una
            aplicación móvil propia.
          </p>
          <p
            style={{
              marginBottom: 0,
              fontSize: isMobile ? 16 : 19,
              lineHeight: 1.7,
              color: "#c0eaff",
              textShadow: "1px 1px 2px #111, 0 0 4px #00e0ff22",
              fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
              letterSpacing: "0.5px",
              background: "rgba(0,224,255,0.06)",
              borderRadius: "8px",
              padding: isMobile ? "10px 12px" : "16px 28px",
              boxShadow: "0 0 8px #00e0ff33",
            }}
          >
            <b>Tecnologías:</b> Python, FastAPI, n8n, Supabase, PostgreSQL, Row
            Level Security (RLS), Edge Functions, inteligencia artificial,
            geolocalización y desarrollo móvil multiplataforma.
          </p>
        </>
      ),
      repo: null,
      imagenes: ["/ControlIngresosVideo.mp4"],
    },
    {
      key: "plataforma-datos-ia",
      nombre: "Plataforma interna de datos y asistentes de IA",
      imagen: "/plataforma-datos-ia.png",
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
            Desarrollé una plataforma interna que centraliza información
            operativa proveniente de múltiples fuentes y permite consultarla
            mediante asistentes de inteligencia artificial especializados por
            área.
          </p>
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
            La solución utiliza <b>n8n</b> para automatizar la extracción,
            transformación y limpieza de datos, que luego se almacenan en{" "}
            <b>PostgreSQL</b>. Los asistentes de IA interpretan preguntas en
            lenguaje natural y utilizan herramientas de consulta SQL para
            recuperar información relevante de la base de datos.
          </p>
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
            También implementé una solución de{" "}
            <b>RAG (Retrieval-Augmented Generation)</b> para consultar
            documentación interna, permitiendo combinar respuestas basadas en
            datos estructurados con búsquedas sobre documentos.
          </p>
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
            La plataforma se encuentra en uso en distintas áreas de la empresa
            y está diseñada para facilitar el acceso a la información, reducir
            tareas manuales y agilizar la toma de decisiones.
          </p>
          <p
            style={{
              marginBottom: 0,
              fontSize: isMobile ? 16 : 19,
              lineHeight: 1.7,
              color: "#c0eaff",
              textShadow: "1px 1px 2px #111, 0 0 4px #00e0ff22",
              fontFamily: "'Segoe UI', 'Press Start 2P', cursive",
              letterSpacing: "0.5px",
              background: "rgba(0,224,255,0.06)",
              borderRadius: "8px",
              padding: isMobile ? "10px 12px" : "16px 28px",
              boxShadow: "0 0 8px #00e0ff33",
            }}
          >
            <b>Tecnologías:</b> Python, PostgreSQL, n8n, agentes de IA,
            generación de SQL, RAG, AnythingLLM y APIs.
          </p>
        </>
      ),
      repo: null,
      imagenes: ["/ChatOperativoVideo.mp4"],
    },
  ];

  const proyectosOrdenados = [...proyectos].reverse();

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100dvh",
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        paddingLeft: isNarrowViewport
          ? "max(12px, env(safe-area-inset-left, 0px))"
          : undefined,
        paddingRight: isNarrowViewport
          ? "max(12px, env(safe-area-inset-right, 0px))"
          : undefined,
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
        <button
          type="button"
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
        >
          ← MENU
        </button>
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
            margin: `${isMobile ? 84 : 120}px auto 40px`,
            color: "#fff",
            textAlign: "center",
            fontFamily: "'Press Start 2P', cursive",
            boxSizing: "border-box",
            border: "1px solid rgba(0,224,255,0.35)",
            boxShadow: "0 12px 36px rgba(0,0,0,0.45), 0 0 20px rgba(0,224,255,0.12)",
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ffd700";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,224,255,0.75)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
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
                  width: "100%",
                  maxWidth: "100%",
                  margin: "0 auto",
                  transform: "translateY(0)",
                  transition:
                    "border-color 0.14s ease-out, transform 0.14s ease-out",
                }}
              >
                {/\.(mp4|webm)$/i.test(proy.imagen) ? (
                  <video
                    src={proy.imagen}
                    muted
                    loop
                    autoPlay
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
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
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