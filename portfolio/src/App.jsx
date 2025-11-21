import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StartScreen from "./pages/StartScreen";
import MenuScreen from "./pages/MenuScreen";
import ProyectosScreen from "./pages/ProyectosScreen";
import SobreMiScreen from "./pages/SobreMiScreen";
import ContactoScreen from "./pages/ContactoScreen";

export default function App() {
  const [screen, setScreen] = useState("start"); 

  return (
    <AnimatePresence mode="wait">
      {screen === "start" && (
        <motion.div
          key="start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StartScreen onStart={() => setScreen("menu")} />
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
  );
}
