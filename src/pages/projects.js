import { useStateContext } from "@/contexts/state-context";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const ProjectPlaque = ({label}) => {

    const {selectedProject,setSelectedProject} = useStateContext()

    return(
        <motion.div className="bg-background rounded-md p-3 mx-2
        text-light text-xl font-display cursor-pointer
        border-[1px] border-lightOpac
        "

        initial={{
            color:'#CAD2C5',
            backgroundColor:'#222222'
        }}
        animate={{
            color:selectedProject==label?'#222222':'#CAD2C5',
            backgroundColor:selectedProject==label?'#CAD2C5':'#222222'
        }}
        whileHover={{
            color:'#222222',
            backgroundColor:'#CAD2C5'
        }}

        onClick={()=> {setSelectedProject(label)}}
        >
            {label}
        </motion.div>
    )
}


const Projects = () => {
    const {projects,selectedProject} = useStateContext()
    const [description,setDescription] = useState('')

    const getText = () => {


    }

    useEffect(() => {
        getText()
    }, []);

    return (
        <div className="w-full h-[92vh]
        px-16 flex flex-col 
        "
        >

            <div className="
            
            text-4xl text-light
            font-display pt-16 pb-8
            "
            >
                projects
            </div>

            <div className="w-full flex py-2"
            >
                {
                    Object.keys(projects).map((key,dex) => {

                        return(
                            <ProjectPlaque key={'plaque-'+dex}
                            label={key}
                            />
                        )
                    })
                }
            </div>

            <div className="flex-1 bg-foreground mb-16
            rounded-xl flex flex-col
            p-4
            "
            >
                <div className="font-primary text-3xl
                text-light mb-2"
                >   
                    <div className="px-2"
                    >
                        {projects[selectedProject].altTitle}
                    </div>
                    <div className="w-full h-[1px]
                    bg-light
                    " 
                    />
                </div>

                <div className="flex
                flex-1
                "
                >
                    <div className="w-1/2 h-full"
                    >
                        <div className="w-full aspect-video
                        bg-background rounded-md
                        bg-center bg-cover
                        "
                        
                        style={{
                            backgroundImage:`url(${projects[selectedProject].imagepath})`
                        }}
                        >
                            
                        </div>
                    </div>

                    <div className="w-1/2 h-full pl-4"
                    >
                        

                        <div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Projects;