import StarfieldBackground from "@/components/misc/particle-background";
import ParticleBackground from "@/components/misc/particle-background";
import MobileMenu from "@/components/mobile-menu";
import Navbar from "@/components/navbar";
import { StateProvider } from "@/contexts/state-context";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  
  const router = useRouter()

  return (
    <StateProvider>
      <div className="relative w-full min-h-screen">
        {/* Particle background must match height + width of the parent */}
        <div className="absolute inset-0 h-full w-full z-0">
          <StarfieldBackground />
        </div>

        <MobileMenu />

        {/* Main content */}
        <div className="relative z-10">
          <Navbar />

          <AnimatePresence mode="wait"
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </div>
    </StateProvider>
  )
  
  
  
}
