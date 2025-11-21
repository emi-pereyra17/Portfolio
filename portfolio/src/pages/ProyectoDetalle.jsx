import React, { useState } from "react";

export default function ProyectoDetalle({ proyecto, onVolver }) {
  const isMobile = window.innerWidth < 600;
  const [imgIndex, setImgIndex] = useState(0);

  const handlePrev = () => {
    setImgIndex((prev) =>
      prev === 0 ? proyecto.imagenes.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setImgIndex((prev) =>
      prev === proyecto.imagenes.length - 1 ? 0 : prev + 1
    );
  };

  // Mucho más espacio para que todo quede bien abajo del botón fijo
  const contentMarginTop = isMobile ? 450 : 550;

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100vw",
        position: "relative",
        background: "rgba(34, 40, 49, 0.95)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      {/* Botón volver fuera del contenido */}
      <button
        onClick={onVolver}
        style={{
          position: "fixed",
          top: isMobile ? "10px" : "24px",
          left: isMobile ? "10px" : "32px",
          background: "#222831",
          color: "#00e0ff",
          border: "2px solid #00e0ff",
          borderRadius: "0",
          fontFamily: "'Press Start 2P', cursive",
          fontSize: isMobile ? "8px" : "10px",
          padding: isMobile ? "4px 10px" : "8px 16px",
          cursor: "pointer",
          fontWeight: "bold",
          letterSpacing: "2px",
          userSelect: "none",
          zIndex: 20,
          transition: "background 0.2s, color 0.2s, border-color 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#00e0ff";
          e.currentTarget.style.color = "#222831";
          e.currentTarget.style.borderColor = "#ffd700";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#222831";
          e.currentTarget.style.color = "#00e0ff";
          e.currentTarget.style.borderColor = "#00e0ff";
        }}
      >
        ← VOLVER
      </button>

      {/* Contenido principal con MUCHO mayor margen superior */}
      <div
        style={{
          marginTop: contentMarginTop,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "18px" : "32px",
            color: "#ffd700",
            textShadow: "1px 1px 0 #222, 0 0 6px #fff",
            marginBottom: isMobile ? "12px" : "24px",
            userSelect: "none",
            textAlign: "center",
            width: "100%",
          }}
        >
          {proyecto.nombre}
        </h2>
        {/* Carrusel grande */}
        <div
          style={{
            marginBottom: isMobile ? "18px" : "32px",
            marginTop: isMobile ? "18px" : "32px",
            textAlign: "center",
            position: "relative",
            width: isMobile ? "100vw" : "700px",
            maxWidth: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {proyecto.imagenes.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                style={{
                  position: "absolute",
                  left: isMobile ? "8px" : "-48px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#222831",
                  color: "#00e0ff",
                  border: "2px solid #00e0ff",
                  borderRadius: "0",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: isMobile ? "18px" : "32px",
                  padding: isMobile ? "2px 8px" : "8px 18px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  zIndex: 5,
                }}
              >
                {"<"}
              </button>
              <button
                onClick={handleNext}
                style={{
                  position: "absolute",
                  right: isMobile ? "8px" : "-48px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#222831",
                  color: "#00e0ff",
                  border: "2px solid #00e0ff",
                  borderRadius: "0",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: isMobile ? "18px" : "32px",
                  padding: isMobile ? "2px 8px" : "8px 18px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  zIndex: 5,
                }}
              >
                {">"}
              </button>
            </>
          )}
          <img
            src={proyecto.imagenes[imgIndex]}
            alt={proyecto.nombre + " imagen " + (imgIndex + 1)}
            style={{
              width: isMobile ? "98vw" : "650px",      // ← tamaño anterior
              height: isMobile ? "180px" : "380px",    // ← tamaño anterior
              objectFit: "contain",                    // muestra la imagen entera
              borderRadius: "12px",
              border: "2px solid #ffd700",
              background: "#222831",
              margin: "0 32px",
              display: "inline-block",
              boxShadow: "0 0 16px #222",
              maxWidth: "98vw",
            }}
          />
          {proyecto.imagenes.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: isMobile ? "-18px" : "-28px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "'Press Start 2P', cursive",
                fontSize: isMobile ? "10px" : "16px",
                color: "#ffd700",
                background: "rgba(34,40,49,0.85)",
                padding: "2px 12px",
                borderRadius: "8px",
                border: "1px solid #ffd700",
                boxShadow: "0 0 6px #222",
              }}
            >
              {imgIndex + 1} / {proyecto.imagenes.length}
            </div>
          )}
        </div>
        {/* Descripción y demás info */}
        <div
          style={{
            fontSize: isMobile ? "13px" : "18px",
            marginBottom: "18px",
            color: "#fff",
            maxWidth: isMobile ? "98vw" : "700px",
            width: "100%",
            textAlign: "left",
            background: "none",
          }}
        >
          {proyecto.descripcion}
        </div>
        {proyecto.repo && (
          <a
            href={proyecto.repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#00e0ff",
              color: "#222831",
              border: "2px solid #ffd700",
              borderRadius: "0",
              fontFamily: "'Press Start 2P', cursive",
              fontSize: isMobile ? "13px" : "17px",
              padding: isMobile ? "8px 16px" : "12px 32px",
              cursor: "pointer",
              fontWeight: "bold",
              letterSpacing: "2px",
              boxShadow: "0 0 8px #00e0ff",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              marginTop: "8px",
              marginBottom: isMobile ? "24px" : "40px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#ffd700";
              e.currentTarget.style.color = "#222831";
              e.currentTarget.style.borderColor = "#00e0ff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#00e0ff";
              e.currentTarget.style.color = "#222831";
              e.currentTarget.style.borderColor = "#ffd700";
            }}
          >
            VER REPOSITORIO
          </a>
        )}
      </div>
    </div>
  );
}
