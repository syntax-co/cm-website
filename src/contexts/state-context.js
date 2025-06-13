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
    const [screenSize,setScreenSize] = useState('sm')
    const [viewMobileMenu,setViewMobileMenu] = useState(false)

    const pages = {
        'projects':'/projects',
        'about':'/about',
        "Let's Work Together":'/contact'
    }
                                                                                              
                                                                                              
    // █████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗
    // ╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝

    const toggleViewTech = () => {
        setViewTech(!viewTech);
    }
    
    const toggleMobileMenu = () => {
        setViewMobileMenu(!viewMobileMenu)
    }
                                                                                              
    const handleRouteChange = (url) => {
        setCurrentPath(url);
        console.log('Updated path:', url); // optional logging
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
        setSelectedTile,
        setSelectedProject,
        setView,
        toggleViewTech,
        toggleMobileMenu,
        pages
        }}>
        {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
