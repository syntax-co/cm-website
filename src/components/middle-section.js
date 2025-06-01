import ContactCard from "./contact-card";
import ProjectsCard from "./projects-card";




const MiddleSection = () => {
    return (
        <div className='w-full h-2/3 pl-16
        flex'
        >
            
            <div className='flex flex-1
            flex-col'
            >
                

                <div className='flex-1 flex'
                >
                    <div className='w-1/3 bg-secondary
                    border-x-2 border-secondary p-6
                    flex flex-col justify-center
                    font-primary'
                    >

                        <div className='text-3xl my-8  py-1
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

                    <div className='flex-1
                    border-secondary
                    '
                    >
                        <div className='text-[50px] py-2
                        font-primary px-8
                        '
                        
                        >
                            Built From The Problem Up
                        </div>

                    </div>
                </div>
            </div>

            <ContactCard />

            <ProjectsCard />

        </div>
    );
}
 
export default MiddleSection;