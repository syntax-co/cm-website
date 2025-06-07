import { motion } from "framer-motion";
import { useState,useRef, useEffect } from "react";




const Line = ({position,index}) => {

    return(
        <motion.div id={'line-'+index} 
        className='w-2 bg-lightOpac rounded-md
        mx-auto mt-2'

        initial={{height:'10px'}}
        animate={{
            height:position.height
        }}
        >
            
        </motion.div>
    )
}



const Wave = () => {


    const tracker = useRef([])
    const [positions,setPositions] = useState([])
    const count = 100
    const minHeight = 10
    const maxHeight = 200
    const waveWidth = .1

    function generateWaveHeights(length, peakIndex, minHeight, maxHeight, waveWidth = 1) {
        const heights = new Array(length).fill(minHeight);

        for (let i = 0; i < length; i++) {
            const distance = Math.abs(i - peakIndex);

            // Normalize distance based on desired waveWidth (spread factor)
            const t = distance / (waveWidth * (length / 2));
            const clampedT = Math.min(t, 1); // Ensure it doesn't go over 1

            // Linear falloff, can be swapped with smoother curve if needed
            const height = maxHeight - (maxHeight - minHeight) * clampedT;
            heights[i] = Math.round(height);
        }

        return heights;
    }


    const createPositions = () => {
        
        const hs = generateWaveHeights(count, count/2, minHeight,maxHeight,waveWidth)

        const holder = []

        hs.forEach((height,index) => {
            holder.push({height:height+'px'})
        })

        setPositions(holder)
    }

    const getElemPositions = () => {
        const holder = []

        positions.forEach((position, index) => {
            const elem = document.querySelector(`#line-${index}`)

            const rect = elem.getBoundingClientRect()
            const left = rect.left
            holder.push({left})
        });

        tracker.current = holder
    }


    const hanldeMouseMove = (e) => {

        const x = e.clientX
        const tSize = tracker.current.length

        var foundIndex;

        for (var i=0; i<tSize;i++) {
            
            if (i<tSize-1 && i>0) {
                // if not the last elem
                const elem1 = tracker.current[i]
                const elem2 = tracker.current[i+1]

                if (x>=elem1.left && x<elem2.left) {
                    foundIndex = i
                    i=tSize
                }


            } 
            else if (i===0) {
                foundIndex = 0
            }
            else {
                // if its the last elem
                const elem1 = tracker.current[i]
                if (x>=elem1.left) {
                    foundIndex = i
                    i=tSize
                }
            }

        }

        const holder = []
        const newWave = generateWaveHeights(count, foundIndex, minHeight,maxHeight,waveWidth)
        
        newWave.forEach((height,index) => {
            holder.push({height})
        })

        setPositions(holder)
    }



    useEffect(() => {
        if (positions.length>0) {
            getElemPositions()
        }
    }, [positions]);

    useEffect(() => {
        createPositions();

        const listener = window.addEventListener('resize', getElemPositions)
        const listener2 = window.addEventListener('mousemove', hanldeMouseMove)

        return () => {
            window.removeEventListener('resize', getElemPositions)
            window.removeEventListener('mousemove', hanldeMouseMove)
        }
    }, []);


    return (
        <div className="w-full h-full
        absolute top-0 left-0 px-16
        flex justify-center
        "
        >

            {
                positions.length>0&&
                positions.map((position,index)=>{
                    return(
                        <Line
                            key={index}
                            index={index}
                            position={position}
                        />
                    )
                })
            }
        </div>
    );
}
 
export default Wave;