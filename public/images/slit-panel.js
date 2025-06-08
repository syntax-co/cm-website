import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, delay, motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { IoChevronBack } from 'react-icons/io5';



// ██████╗ ██╗████████╗███████╗███╗   ███╗
// ██╔══██╗██║╚══██╔══╝██╔════╝████╗ ████║
// ██║  ██║██║   ██║   █████╗  ██╔████╔██║
// ██║  ██║██║   ██║   ██╔══╝  ██║╚██╔╝██║
// ██████╔╝██║   ██║   ███████╗██║ ╚═╝ ██║
// ╚═════╝ ╚═╝   ╚═╝   ╚══════╝╚═╝     ╚═╝
                                       
const DetailItem = ({label,dex}) => {

  return(
    <motion.div className='flex items-center text-white text-xl font-primary
    my-6'

    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{
        delay:.5
      }
    }}
    exit={{opacity:0}}
    >
      <div className='w-2 h-2 rounded-full bg-white 
      mx-2' 
      />
      {label}
    </motion.div>
  )
}



const FbContainer = ({label,data,style}) => {

  return(
    <div className='w-full h-[49%] rounded-md 
    px-14 py-4 text-white flex flex-col'
    style={{
      ...style
    }}
    >

      <div className='w-fit mx-auto text-4xl font-display
      pb-4'
      >
        {label}
      </div>

      <div className='flex-1 '
      >
        {
          data&&
          data.items.map((item,dex) => {
            return(
              <DetailItem 
              label={item}
              />
            )
          })
        }
      </div>

    </div>
  )
}




// ██████╗  █████╗ ███╗   ██╗███████╗██╗     
// ██╔══██╗██╔══██╗████╗  ██║██╔════╝██║     
// ██████╔╝███████║██╔██╗ ██║█████╗  ██║     
// ██╔═══╝ ██╔══██║██║╚██╗██║██╔══╝  ██║     
// ██║     ██║  ██║██║ ╚████║███████╗███████╗
// ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
                                          
const FbPanel = ({display,changeDisplay}) => {

  const details = {
    'frontend':[
      'React',
      'Javascript',
      'Node.js',
      'Tailwind',
      'HTML/CSS',
    ],
    'backend':[
      'Node.js',
      'Express',
      'MongoDB'
    ]
  }
  
  return(
    <div className='fb-panel-body'
    >
      <div className='w-full h-full
      flex flex-col'
      >

      {
        Object.keys(details).map((key,dex) => {

          return(
            <FbContainer 
            label={key}
            data={{
              items:details[key]
            }}
            style={
              key=='backend'?
              {
                marginTop:'auto'
              }:{}
            }
            />
          )
        })
      }

      </div>
    </div>
  )
}

  
export default FbPanel;