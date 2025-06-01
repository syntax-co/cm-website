import Wave from "./misc/wave";



const BottomSection = () => {
    return (
        <div className='h-1/3 relative
        border-t-2 border-primary
        flex items-end justify-center
        
        '
        >

            <Wave />

            <div className=' 
            text-[170px] text-foreground
            font-display relative
            '
            >
                chris munoz
            </div>

        </div>
    );
}
 
export default BottomSection;