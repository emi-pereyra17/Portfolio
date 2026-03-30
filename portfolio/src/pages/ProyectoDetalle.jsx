import React, { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function ProyectoDetalle({ proyecto, onVolver }) {
  const isMobile = useIsMobile();
  const [imgIndex, setImgIndex] = useState(0);
  const detailRef = useRef(null);

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

  const contentPaddingTop = isMobile ? 74 : 104;

  useEffect(() => {
    setImgIndex(0);
    if (detailRef.current) {
      detailRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [proyecto?.key]);

  return (
    <div
      ref={detailRef}
      style={{
        minHeight: "100dvh",
        height: "100%",
        width: "100%",
        maxWidth: "100vw",
        position: "relative",
        background: "radial-gradient(circle at 50% 0%, rgba(0,224,255,0.2), rgba(34, 40, 49, 0.96) 36%, rgba(26, 30, 36, 0.98) 100%)",
        boxShadow: "inset 0 0 120px rgba(0,224,255,0.08), inset 0 0 80px rgba(255,215,0,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflowY: "auto",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Botón volver fuera del contenido */}
      <button
        onClick={onVolver}
        style={{
          position: "fixed",
          top: `max(${isMobile ? "10px" : "24px"}, env(safe-area-inset-top))`,
          left: `max(${isMobile ? "10px" : "32px"}, env(safe-area-inset-left))`,
          background: "#222831",
          color: "#00e0ff",
          border: "2px solid #00e0ff",
          borderRadius: "10px",
          fontFamily: "'Press Start 2P', cursive",
          fontSize: isMobile ? "8px" : "10px",
          padding: isMobile ? "4px 10px" : "8px 16px",
          cursor: "pointer",
          fontWeight: "bold",
          letterSpacing: "2px",
          userSelect: "none",
          zIndex: 20,
          transition: "background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s",
          boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "#00e0ff";
          e.currentTarget.style.color = "#222831";
          e.currentTarget.style.borderColor = "#ffd700";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "#222831";
          e.currentTarget.style.color = "#00e0ff";
          e.currentTarget.style.borderColor = "#00e0ff";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        ← VOLVER
      </button>

      <div
        style={{
          paddingTop: contentPaddingTop,
          width: "100%",
          maxWidth: "100%",
          paddingLeft: isMobile ? "8px" : "16px",
          paddingRight: isMobile ? "8px" : "16px",
          paddingBottom: isMobile ? 32 : 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: isMobile ? "100%" : "1020px",
            background: "linear-gradient(180deg, rgba(52, 58, 67, 0.96) 0%, rgba(40, 46, 54, 0.97) 100%)",
            borderRadius: "20px",
            padding: isMobile ? "16px 12px 22px" : "28px 28px 34px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.48), 0 0 0 1px rgba(255,255,255,0.08)",
            border: "1px solid rgba(0,224,255,0.26)",
            boxSizing: "border-box",
          }}
        >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: isMobile ? "6px 8px" : "6px 12px",
            borderRadius: "999px",
            background: "rgba(0,224,255,0.14)",
            border: "1px solid rgba(0,224,255,0.35)",
            color: "#c0f6ff",
            fontSize: isMobile ? "10px" : "11px",
            letterSpacing: "0.8px",
            fontFamily: "'Segoe UI', sans-serif",
            margin: "0 auto 14px",
          }}
        >
          DEMO Y DETALLE TÉCNICO
        </div>
        <h2
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: isMobile ? "15px" : "24px",
            color: "#ffd700",
            textShadow: "1px 1px 0 #222, 0 0 6px #fff",
            marginBottom: isMobile ? "12px" : "18px",
            userSelect: "none",
            textAlign: "center",
            width: "100%",
            lineHeight: 1.4,
          }}
        >
          {proyecto.nombre}
        </h2>
        {/* Carrusel grande */}
        <div
          style={{
            marginBottom: isMobile ? "18px" : "32px",
            marginTop: isMobile ? "14px" : "20px",
            textAlign: "center",
            position: "relative",
            width: "100%",
            maxWidth: isMobile ? "100%" : "900px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            padding: isMobile ? "8px" : "14px 16px",
            background: "rgba(12,16,23,0.45)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {proyecto.imagenes.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                style={{
                  position: "absolute",
                  left: isMobile ? "6px" : "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#222831",
                  color: "#00e0ff",
                  border: "2px solid #00e0ff",
                  borderRadius: "8px",
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
                  right: isMobile ? "6px" : "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#222831",
                  color: "#00e0ff",
                  border: "2px solid #00e0ff",
                  borderRadius: "8px",
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
          {/\.(mp4|webm)$/i.test(proyecto.imagenes[imgIndex]) ? (
            <video
              src={proyecto.imagenes[imgIndex]}
              controls
              playsInline
              style={{
                width: isMobile ? "100%" : "650px",
                maxWidth: "100%",
                height: isMobile ? "230px" : "460px",
                minHeight: isMobile ? "180px" : undefined,
                objectFit: "contain",
                borderRadius: "12px",
                border: "2px solid #ffd700",
                background: "#222831",
                margin: isMobile ? "0 8px" : "0 56px",
                display: "inline-block",
                boxShadow: "0 0 16px #222",
                boxSizing: "border-box",
              }}
            >
              Tu navegador no soporta el elemento de video.
            </video>
          ) : (
            <img
              src={proyecto.imagenes[imgIndex]}
              alt={proyecto.nombre + " imagen " + (imgIndex + 1)}
              style={{
                width: isMobile ? "100%" : "650px",
                maxWidth: "100%",
                height: isMobile ? "230px" : "460px",
                minHeight: isMobile ? "180px" : undefined,
                objectFit: "contain",
                borderRadius: "12px",
                border: "2px solid #ffd700",
                background: "#222831",
                margin: isMobile ? "0 8px" : "0 56px",
                display: "inline-block",
                boxShadow: "0 0 16px #222",
                boxSizing: "border-box",
              }}
            />
          )}
          {proyecto.imagenes.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: isMobile ? "-10px" : "-14px",
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
            fontSize: isMobile ? "13px" : "17px",
            marginBottom: "18px",
            color: "#fff",
            maxWidth: isMobile ? "98vw" : "900px",
            width: "100%",
            textAlign: "left",
            background: "rgba(18, 24, 31, 0.42)",
            border: "1px solid rgba(0,224,255,0.2)",
            borderRadius: "12px",
            padding: isMobile ? "12px" : "18px 22px",
            lineHeight: 1.7,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
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
              borderRadius: "10px",
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
    </div>
  );
}
