import AboutMain from "@/components/about-main";
import { useState } from "react";



const About = () => {
    
    const [view,setView] = useState('main')
    
    return (
        <div className="h-[92vh] w-full
        flex items-center justify-center
        "
        >

            {
                view=='main'?
                <AboutMain />:
                view=='wips'?
                ''
                :''
            }
            
        </div>
    );
}
 
export default About;