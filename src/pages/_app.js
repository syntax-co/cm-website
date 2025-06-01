import Navbar from "@/components/navbar";
import { StateProvider } from "@/contexts/state-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider >
      <div className='w-full min-h-screen'
      >
        <Navbar />
        <Component {...pageProps} />
      </div>
    </StateProvider>
  )
  
  
  
}
