import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import projects from '@/json_files/projects.json'
import technologies from '@/json_files/technologies.json'

const StateContext = createContext();


export const StateProvider = ({ children }) => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState(router.asPath);
    const [selectedTile,setSelectedTile] = useState('frontend')
    const [selectedProject,setSelectedProject] = useState(Object.keys(projects)[0])

    
    const handleRouteChange = (url) => {
        setCurrentPath(url);
        console.log('Updated path:', url); // optional logging
    };

    useEffect(() => {

        router.events.on('routeChangeComplete', handleRouteChange);

        // Clean up the event listener
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);


    return (
        <StateContext.Provider value={{
        technologies,
        projects,
        selectedTile,
        currentPath,
        selectedProject,
        setSelectedTile,
        setSelectedProject
        }}>
        {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
