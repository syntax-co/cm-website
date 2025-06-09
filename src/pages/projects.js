import { useStateContext } from "@/contexts/state-context";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {FaInfo, FaLink} from 'react-icons/fa6'

const ProjectPlaque = ({label}) => {

    const {selectedProject,setSelectedProject} = useStateContext()

    return(
        <motion.div className="bg-background rounded-md p-3 mx-2
        text-light text-xl font-display cursor-pointer
        border-[1px] border-lightOpac my-2
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


const TagTile = ({tag}) => {

    return(
        <div className="w-[45%]
        flex justify-center my-2
        bg-light p-1 mx-[2%] h-fit
        font-primary rounded-full"
        >
            {tag}
        </div>
    )
}


const Projects = () => {
    const router = useRouter()
    const {projects,selectedProject} = useStateContext()
    const [description,setDescription] = useState('')
    const [displayDetails,setDisplayDetails] = useState(false)

    const getText = async() => {
        const projectData = projects[selectedProject]
        const response = await fetch(projectData.description)
        const text = await response.text()
        
        setDescription(text)
    }

    useEffect(() => {
        if (selectedProject) {
            getText()
        }
    }, [selectedProject]);

    return (
        <div className="w-full h-[92vh]
        flex 
        
        sm:py-16
        md:py-16
        lg:py-16
        xl:py-16
        


        sm:px-16
        md:px-16
        lg:px-16
        xl:px-32
        "
        >

            

            <div className="w-1/4 
            flex-col 
            py-4"
            >
                <div className="
            
                text-4xl text-light
                font-display mb-8 px-4
                "
                >
                    projects

                </div>
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

            <div className="flex-1  mb-16
            rounded-xl flex flex-col items-center
            p-4
            "
            >
                <div className="font-primary text-3xl
                text-light w-5/6 mt-2 mb-4
                flex"
                >   
                    <div className="
                    w-full flex items-end
                    text-3xl text-light
                    font-display px-4
                    "
                    >
                        {projects[selectedProject].altTitle}
                    </div>
                    <motion.div className="p-2 rounded mx-2
                    "
                    initial={{backgroundColor:'#CAD2C500', color:'#CAD2C5'}}
                    animate={{
                        backgroundColor:displayDetails? '#CAD2C5ff':'#222222',
                        color:displayDetails? '#222222':'#CAD2C5'
                    }}
                    whileHover={{backgroundColor:'#CAD2C5ff',color:'#222222'}}
                    onClick={()=>{
                        setDisplayDetails(!displayDetails)
                    }}
                    >
                        <FaInfo
                        size={20}
                        />
                    </motion.div>

                    <motion.div className="p-2 rounded-md mx-2"
                    initial={{backgroundColor:'#CAD2C500', color:'#CAD2C5'}}
                    
                    whileHover={{backgroundColor:'#CAD2C5ff',color:'#222222'}}
                    onClick={()=>{
                        router.push(projects[selectedProject].link)
                    }}
                    >
                        <FaLink 
                        size={20}
                        />
                    </motion.div>
                    
                </div>

                <div className=" w-5/6
                flex flex-col justify-center
                
                "
                >
                    <div className="w-full h-full "
                    >
                        <div className="w-full aspect-video
                        bg-background rounded-md
                        bg-center bg-cover
                        "
                        
                        style={{
                            backgroundImage:`url(${projects[selectedProject].imagepath})`
                        }}
                        >
                            
                            <AnimatePresence >
                            {
                                displayDetails&&
                                <motion.div className="w-full h-full py-8 px-16
                                bg-[#0e0e0e7e] 
                                flex items-center justify-center  
                                "
                                
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                exit={{opacity:0}}
                                >
                                    
                                    <div className="flex w-5/6 h-3/4"
                                    >
                                        <div className="text-light font-primary
                                        text-xl w-2/3 h-1/2"
                                        >
                                            {description&&description}
                                        </div>
                                        <div className="w-[1px] h-full bg-primary
                                        mx-4" 
                                        />
                                        <div className="w-1/3 h-fit
                                        flex flex-wrap"
                                        >
                                            {
                                                selectedProject&&
                                                projects[selectedProject].tags.map((tag,dex)=>{

                                                    return(
                                                        <TagTile key={'tag-'+dex}
                                                        tag={tag}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                </motion.div>
                            }
                            </AnimatePresence>

                        </div>
                    </div>

                    <div className="w-full h-full pl-4"
                    >
                        

                        
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Projects;