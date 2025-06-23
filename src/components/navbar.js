import { useStateContext } from "@/contexts/state-context"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { CiMenuFries } from "react-icons/ci";

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
    const {toggleMobileMenu,pages,biggerScreen} = useStateContext()
    
    

    return (
        <div className="w-full h-[8vh]
         border-b border-primary 
        flex items-center 
        glass-nav px-spacing
        
        
        "
        >
            
            <div className='w-16 aspect-square
            bg-no-repeat bg-contain bg-center
            cursor-pointer
            '
            style={{
                backgroundImage:'url(./images/logo.ico)'
            }}

            onClick={()=>{router.push('/')}}
            />
                

            <div className="ml-auto
            flex
            "
            >
                {
                    biggerScreen?
                    Object.keys(pages).map((item,dex) => {

                        return(
                            <NavItem key={'nav-'+dex}
                            item={item}
                            path={pages[item]}
                            />
                        )
                    }):
                    <div
                    
                    onClick={() => {
                        toggleMobileMenu()
                    }}
                    >
                        <CiMenuFries className="text-white"
                        size={35}
                        />
                    </div>
                }
            </div>

        </div>
    );
}
 
export default Navbar;