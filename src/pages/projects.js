import { useStateContext } from "@/contexts/state-context";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {FaInfo, FaLink} from 'react-icons/fa6'
import { IoIosArrowBack } from "react-icons/io";

const ProjectPlaque = ({label}) => {

    const {
        selectedProject,
        setSelectedProject,
        toggleViewProject,
        biggerScreen,

    } = useStateContext()

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
            color:(biggerScreen)&&(selectedProject==label)?'#222222':'#CAD2C5',
            backgroundColor:(biggerScreen)&&(selectedProject==label)?'#CAD2C5':'#222222'
        }}
        whileHover={{
            color:(biggerScreen)?'#222222':'',
            backgroundColor:(biggerScreen)?'#CAD2C5':''
        }}

        onClick={()=> {
            
            if(!(biggerScreen)) {
                toggleViewProject()
            }

            setSelectedProject(label)}}
        >
            {label}
        </motion.div>
    )
}


const TagTile = ({tag}) => {

    return(
        <div className="w-fit cursor-default
        flex justify-center my-2 px-4
        bg-light p-1 mx-[2%] h-fit
        font-primary rounded-full"
        >
            {tag}
        </div>
    )
}


const ProjectList = () => {

    const {projects} = useStateContext()



    return(
        <motion.div className="w-1/4 
        flex-col mx-auto
        
        sm:py-12
        md:py-12
        lg:py-4
        xl:py-4
        

        sm:w-5/6
        md:w-5/6
        lg:w-1/4
        xl:w-1/4
        "

        
        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}

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
        </motion.div>
    )
}

const Projects = () => {
    const router = useRouter()
    const {projects,selectedProject,biggerScreen,viewProject,toggleViewProject} = useStateContext()

    

    const [description,setDescription] = useState('')
    const [displayDetails,setDisplayDetails] = useState(false)

    const getText = async() => {
        const projectData = projects[selectedProject]
        const response = await fetch(projectData.description)
        const text = await response.text()
        
        setDescription(text)
    }

    const handleBack = () => {
        toggleViewProject()
        
    }

    useEffect(() => {
        if (selectedProject) {
            setDisplayDetails(false)
            getText()
        }
    }, [selectedProject]);
    
    return (
        <motion.div className="w-full h-[92vh]
        flex 
        
        sm:py-0
        md:py-0
        lg:py-16
        xl:py-16
        


        sm:px-0
        md:px-0
        lg:px-16
        xl:px-32
        "

        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        >

            {
                (biggerScreen)&&
                <ProjectList key={'project-list'} />
            }

            <AnimatePresence mode="wait">

            {
                !viewProject&&!biggerScreen ?
                <ProjectList key='project-list' />:
                (viewProject || biggerScreen)&&
                <motion.div key='project-view' className="flex-1 
                rounded-xl flex flex-col items-center
                p-4
                "

                exit={{opacity:0}}
                animate={{opacity:1}}
                initial={{opacity:0}}
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
                            {projects[selectedProject].name}
                        </div>
                        

                        {
                            biggerScreen&&
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
                        }

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

                    <div className="
                    flex flex-col
                    
                    h-full
                    sm:w-full
                    md:w-full
                    lg:w-5/6
                    xl:w-5/6

                    "
                    >
                        
                        <div className="w-full h-fit "
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
                                        
                                        <div className="flex w-full h-3/4 "
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
                        
                        {
                            !(biggerScreen)&&
                            <div className="w-full flex-1 pl-4
                            flex flex-col
                            "
                            >
                                
                                <div className="text-light font-primary
                                text-xl  h-fit my-3
                                
                                sm:w-full
                                md:w-full
                                lg:w-2/3
                                xl:w-2/3
                                "
                                >
                                    {description&&description}
                                </div>

                                <div className="w-1/3 h-fit
                                flex flex-wrap mt-auto mb-4
                                
                                sm:w-full
                                md:w-full
                                lg:w-1/3
                                xl:w-1/3
                                "
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
                        }
                    </div>

                    {
                        !(biggerScreen)&&
                        <div className="w-full mt-auto"
                        >
                            <div className=" bg-primaryOpac 
                            p-2 mr-auto mt-auto
                            rounded-md flex justify-center"

                            onClick={() => {
                                handleBack()
                            }}
                            >
                                <IoIosArrowBack className="text-white"
                                size={30} />
                            </div>
                        </div>
                    }

                </motion.div>
            }
            </AnimatePresence>

        </motion.div>
    );
}
 
export default Projects;