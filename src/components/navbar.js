


const Navbar = () => {
    return (
        <div className="w-full h-[8vh]
        bg-foreground border-b border-primary 
        px-16 flex items-center 
        "
        >
            
            <div className='w-16 aspect-square
            bg-no-repeat bg-contain bg-center
            cursor-pointer
            '
            style={{
                backgroundImage:'url(./images/logo.png)'
            }}
            />
                


        </div>
    );
}
 
export default Navbar;