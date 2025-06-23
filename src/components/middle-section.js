import { IoIosArrowForward } from "react-icons/io";
import ContactCard from "./contact-card";
import ProjectsCard from "./projects-card";
import TechPanel from "./tech-panel";
import { useStateContext } from "@/contexts/state-context";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";




const RightSection = () => {

    return(
        <motion.div className='flex flex-col
        flex-1
        border-secondary
        
        '

        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        >
            <div className=' pt-8
            font-primary px-8 text-light

            sm:text-[35px]
            md:text-[35px]
            lg:text-[45px]
            xl:text-[45px]
            '
            
            >
                Built From The Problem Up
            </div>
            
            
            <TechPanel />

        </motion.div>
    )
}


const LeftSection = () => {

    const {toggleViewTech,biggerScreen} = useStateContext();

    return(
        <motion.div className='p-4
        flex flex-col justify-center
        font-primary
        
        sm:w-full
        md:w-full
        lg:w-1/3
        xl:w-1/3


        '

        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        >
            
            <div className="h-5/6
            px-12
            text-light flex flex-col
            "
            >   
                <div className="flex justify-center
                pb-6"
                >
                    <div className="w-32 aspect-square bg-secondary
                    border-2 border-primary
                    rounded-full bg-center bg-contain"
                    style={{
                        backgroundImage:'url(./images/avatar.png)'
                    }}
                    />
                </div>
                
                <div className='text-3xl my-auto py-1
                '
                >
                    Hey There,
                </div>

                <div className='text-xl my-auto' 
                >
                    I’m Chris — a backend developer who starts every project at 
                    the drawing board. I love breaking down real problems, exploring 
                    what’s possible, and building clean, scalable systems that get things done.
                </div>

                {
                    !(biggerScreen)&&
                    <div className="w-full"
                    >
                        <div className="w-fit flex mt-4  ml-auto
                        "
                        
                        onClick={() => {toggleViewTech()}}
                        >
                            <div className="bg-light text-background
                            text-xl p-2 rounded-l-md"
                            >
                                My Toolkit
                            </div>                  

                            <div className="w-12 h-12 bg-light ml-1
                            rounded-r-md text-background
                            flex items-center justify-center
                            "
                            >
                                <IoIosArrowForward 
                                size={30}
                                />
                            </div>              
                        </div>
                    </div>
                }
                
                


            </div>

        </motion.div>
    )
}


const MiddleSection = () => {

    const {viewTech,biggerScreen} = useStateContext()


    return (
        <div className='w-full h-2/3 
        flex flex-1
        
        sm:px-0
        md:px-0
        lg:px-16
        xl:px-32
        ' 
        >
            
            <div className='flex flex-1 
            flex-col'
            >
                

                <div className='flex-1 flex
                
                
                
                
                '
                >
                    
                    <AnimatePresence mode="wait">
                    {
                        (!viewTech || biggerScreen)?
                        <LeftSection key={'left-section'} />:
                        <RightSection key={'right-section'} />
                    }
                    </AnimatePresence>


                    {
                        biggerScreen&&
                        <RightSection />
                    }
                    

                    
                </div>
            </div>
            
            

        </div>
    );
}
 
export default MiddleSection;