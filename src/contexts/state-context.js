import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

import projects from '@/json_files/projects.json'
import technologies from '@/json_files/technologies.json'
import wips from '@/json_files/wips.json'

const StateContext = createContext();


export const StateProvider = ({ children }) => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState(router.asPath);
    const [selectedTile,setSelectedTile] = useState('frontend')
    const [selectedProject,setSelectedProject] = useState(Object.keys(projects)[0])
    const [view,setView] = useState('main')
    const [viewTech,setViewTech] = useState(false)
    const [screenSize,setScreenSize] = useState('xl')
    const [viewMobileMenu,setViewMobileMenu] = useState(false)
    const [viewProject,setViewProject] = useState(false)
    const [biggerScreen,setBiggerScreen] = useState(false)
    
    const statusColors = {
        active:'#7ff097',
        paused:'#fffd81',
        abandoned:'#ff596f'
    }

    const pages = {
        'projects':'/projects',
        'about':'/about',
        "Let's Work Together":'/lets-work-together'
    }
                                                                                              
                                                                                              
    // █████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗
    // ╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝

    const toggleViewTech = () => {
        setViewTech(!viewTech);
    }
    
    const toggleMobileMenu = () => {
        setViewMobileMenu(!viewMobileMenu)
    }

    const toggleViewProject = () => {
        setViewProject(!viewProject)
    }
                                                                                              
    const handleRouteChange = (url) => {
        setCurrentPath(url);
    };

    function checkScreen() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        let size

        if (width < 360) {
            size = 'sm'; // small (mobile)
        } else if (width < 768) {
            size = 'md'; // medium (tablet)
        } else if (width < 1024) {
            size = 'lg'; // large (laptop)
        } else if (width < 1536) {
            size = 'xl'; // extra large (desktop)
        } else {
            size = '2xl'; // 2x large
        }

        setScreenSize(size)
    }

    const checkBiggerScreen = () => {
        if (screenSize=='lg'||screenSize=='xl'||screenSize=='2xl') {
            
            setBiggerScreen(true)
        } else {
            setBiggerScreen(false)
        }
    }



    useEffect(() => {
        checkBiggerScreen()
    }, [screenSize]);
    
    
    useEffect(() => {
        checkScreen()



        router.events.on('routeChangeComplete', handleRouteChange);
        window.addEventListener('resize',checkScreen)

        // Clean up the event listener
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            window.removeEventListener('resize', checkScreen)
        };
    }, [router]);


    return (
        <StateContext.Provider value={{
        statusColors,
        technologies,
        projects,
        wips,
        selectedTile,
        currentPath,
        selectedProject,
        view,
        screenSize,
        viewTech,
        viewMobileMenu,
        pages,
        viewProject,
        biggerScreen,
        setSelectedTile,
        setSelectedProject,
        setView,
        toggleViewTech,
        toggleMobileMenu,
        toggleViewProject
        }}>
        {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
