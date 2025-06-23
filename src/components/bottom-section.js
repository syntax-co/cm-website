import { useEffect, useState } from "react";
import Wave from "./misc/wave";
import { useStateContext } from "@/contexts/state-context";



const BottomSection = () => {
    
    const {biggerScreen} = useStateContext()
    

    
    return (
        <div className='max-h-1/4 relative
        border-t-2 border-primary px-16 overflow-hidden
        flex items-center justify-start
        bg-foreground

        sm:h-[10vh]
        md:h-[10vh]
        lg:h-[20vh]
        xl:h-[20vh]

        sm:px-4
        md:px-4
        lg:px-8
        xl:px-16

        '
        >


            {
                biggerScreen&&
                <Wave />
            }

            <div className='w-fit mx-auto leading-[100%] 
            text-light
            font-display relative
            

            sm:text-[40px]
            md:text-[50px]
            lg:text-[100px]
            xl:text-[100px]

            
            '
            >
                chris munoz
            </div>

        </div>
    );
}
 
export default BottomSection;