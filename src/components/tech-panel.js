import { useStateContext } from "@/contexts/state-context";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";



const EmptyTile = ({dex}) => {


    return(
        <motion.div className="w-[30%] h-14 p-2
        flex items-center bg-secondary
        rounded-md border text-light mr-auto
        font-display text-xl
        "
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                delay:(dex*.1)+.1
            }
        }}
        exit={{opacity:0}}
        >

        </motion.div>
    )
}


const SectionTile = ({label}) => {
    const {selectedTile,setSelectedTile} = useStateContext()
    const [hovering,setHovering] = useState()    

    return(
        <motion.div className=" px-2 py-1 mx-2
        text-xl cursor-pointer border
        font-primary rounded-md

        
        "

        initial={{color:'#CAD2C5',background:'#222222'}}
        animate={{
            color:(selectedTile==label || hovering)?'#222222':'#CAD2C5',
            backgroundColor:(selectedTile==label || hovering)?'#CAD2C5':'#222222'
        }}

        onMouseEnter={()=>{setHovering(true)}}
        onMouseLeave={()=>{setHovering(false)}}
        onClick={()=>{setSelectedTile(label)}}

        >
            {label&&label.slice(0,1).toUpperCase()+label.slice(1)}
        </motion.div>
    )
}


const TechTile = ({label,dex, grow=false}) => {

    const {biggerScreen} = useStateContext()


    return(
        <motion.div className={
        "w-full h-12 p-2 bg-primaryOpac "+
        "flex items-center rounded-md border text-light mr-auto font-display "+
        "sm:text-base md:text-base lg:text-lg xl:text-lg "+
        (grow&&
            (
                !biggerScreen?
                'col-span-2':'col-span-3'
            )
        )
        }

        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                delay:(dex*.1)+.1
            }
        }}
        exit={{opacity:0}}


        whileHover={{
            background:'var(--primary)',
            // color:'var(--foreground)',
            transition: {
                duration:.25
            }
        }}
        >
            {label}
        </motion.div>
    )
}


const TechPanel = () => {

    
    const {technologies,selectedTile,biggerScreen,toggleViewTech} = useStateContext()
    const [techView,setTechView] = useState([])
    const [hide,setHide] = useState(false)


    const fillTech = () => {
        setHide(true)
        const sect = technologies[selectedTile]
        const holder = [...sect]

        const nextMultiple = Math.ceil(sect.length/3) * 3

        
        if (nextMultiple-sect.length>0) {
            for (var i=0; i<(nextMultiple-sect.length); i++) {
                // holder.push('empty')
            }
        }
        // console.log(holder)
        setTechView(holder)

        setTimeout(() => {
            setHide(false)
        }, 500);
    }


    useEffect(() => {
        fillTech()
    }, [selectedTile]);

    return (
        <div className="flex-1 p-8 
        flex flex-col
        "
        >
            <div className="w-full 
            flex py-4
            "
            >
                {
                    !biggerScreen&&
                    <div className="w-16 bg-secondary
                    flex items-center justify-center
                    rounded-md mr-auto
                    "

                    onClick={() => {
                        toggleViewTech()
                    }}
                    >
                        <IoIosArrowBack size={30} />
                    </div>
                }

                {
                    Object.keys(technologies).map((key,dex) => {
                        
                        return(
                            <SectionTile key={'tile-'+dex} 
                            label={key}
                            />
                        )
                    })
                }

                

            </div>
            
            <div className="w-full h-[2px] bg-primary my-2" 
            />

            <div className="h-fit pt-8
            grid gap-4
            
            sm:grid-rows-5
            md:grid-rows-5
            lg:grid-rows-3
            xl:grid-rows-3

            sm:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-3
            "
            >
                <AnimatePresence >
                {
                    !hide&&
                    techView.map((item,dex)=>{


                        if (item!='empty') {
                            const even = (techView.length%2)==0

                            return(
                                <TechTile key={'tech-tile-'+dex} 
                                label={item}
                                dex={dex}
                                grow={!even&&dex==(techView.length-1)}
                                />
                            )
                        } else {
                            return(
                                <EmptyTile key={'empty-'+dex} 
                                dex={dex}
                                />
                            )
                        }
                    })
                }
                </AnimatePresence>
            </div>
        </div>
    );
}
 
export default TechPanel;