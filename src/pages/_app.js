import StarfieldBackground from "@/components/misc/particle-background";
import ParticleBackground from "@/components/misc/particle-background";
import Navbar from "@/components/navbar";
import { StateProvider } from "@/contexts/state-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  
  return (
    <StateProvider>
      <div className="relative w-full min-h-screen">
        {/* Particle background must match height + width of the parent */}
        <div className="absolute inset-0 h-full w-full z-0">
          <StarfieldBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </StateProvider>
  )
  
  
  
}
