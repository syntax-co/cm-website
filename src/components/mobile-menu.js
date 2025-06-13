import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStateContext } from "@/contexts/state-context";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";

// Adjust these items to match your sections
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];


export default function MobileMenu({}) {
    const router = useRouter()
    const {viewMobileMenu,toggleMobileMenu,pages} = useStateContext()
    const _pages = {home:'/', ...pages}
    const handleClick = (path) => {
        toggleMobileMenu()
        
        router.push(path)
        
    }

    const onClose = () => {
        toggleMobileMenu()

    }

  return (
    <AnimatePresence>
      {viewMobileMenu && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col
          font-primary text-light"
        >
          {/* Close Button */}
          <button
            aria-label="Close menu"
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={onClose}
          >
            <IoMdClose className=""
            size={30} />
          </button>

          {/* Navigation Links */}
          <ul className="flex-1 flex flex-col justify-center items-center space-y-8">
            {Object.keys(_pages).map((key,dex) => (
              <li key={'item-'+dex}>
                <div
                  className="text-2xl font-semibold tracking-wide hover:text-primary transition-colors"
                  
                  onClick={() => {handleClick(_pages[key])}}
                >
                  {key.slice(0,1).toUpperCase()+key.slice(1)}
                </div>
              </li>
            ))}
          </ul>

          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
