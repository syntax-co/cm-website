import BottomSection from "@/components/bottom-section";
import MiddleSection from "@/components/middle-section";
import { motion } from "framer-motion";



export default function Home() {



  return (
    <motion.div className="w-full h-[92vh]
    flex flex-col
    flex-1"

    exit={{opacity:0}}
    animate={{opacity:1}}
    initial={{opacity:0}}
    >
      
      
      <MiddleSection />

      <BottomSection />

    </motion.div>
  );
}
