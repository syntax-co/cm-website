import AboutMain from "@/components/about-main";
import AboutWips from "@/components/about-wips";
import { useStateContext } from "@/contexts/state-context";
import { AnimatePresence, motion } from "framer-motion";



const About = () => {
    
    const {view} = useStateContext()
   
    
    return (
        <motion.div className="h-[92vh] w-full
        flex items-center justify-center
        "

        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        >

            <AnimatePresence mode="wait">
            {
                view=='main'?
                <AboutMain key={'about-main'} />:
                view=='wips'?
                <AboutWips key={'about-wips'} />
                :''
            }
            </AnimatePresence>
            
        </motion.div>
    );
}
 
export default About;