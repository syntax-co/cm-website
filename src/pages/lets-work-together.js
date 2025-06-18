

const Contact = () => {
    return (
        <div className="w-full h-[92vh] px-spacing py-24
        grid grid-cols-3 grid-rows-2 gap-12 font-primary
        "
        >
            
            <div className="col-span-2 rounded-xl
            glass-card text-light p-8
            flex flex-col"
            >
                <div className="text-3xl "
                >
                    How I Work
                </div>
                <div className="w-5/6 flex flex-col
                text-xl my-auto space-y-8"
                >
                    <div className=""
                    >
                        I work to build custom robust solutions for any project.
                        I love when a challenge is put in front of me and I always 
                        get right to drawing board always learning and building.
                    </div>
                
                    <div>
                        When I'm working on a client project I am still building
                        away on whatever my mind can think of.
                    </div>
                </div>
            </div>

            <div className="col-span-1 rounded-xl
            bg-[#5ff76c62] p-8
            flex flex-col
            glass"
            >
                <div className="text-5xl text-light font-bold"
                >
                    Fiverr.
                </div>

                <div className="text-2xl text-light mt-2"
                >
                    Maybe I already have some offers on what you seek? Let's work together.
                </div>

                <div className="mt-auto"
                >
                    <div className="w-fit bg-light rounded-md
                    p-2 ml-auto cursor-default"
                    >
                        Lets Chat!
                    </div>
                </div>

            </div>

            <div className=" rounded-xl
            glass bg-[#202020b6] text-light p-8
            border border-light
            flex flex-col"
            >
                <div className="text-5xl text-light font-bold"
                >
                    Upwork
                </div>

                <div className="text-2xl text-light mt-2"
                >
                    If you need other custom solutions or a new website I can make it happen.
                </div>

                <div className="mt-auto"
                >
                    <div className="w-fit bg-light rounded-md
                    p-2 ml-auto cursor-default text-background"
                    >
                        Lets Chat!
                    </div>
                </div>
            </div>

            <div className="col-span-2 rounded-xl
            glass-card"
            >

            </div>


        </div>
    );
}
 
export default Contact;