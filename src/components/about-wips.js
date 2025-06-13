import { useStateContext } from "@/contexts/state-context"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io";



const IntroTile = () => {

    const {setView} = useStateContext()

    return(
        <div className="flex flex-col justify-center
        glass-card rounded-lg p-8
        ">
            <div className="h-1/3 text-4xl
            flex items-center px-3"
            >
                WIPs
            </div>

            <div>
                Welcome to my WIPs page—my digital workshop. 
                Here you’ll find prototypes, half-polished experiments, 
                and fresh ideas that are still taking shape. Peek around, 
                kick the tires, and watch these projects evolve from rough 
                sketches into fully-fledged tools.
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

    const [text,setText] = useState('')
    const statusColors = {
        active:'#7ff097',
        paused:'#fffd81',
        abandoned:'#ff596f'
    }

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

            <div className="w-full h-[1px] my-4 bg-primary"
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
    const {wips} = useStateContext()
    const [tiles,setTiles] = useState([])
    
    const creatTiles = () => {
        const holder = []

        holder.push(<IntroTile key='intro' />)

        Object.keys(wips).forEach((key,index) => {
            holder.push(
                <ProjectTile key={index} 
                data={wips[key]}
                />
            )
        })


        if (holder.length<6) {
            const dif = 6-holder.length
            
            for (let i = 0; i<dif; i++) {
                holder.push(<FillerTile key={'filler-tile-'+i} />)
            }
        }


        setTiles(holder)
    }


    useEffect(() => {
        creatTiles()
    },[])

    return (
        <div className="w-5/6 h-5/6
        grid grid-rows-2 grid-cols-3
        gap-10
        rounded-lg py-12 px-12
        glass-car
        font-primary text-light
        
        "
        >

            {
                tiles.map((tile) => {
                    return tile
                })
            }   


        </div>
    );
}
 
export default AboutWips;