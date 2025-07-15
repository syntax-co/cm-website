

const Card = () => {
    

    

    return (
        <div className="w-screen h-screen
        bg-center bg-cover absolute top-0 z-20
        flex items-center justify-center"
        
        style={{
            backgroundImage: `url(/images/card-background.jpg)`,
        }}
        >

        

            <div className={`absolute w-[80vh] h-[80vw] `
            +' rotate-90 flex'
            }
            >

                <div 
                className="w-[80vw] aspect-square p-10 "
                >
                    <div 
                    className="w-full h-full 
                    bg-no-repeat bg-center bg-cover 
                    "
                    
                    style={{
                        backgroundImage:'url(/images/portfolio-qr.png)',
                    }}
                    />
                </div>

                <div className="h-5/6 w-[4px] bg-white
                my-auto rounded-[50%]" 
                />

                <div className="flex-1
                flex flex-col 
                relative"
                >
                    <div className="w-fit mx-auto flex font-primary
                    flex-col text-6xl text-white
                    space-y-auto my-auto"
                    >
                        
                        <div className=""
                        >
                            Chris
                        </div>
                        
                        <div className="ml-14"
                        >
                            Munoz
                        </div>
                    </div>

                    <div className="w-5/6 h-12 bg-[#0808083a] rounded-md
                    mx-auto text-2xl text-white
                    flex items-center justify-center
                    font-primary mb-auto"
                    >
                        Web Developer
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default Card;