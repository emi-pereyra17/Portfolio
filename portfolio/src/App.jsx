import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StartScreen from "./pages/StartScreen";
import MenuScreen from "./pages/MenuScreen";
import ProyectosScreen from "./pages/ProyectosScreen";
import SobreMiScreen from "./pages/SobreMiScreen";
import ContactoScreen from "./pages/ContactoScreen";

const BGM_TRACKS = ["/music1.mp3", "/music2.mp3"];
const BGM_BASE_VOLUME = 0.28;
const BGM_DUCK_VOLUME = 0.04;

function SpeakerIcon({ muted }) {
  const size = 22;
  if (muted) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden
        style={{ display: "block" }}
      >
        <path
          fill="currentColor"
          d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zM19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A9.98 9.98 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 4v-4.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
        />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      style={{ display: "block" }}
    >
      <path
        fill="currentColor"
        d="M3 9v6h4l5 4V5L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
      />
    </svg>
  );
}

export default function App() {
  const [screen, setScreen] = useState("start");
  const [musicOn, setMusicOn] = useState(true);
  const bgmRef = useRef(null);
  const bgmTrackRef = useRef(0);
  const musicOnRef = useRef(musicOn);
  const startDuckTimerRef = useRef(null);

  musicOnRef.current = musicOn;

  useEffect(() => {
    const el = bgmRef.current;
    if (!el) return;
    el.muted = !musicOn;
  }, [musicOn]);

  useEffect(() => {
    const el = bgmRef.current;
    if (!el) return;
    el.volume = BGM_BASE_VOLUME;
    el.loop = false;

    const onEnded = () => {
      bgmTrackRef.current = (bgmTrackRef.current + 1) % BGM_TRACKS.length;
      el.src = BGM_TRACKS[bgmTrackRef.current];
      el.play().catch(() => {});
    };

    el.addEventListener("ended", onEnded);
    bgmTrackRef.current = 0;
    el.src = BGM_TRACKS[0];
    el.play().catch(() => {});

    return () => el.removeEventListener("ended", onEnded);
  }, []);

  /** Desbloqueo de autoplay: mismo stack que un gesto del usuario (muted, volumen y play). */
  const ensureBgmPlaying = useCallback(() => {
    const el = bgmRef.current;
    if (!el || !musicOnRef.current) return Promise.resolve();
    el.muted = false;
    if (!startDuckTimerRef.current) {
      el.volume = BGM_BASE_VOLUME;
    }
    const p = el.play();
    return p ?? Promise.resolve();
  }, []);

  // Autoplay suele fallar hasta un gesto; play() es seguro si ya suena (resuelve al instante).
  useEffect(() => {
    const tryUnlock = () => {
      if (!musicOnRef.current || !bgmRef.current) return;
      ensureBgmPlaying().catch(() => {});
    };

    window.addEventListener("pointerdown", tryUnlock, {
      capture: true,
      passive: true,
    });
    window.addEventListener("touchstart", tryUnlock, {
      capture: true,
      passive: true,
    });
    document.documentElement.addEventListener("click", tryUnlock, {
      capture: true,
    });
    window.addEventListener("keydown", tryUnlock, { capture: true });

    return () => {
      window.removeEventListener("pointerdown", tryUnlock, true);
      window.removeEventListener("touchstart", tryUnlock, true);
      document.documentElement.removeEventListener("click", tryUnlock, true);
      window.removeEventListener("keydown", tryUnlock, true);
    };
  }, [ensureBgmPlaying]);

  const duckBgmForStartSfx = useCallback((durationMs) => {
    const el = bgmRef.current;
    if (!el || !musicOnRef.current) return;
    if (startDuckTimerRef.current) clearTimeout(startDuckTimerRef.current);
    el.volume = BGM_DUCK_VOLUME;
    startDuckTimerRef.current = setTimeout(() => {
      startDuckTimerRef.current = null;
      const a = bgmRef.current;
      if (a) a.volume = BGM_BASE_VOLUME;
    }, durationMs);
  }, []);

  useEffect(() => {
    return () => {
      if (startDuckTimerRef.current) clearTimeout(startDuckTimerRef.current);
    };
  }, []);

  const resumeBgm = ensureBgmPlaying;

  const toggleMusic = useCallback(() => {
    setMusicOn((prev) => {
      const next = !prev;
      const el = bgmRef.current;
      if (el) {
        el.muted = !next;
        if (next) {
          el.volume = BGM_BASE_VOLUME;
          el.play().catch(() => {});
        }
      }
      return next;
    });
  }, []);

  return (
    <>
      <audio ref={bgmRef} preload="auto" playsInline />
      <AnimatePresence mode="wait">
        {screen === "start" && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StartScreen
              onStart={() => setScreen("menu")}
              onResumeBgm={resumeBgm}
              onDuckBgmDuringStart={duckBgmForStartSfx}
            />
          </motion.div>
        )}

        {screen === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MenuScreen onSelect={(option) => setScreen(option)} />
          </motion.div>
        )}

        {screen === "proyectos" && (
          <ProyectosScreen onBackToMenu={() => setScreen("menu")} />
        )}
        {screen === "sobreMi" && (
          <SobreMiScreen onBackToMenu={() => setScreen("menu")} />
        )}
        {screen === "contacto" && (
          <ContactoScreen onBackToMenu={() => setScreen("menu")} />
        )}
      </AnimatePresence>
      <button
        type="button"
        tabIndex={-1}
        onClick={(e) => {
          toggleMusic();
          e.currentTarget.blur();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        aria-pressed={musicOn}
        aria-label={
          musicOn
            ? "Silenciar música de fondo (solo clic o toque)"
            : "Activar música de fondo (solo clic o toque)"
        }
        style={{
          position: "fixed",
          top: "max(12px, env(safe-area-inset-top, 0px))",
          right: "max(12px, env(safe-area-inset-right, 0px))",
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 12px",
          color: musicOn ? "#00e0ff" : "#999",
          background: "#161616",
          border: "2px solid",
          borderColor: musicOn ? "#00e0ff" : "#555",
          borderRadius: 0,
          cursor: "pointer",
          boxShadow: musicOn
            ? "0 0 0 2px #222, 0 0 10px #00e0ff55"
            : "0 0 0 2px #222",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <SpeakerIcon muted={!musicOn} />
      </button>
    </>
  );
}
