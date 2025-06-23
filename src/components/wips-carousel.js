import { useStateContext } from "@/contexts/state-context";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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


//  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗ 
// ████████╗████████╗████████╗████████╗████████╗████████╗████████╗████████╗
// ╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝
// ████████╗████████╗████████╗████████╗████████╗████████╗████████╗████████╗
// ╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝
//  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝ 





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
//  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗ 
// ████████╗████████╗████████╗████████╗████████╗████████╗████████╗████████╗
// ╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝
// ████████╗████████╗████████╗████████╗████████╗████████╗████████╗████████╗
// ╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝
//  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝ 




//  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗  ██╗ ██╗ 
// ████████╗████████╗████████╗████████╗████████╗████████╗████████╗████████╗
// ╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝
// ████████╗████████╗████████╗████████╗████████╗████████╗████████╗████████╗
// ╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝╚██╔═██╔╝
//  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝ 
export default function WipCarousel() {
  const {setView, wips } = useStateContext();

  const [panels, setPanels] = useState([]);
  const [panelIds, setPanelIds] = useState([]);
  const [index, setIndex] = useState(0);
  const [currentId, setCurrentId] = useState(null);

  const containerRef = useRef(null); // scroll container ➜ observer root

  /* ───────── helper fns (inside component, outside effects) ───────── */

  function createPanelObserver(rootEl, setId, curId, threshold = 0.5) {
    const handleIntersect = (entries) => {
      const top = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (top && top.target.id !== curId) {
        setId(top.target.id);
      }
    };

    return new IntersectionObserver(handleIntersect, { root: rootEl, threshold });
  }

  function observePanels(ids, observer) {
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  /* ───────── original createPanels logic ───────── */

  const createPanels = () => {
    const panelCount = Math.ceil(Object.keys(wips).length / 2);
    const holder = [];
    const final = [];
    const _ids = [];

    Object.keys(wips).forEach((key, idx) => {
      holder.push(wips[key]);
      _ids.push("panel-card-" + idx);
    });


    for (let i = 0; i < panelCount; i++) {
      const start = i * 2;
      const end = start + 2;
      final.push(holder.slice(start, end));
    }

    setPanelIds(_ids);
    setPanels(final);
  };


  const updateIndex = () => {
    const split = currentId.split("-");
    const dex = parseInt(split[split.length - 1]);
    
    setIndex(dex)
  };

  


  /* ───────── build panels/ids once on mount (or when wips change) ───────── */

  useEffect(() => {
    createPanels();
  }, [wips]);

  /* ───────── attach IntersectionObserver ───────── */

  useEffect(() => {
    if (panels.length > 1 && panelIds.length > 0 && containerRef.current) {
      const observer = createPanelObserver(containerRef.current, setCurrentId, currentId);
      observePanels(panelIds, observer);
      return () => observer.disconnect();
    }
  }, [panels, panelIds, currentId]);

  /* ───────── debug: see active id ───────── */

  useEffect(() => {
    if (currentId) {
      updateIndex()
    }
  }, [currentId]);

  /* ───────── navigation helpers (original) ───────── */

  const onForward = () => {
    if (index < panels.length - 1) {
      const newIndex = index + 1;
      const _panel = document.querySelector("#panel-card-" + newIndex);
      _panel?.scrollIntoView({ behavior: "auto", block: "nearest" });
      setIndex(newIndex);
    }
  };

  const onBack = () => {
    if (index > 0) {
      const newIndex = index - 1;
      const _panel = document.querySelector("#panel-card-" + newIndex);
      _panel?.scrollIntoView({ behavior: "auto", block: "nearest" });
      setIndex(newIndex);
    }
  };

  
  /* ───────── render ───────── */
  
  return (
    <motion.div className="relative w-full h-full overflow-hidden flex flex-col font-primary"
    
    exit={{opacity:0}}
    animate={{opacity:1}}
    initial={{opacity:0}}
    >
        
      {/* Scrollable Slides */}
      <div
        id="parent-scroll"
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth flex-1 
        hide-scrollbar
        "
      >
        {panels.map((_panel, dex) => (
          <PanelCard
            key={"panel-card-" + dex}
            id={"panel-card-" + dex}
            panelData={_panel}
            dex={dex}
          />
        ))}
      </div>

      {/* Prev / Next Buttons */}
      {2 > 1 && (
        <div className="w-full flex my-4 mt-auto">
          {index !== 0 ? (
            <button
              aria-label="Previous"
              className=" p-2 rounded-md bg-muted/60 backdrop-blur-sm shadow hover:bg-muted/80 transition-colors flex-1 bg-light flex justify-center mx-3 "
              onClick={onBack}
            >
              <FaChevronLeft className="h-5 w-5" />
            </button>
          ) : (
            <div className="flex-1" />
          )}

          {panels.length > 1 && index !== panels.length - 1 ? (
            <button
              aria-label="Next"
              className=" p-2 rounded-md bg-muted/60 backdrop-blur-sm shadow hover:bg-muted/80 transition-colors flex-1 bg-light flex justify-center mx-3 "
              onClick={onForward}
            >
              <FaChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      )}

      <div className="py-4 px-4"
      >
        <div className="w-20 h-12 bg-primary rounded-md
        flex items-center justify-center
        "

        onClick={() => {
          setView('main')
        }}
        >
          <FaChevronLeft className="text-background"
          size={25}
          />
        </div>
      </div>
    </motion.div>
  );
}

