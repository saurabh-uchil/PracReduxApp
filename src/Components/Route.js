import { useContext } from 'react'
import { NavContext } from '../Context/NavContext'

export default function Route({path, children}) {
    const {currentPath} = useContext(NavContext);
    
    if(path === currentPath){
        return children;
    }

}
