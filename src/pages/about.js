import AboutMain from "@/components/about-main";
import AboutWips from "@/components/about-wips";
import { useStateContext } from "@/contexts/state-context";



const About = () => {
    
    const {view} = useStateContext()
   
    
    return (
        <div className="h-[92vh] w-full
        flex items-center justify-center
        "
        >

            {
                view=='main'?
                <AboutMain />:
                view=='wips'?
                <AboutWips />
                :''
            }
            
        </div>
    );
}
 
export default About;