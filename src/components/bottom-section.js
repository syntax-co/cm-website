import Wave from "./misc/wave";



const BottomSection = () => {
    return (
        <div className='h-1/4 relative
        border-t-2 border-primary px-16
        flex items-center justify-start
        bg-foreground
        '
        >

            <Wave />

            <div className='w-fit  leading-[100%] 
            text-[170px] text-light
            font-display relative


            sm:text-[170px]
            md:text-[170px]
            lg:text-[100px]
            xl:text-[150px]
            '
            >
                chris munoz
            </div>

        </div>
    );
}
 
export default BottomSection;