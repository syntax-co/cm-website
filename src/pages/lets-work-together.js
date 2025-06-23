import { useStateContext } from "@/contexts/state-context";
import { motion } from "framer-motion";
import { useRouter } from "next/router";




const Contact = () => {
    const router = useRouter()
    const {biggerScreen} = useStateContext()


    return (
        <motion.div className="w-full h-[92vh] px-spacing py-24
        grid font-primary
        
        sm:py-8
        md:py-10
        lg:py-16
        xl:py-24

        sm:grid-rows-4
        md:grid-rows-4
        lg:grid-rows-2
        xl:grid-rows-2
        
        sm:grid-cols-1
        md:grid-cols-1
        lg:grid-cols-3
        xl:grid-cols-3

        sm:gap-4
        md:gap-4
        lg:gap-8
        xl:gap-12

        "

        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        >
            
            <div className="rounded-xl
            glass-card text-light p-8
            flex flex-col

            sm:p-6
            md:p-4
            lg:p-8
            xl:p-8

            sm:col-span-1
            md:col-span-1
            lg:col-span-2
            xl:col-span-2


            sm:row-span-2
            md:row-span-2
            lg:row-span-1
            xl:row-span-1
            "
            >
                <div className="text-3xl "
                >
                    What I Do
                </div>
                <div className="flex flex-col
                text-xl my-auto space-y-8
                
                sm:w-full
                md:w-full
                lg:w-5/6
                xl:w-5/6

                sm:text-base
                md:text-base
                lg:text-lg
                xl:text-xl
                "
                >
                    <div className=""
                    >
                        backend developer with a passion for building clean, efficient systems that just work. 
                        Whether you need API integrations, database architecture, or automation that saves you time and money, 
                        I bring a practical, solution-driven approach to every project. 

                        
                    </div>
                
                    <div>
                        I specialize in turning complex logic into smooth digital experiences — without the bloat. 
                        If you're looking for someone reliable, fast, and easy to work with, let’s make your next idea happen.
                    </div>
                </div>
            </div>

            <div className="col-span-1 rounded-xl
            bg-[#5ff76c62]
            flex flex-col
            glass

            sm:p-6
            md:p-4
            lg:p-8
            xl:p-8


            "
            >
                <div className="text-5xl text-light font-bold
                sm:text-2xl
                md:text-2xl
                lg:text-5xl
                xl:text-5xl
                "
                >
                    Fiverr.
                </div>

                <div className=" text-light mt-2
                
                sm:text-base
                md:text-base
                lg:text-xl
                xl:text-2xl
                "
                >
                    Maybe I already have some offers on what you seek? Let's work together.
                </div>

                <div className="mt-auto"
                >
                    <div className="w-fit bg-light rounded-md
                    p-2 ml-auto cursor-default"

                    onClick={() => {router.push('https://www.fiverr.com/chris_munoz12?public_mode=true')}}
                    >
                        Lets Chat!
                    </div>
                </div>

            </div>

            <div className=" rounded-xl
            glass bg-[#202020b6] text-light p-8
            border border-light
            flex flex-col
            
            sm:p-6
            md:p-4
            lg:p-8
            xl:p-8

            sm:row-start-4
            md:row-start-4
            lg:row-start-2
            xl:row-start-2
            "
            >
                <div className="text-5xl text-light font-bold
                sm:text-2xl
                md:text-2xl
                lg:text-5xl
                xl:text-5xl
                "
                >
                    Upwork
                </div>

                <div className="text-light mt-2
                
                sm:text-base
                md:text-base
                lg:text-xl
                xl:text-2xl
                "
                >
                    If you need other custom solutions or a new website I can make it happen.
                </div>

                <div className="mt-auto"
                >
                    <div className="w-fit bg-light rounded-md
                    p-2 ml-auto cursor-default text-background"

                    onClick={() => {router.push('https://www.upwork.com/freelancers/~016f427b42f06221e9?viewMode=1')}}
                    >
                        Lets Chat!
                    </div>
                </div>
            </div>

            <div className="col-span-2 rounded-xl
            glass-card text-light p-8
            flex-col
            
            sm:hidden
            md:hidden
            lg:flex
            xl:flex
            
            "
            >
                
            </div>


        </motion.div>
    );
}
 
export default Contact;