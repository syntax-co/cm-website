import ContactCard from "./contact-card";
import ProjectsCard from "./projects-card";
import TechPanel from "./tech-panel";




const MiddleSection = () => {

   



    return (
        <div className='w-full h-2/3 pl-16
        flex flex-1' 
        >
            
            <div className='flex flex-1
            flex-col'
            >
                

                <div className='flex-1 flex'
                >
                    <div className='w-1/3
                    p-6
                    flex flex-col justify-center
                    font-primary'
                    >
                        
                        <div className="h-5/6 
                        text-light flex flex-col
                        "
                        >   
                            <div className="flex justify-center
                            pb-6"
                            >
                                <div className="w-40 aspect-square bg-secondary
                                border-2 border-primary
                                rounded-full bg-center bg-contain"
                                style={{
                                    backgroundImage:'url(./images/avatar.png)'
                                }}
                                />
                            </div>

                            <div className='text-3xl my-4  py-1
                            '
                            >
                                Hey There,
                            </div>

                            <div className='text-xl'
                            >
                                I’m Chris — a backend developer who starts every project at 
                                the drawing board. I love breaking down real problems, exploring 
                                what’s possible, and building clean, scalable systems that get things done.
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col
                    flex-1
                    border-secondary
                    '
                    >
                        <div className='text-[50px] pt-8
                        font-primary px-8 text-light 
                        '
                        
                        >
                            Built From The Problem Up
                        </div>
                        
                        
                        <TechPanel />

                    </div>
                </div>
            </div>
            
            

        </div>
    );
}
 
export default MiddleSection;