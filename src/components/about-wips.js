import { useStateContext } from "@/contexts/state-context"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import WipCarousel from "./wips-carousel";
import { motion } from "framer-motion";





const IntroTile = () => {

    const {setView} = useStateContext()

    return(
        <div className="flex flex-col justify-center
        glass-card rounded-lg p-8 
        ">
            <div className="h-1/3 text-3xl
            flex items-center mb-2"
            >
                WIPs
            </div>

            <div className="text-base">
                Welcome to my WIPs page—my digital workshop. 
                Here you’ll find prototypes, half-polished experiments, 
                and fresh ideas that are still taking shape. Peek around
            </div>

            <div className="mt-auto"
            >
                <div className="w-fit px-4 py-1
                rounded-md ml-auto
                bg-light text-background
                
                "
                
                onClick={() => {
                    setView("main")
                }}
                >
                    <IoIosArrowBack size={25} />
                </div>
            </div>
        </div>
    )
}


const FillerTile = () => {

    return(
        <div className="
        glass-card rounded-lg
        
        "
        >
        </div>
    )
}

const ProjectTile = ({data}) => {

    const {statusColors} = useStateContext()
    const [text,setText] = useState('')
    

    const getText = async() => {
        const result = await fetch(data.description)
        
        const text = await result.text()
        setText(text)
    }

    useEffect(() => {
        getText()
    },[])

    return (
        <div className="flex flex-col justify-center
        glass-card rounded-lg p-8 
        ">
            
            <div className="text-2xl mx-2"
            >
                {data&&data.name}
            </div>

            <div className="w-full min-h-[1px] my-4 bg-primary"
            />
            
            <div className="px-2"
            >
                {text}
            </div>

            <div className="mt-auto"
            >
                <div className="w-fit rounded-full py-1 px-3 text-background
                ml-auto"

                style={{backgroundColor:statusColors[data.status]}}
                >
                    {data&&data.status.slice(0,1).toUpperCase()+data.status.slice(1)}
                </div>
            </div>

        </div>
    )
}


const AboutWips = () => {
    const {wips,screenSize,biggerScreen} = useStateContext()
    const [tiles,setTiles] = useState([])
    
    const creatTiles = () => {
        const holder = [];
        let max;

        if (biggerScreen) {
            max=6
        } else {
            max=4
        }

        holder.push(<IntroTile key='intro' />)

        Object.keys(wips).forEach((key,index) => {
            holder.push(
                <ProjectTile key={index} 
                data={wips[key]}
                />
            )
        })


        if (holder.length<max) {
            const dif = max-holder.length
            
            for (let i = 0; i<dif; i++) {
                holder.push(<FillerTile key={'filler-tile-'+i} />)
            }
        }


        setTiles(holder)
    }


    useEffect(() => {
        creatTiles()
    },[screenSize])

    return (
        biggerScreen?
        <motion.div className="w-5/6 h-5/6 
        grid grid-rows-2 grid-cols-3
        
        rounded-lg 
        glass-car
        font-primary text-light
        
        sm:gap-2
        md:gap-2
        lg:gap-10
        xl:gap-10

        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3

        sm:h-full
        md:h-full
        lg:h-5/6
        xl:h-5/6
        "

        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        >

            {
                tiles.map((tile) => {
                    return tile
                })
                    
            }   
    

        </motion.div>:
        <WipCarousel />
    );
}
 
export default AboutWips;