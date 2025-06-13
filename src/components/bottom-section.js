import { useEffect, useState } from "react";
import Wave from "./misc/wave";
import { useStateContext } from "@/contexts/state-context";



const BottomSection = () => {
    
    const {screenSize} = useStateContext
    

    
    
    return (
        <div className='h-1/4 relative
        border-t-2 border-primary px-16
        flex items-center justify-start
        bg-foreground
        '
        >


            {
                (screenSize =='lg' || screenSize == 'xl') &&
                <Wave />
            }

            <div className='w-fit  leading-[100%] 
            text-light
            font-display relative
            text-[21vw]

            
            '
            >
                chris munoz
            </div>

        </div>
    );
}
 
export default BottomSection;