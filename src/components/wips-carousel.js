import { useStateContext } from "@/contexts/state-context";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const WipCard = ({data}) => {

    const {statusColors} = useStateContext()
    const [text,setText] = useState('')
    

    const getText = async() => {
        const result = await fetch(data.description)
        const text = await result.text()
        setText(text)
    }

    useEffect(() => {
        getText()
    }, []);

    return(
        <div className="h-[45%] text-light
        glass-card rounded-md my-auto p-4
        flex flex-col
        "
        >

            <div className="text-4xl
            p-2"
            >
                {data&&data.name}
            </div>

            <div className="my-auto mx-2"
            >
                {text}
            </div>
            
            <div className='mt-auto'>
                <div className="w-fit py-1 px-4 text-background
                text-base rounded-full ml-auto mb-4"
                style={{
                    backgroundColor:statusColors[data.status]
                }}
                >
                    {data&&data.status.slice(0,1).toUpperCase()+data.status.slice(1)}
                </div>
            </div>

        </div>
    )
}



const PanelCard = ({panelData,dex}) => {

    

    return(
        <div id={'panel-card-'+dex} className=" min-w-[80vw] h-5/6  my-auto mx-auto
        flex flex-col snap-center shrink-0 w-full  items-center px-6 py-10 space-y-4"
        
        >
            
            {
                panelData&&
                panelData.map((data,dex) => {

                    return(
                        <WipCard key={'wip-card-'+dex} data={data} />
                    )
                })
            }
        </div>
    )
}


export default function WipCarousel({}) {
    const {wips} = useStateContext()
    const [panels,setPanels] = useState([])
    const [index,setIndex] = useState(0)
    const [currentId, setCurrentId] = useState(null);
    const [panelIds,setPanelIds] = useState([])


    // Helpers defined within the component but outside useEffect
    function createPanelObserver(setCurrentId, currentId, threshold) {
        const handleIntersect = (entries) => {
        const top = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (top && top.target.id !== currentId) {
            setCurrentId(top.target.id);
        }
        };

        return new IntersectionObserver(handleIntersect, { threshold });
    }

    function observePanels(panelIds, observer) {
        panelIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
        });
    }

    const createPanels = () => {

        const panelCount = Math.ceil(Object.keys(wips).length/2)
        const holder = []
        const final = []
        // create panel ids
        const _ids = []
        
        Object.keys(wips).forEach((key,index) => {
            holder.push(wips[key])
            _ids.push('panel-card-'+index)
        });



        for (let i = 0; i < panelCount; i++) {

            const start = i*2
            const end = start+2

            const section = holder.slice(start,end)
            
            final.push(section)
        }

        for (let i = 0; i < panelCount; i++) {

            const start = i*2
            const end = start+2

            const section = holder.slice(start,end)
            
            final.push(section)
        }


        

        setPanelIds(_ids)
        setPanels(final)
    }


    const onForward = () => {

        if (index < panels.length-1) {
            const newIndex = index+1
            const _panel = document.querySelector('#panel-card-'+newIndex)
            
            _panel.scrollIntoView({ behavior: 'auto', block: 'nearest' });

            setIndex(newIndex)
        }
    }

    const onBack = () => {

        if (index > 0) {
            const newIndex = index-1
            const _panel = document.querySelector('#panel-card-'+newIndex)
            _panel.scrollIntoView({ behavior: 'auto', block: 'nearest' });

            setIndex(index-1)
        }

    }

    const handelScrollEnd = () => {

        const parent = document.querySelector('#parent-scroll')
        const slideWidth = parent.clientWidth;          // or fixed value
        const idx = Math.round(parent.scrollLeft / slideWidth);
        setIndex(idx)

    }




    ``
    useEffect(() => {
        if (panels.length>1 && panelIds.length>0) {
            const observer = createPanelObserver(setCurrentId, currentId);
            observePanels(panelIds, observer);
            
            
            return () => observer.disconnect();
        }
    }, [panels,panelIds]);


    useEffect(() => {
        createPanels()

        const parent = document.querySelector('#parent-scroll')
        
        parent.addEventListener('scrollend',handelScrollEnd)

        return () => {
            parent.removeEventListener('scrollend',handelScrollEnd)
        }
    }, []);

    
    return (
        <div className="relative w-full h-full overflow-hidden
        flex flex-col
        font-primary">

            {/* Scrollable Slides */}
            <div id='parent-scroll'
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth
            flex-1 "
            >

                {
                    panels.map((_panel,dex) => {
                        
                        return(
                            <PanelCard key={'panel-card-'+dex} panelData={_panel} 
                            dex={dex}
                            />
                        )
                    })
                }
            
            </div>
            


            {/* Prev / Next Buttons – now located near the bottom */}
            {2 > 1 && (
                <div className="w-full flex my-4 mt-auto"
                >
                    {
                        !(index==0)?
                        <button
                        aria-label="Previous"
                        className=" p-2 rounded-md bg-muted/60 backdrop-blur-sm shadow hover:bg-muted/80 transition-colors
                        flex-1 bg-light flex justify-center mx-3
                        "
                        onClick={onBack}
                        >
                            <FaChevronLeft className="h-5 w-5" />
                        </button>:
                        <div className="flex-1"
                        >

                        </div>
                    }

                    {
                        (panels.length>1&&index!=panels.length-1)?
                        <button
                        aria-label="Next"
                        className=" p-2 rounded-md bg-muted/60 backdrop-blur-sm shadow hover:bg-muted/80 transition-colors
                        flex-1 bg-light flex justify-center mx-3
                        "
                        onClick={onForward}
                        >
                            <FaChevronRight className="h-5 w-5" />
                        </button>:
                        <div className="flex-1"
                        >
                            
                        </div>
                    }
                </div>
            )}

            {/* Indicators */}
            {2 > 1 && (
            <div className="w-full h-10 bottom-4  left-1/2 flex space-x-2
            items-center justify-center
            ">
                {/* {items.map((_, i) => (
                <span
                    key={i}
                    className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-primary" : "bg-muted-foreground/40"
                    }`}
                />
                ))} */}
            </div>
            )}
        </div>
    );
}
