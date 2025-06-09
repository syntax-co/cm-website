import { useStateContext } from "@/contexts/state-context"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState } from "react"


const NavItem = ({item,path}) => {
    const router = useRouter()
    const [hovering,setHovering] = useState(false)
    const {currentPath} = useStateContext()

    return(
        <div key={'item'} 
        className="text-light
        px-4 cursor-default
        font-primary text-xl"

        onMouseEnter={() => {setHovering(true)}}
        onMouseLeave={() => {setHovering(false)}}
        onClick={() => {router.push(path)}}
        >
            {item.slice(0,1).toUpperCase()+item.slice(1)}
            <motion.div className="h-[1px] bg-light mt-1"

            initial={{width:'0%'}}
            animate={{width:hovering||currentPath==path?'100%':'0%'}}
            />
        </div>
    )
}


const Navbar = () => {
    const router = useRouter()
    const pages = {
        'projects':'/projects',
        'about':'/about',
        'contact':'/contact'
    }




    return (
        <div className="w-full h-[8vh]
        bg-foreground border-b border-primary 
        flex items-center 
        
        sm:px-16
        md:px-16
        lg:px-16
        xl:px-32
        "
        >
            
            <div className='w-16 aspect-square
            bg-no-repeat bg-contain bg-center
            cursor-pointer
            '
            style={{
                backgroundImage:'url(./images/logo.png)'
            }}

            onClick={()=>{router.push('/')}}
            />
                

            <div className="ml-auto
            flex
            "
            >
                {
                    Object.keys(pages).map((item,dex) => {

                        return(
                            <NavItem key={'nav-'+dex}
                            item={item}
                            path={pages[item]}
                            />
                        )
                    })
                }
            </div>

        </div>
    );
}
 
export default Navbar;