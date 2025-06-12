



const AboutMain = () => {


    return(
        <div className="w-5/6 h-5/6
        flex flex-col
        rounded-lg py-8 px-12
        glass-card
        font-primary text-light
        
        "
        >

            <div className="w-4/5 h-full flex mx-auto"
            >

                <div className="w-fit flex flex-col"
                >

                    

                    <div className="w-fit
                    flex flex-col items-center
                    leading-[100%] text-[75px]"
                    >
                        
                        <div className=" mb-2 
                        flex items-center
                        "
                        >
                            Hello, I'm

                            <div className="w-40 h-[2px] bg-light
                            mx-4"/>
                        </div>

                        <div className="w-full mb-6 
                        flex items-center"
                        >
                            <div className="flex-1 h-[2px] bg-light
                            mx-4"/>
                            Chris Munoz
                        </div>
                    </div>



                    <div className=" indent-8 text-lg my-auto
                    text-wrap "
                    >
                        I'm a backend‑focused developer based in Chicago who loves turning 
                        complex ideas into clean, scalable APIs and automation tools. 
                        Over the last few years I’ve specialized in integrating AI 
                        (especially OpenAI) into web products, from an auto‑scheduling 
                        SaaS that transforms plain‑text constraints into optimized calendars 
                        to a reinforcement‑learning crypto‑trading bot that adapts to live 
                        markets. When I’m not wiring up Next.js servers or tweaking database 
                        schemas, you’ll find me experimenting with new ways to leverage AI for 
                        real‑world impact. I thrive on projects where elegant logic meets 
                        tangible results, and I’m always looking for the next challenge that 
                        lets me blend code, creativity, and a dash of cosmic curiosity.
                    </div>

                    <div className="flex justify-end"
                    >
                        <div className="p-2 text-lg bg-primary w-fit
                        rounded-md cursor-pointer"
                        >
                            Current Projects
                        </div>
                    </div>


                </div>




                
            </div>


            

        </div>
    )
}


export default AboutMain;