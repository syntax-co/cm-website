import { createContext, useContext, useState } from 'react';

const StateContext = createContext();


;

export const StateProvider = ({ children }) => {

    const [selectedTile,setSelectedTile] = useState('frontend')

    const technologies = {
        frontend: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "ShadCN UI",
            "Framer Motion",
            "React Three Fiber",
            "Auth0 React SDK",
            "Responsive CSS"
        ],
        backend: [
            "FastAPI",
            "Express.js",
            "Python",
            "OpenAI API",
            "MongoDB",
            "JWT / Bearer token auth",
            "RBAC via Auth0",
            "Auth0",
            "Session-based authentication"
        ]
    }

    return (
        <StateContext.Provider value={{
        technologies,
        selectedTile,
        setSelectedTile
        }}>
        {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
