import { createContext, useEffect, useState } from "react";

const NavContext = createContext();

function NavProvider ({children}){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        console.log("Use Effect");
        
        const handler =()=>{
            console.log("Called handler");
            
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', handler);
        
        return(
            ()=>{
                window.removeEventListener('popstate', handler);
            }
        );
    }, []);

    const navigateTo = (path) =>{
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    }

    const valueToShare = {currentPath, navigateTo}

    return(
        <NavContext.Provider value={valueToShare}>
            {children}
        </NavContext.Provider>
    )
}

export {NavContext}
export default NavProvider;
