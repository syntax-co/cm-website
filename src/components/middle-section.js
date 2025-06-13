import { IoIosArrowForward } from "react-icons/io";
import ContactCard from "./contact-card";
import ProjectsCard from "./projects-card";
import TechPanel from "./tech-panel";
import { useStateContext } from "@/contexts/state-context";




const RightSection = () => {

    return(
        <div className='flex flex-col
        flex-1
        border-secondary
        
        '
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

        </div>
    )
}


const LeftSection = () => {

    const {toggleViewTech} = useStateContext();

    return(
        <div className='p-12
        flex flex-col justify-center
        font-primary
        
        sm:w-full
        md:w-full
        lg:w-1/3
        xl:w-1/3


        '
        >
            
            <div className="h-5/6 
            text-light flex flex-col
            "
            >   
                <div className="flex justify-center
                pb-6"
                >
                    <div className="w-40 aspect-square bg-secondary
                    border-2 border-primary
                    rounded-full bg-center bg-contain"
                    style={{
                        backgroundImage:'url(./images/avatar.png)'
                    }}
                    />
                </div>
                
                <div className='text-3xl my-4  py-1
                '
                >
                    Hey There,
                </div>

                <div className='text-xl'
                >
                    I’m Chris — a backend developer who starts every project at 
                    the drawing board. I love breaking down real problems, exploring 
                    what’s possible, and building clean, scalable systems that get things done.
                </div>

                
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
                
                


            </div>

        </div>
    )
}


const MiddleSection = () => {

    const {viewTech,toggleViewTech} = useStateContext()
   



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
                    
                    {
                        !viewTech?
                        <LeftSection />:
                        <RightSection />
                    }

                    

                    
                </div>
            </div>
            
            

        </div>
    );
}
 
export default MiddleSection;