import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { CgCoffee } from "react-icons/cg";


const Tab = ({onClick}) => {


    return(
        <motion.div className="w-20 h-10 absolute top-14 bg-blue-400
        rounded-b-xl cursor-pointer
        flex items-center justify-center"

        initial={{scale:1}}
        whileHover={{scale:1.05}}
        transition={{
            duration:.4
        }}
        onClick={onClick}
        >
                <CgCoffee size={30} />
        </motion.div>
    )
}

const SupportMe = () => {

    const router = useRouter()
    const [display,setDisplay] = useState(false)

    const onClick = () =>{
        setDisplay(!display)
    }

    return (
        <motion.div className="absolute w-full top-0
        h-14 bg-blue-400 z-20 
        rounded-b-xl text-white
        flex justify-center
        "

        initial={{top:-4*14}}
        animate={{
            top:display? 0:-4*14
        }}
        >


            <div className="h-fit my-auto"
            >
                ☕ Enjoying Tagify? Support the project and share your ideas — every coffee fuels new features!
                <span
                className="cursor-pointer ml-2
                text-[#d70eff]"
                onClick={() => {router.push('https://coff.ee/chrismunoz')}}
                >
                    coff.ee/chrismunoz
                </span>
            </div>

            <Tab 
            onClick={onClick}
            />

        </motion.div>
    );
}
 
export default SupportMe;