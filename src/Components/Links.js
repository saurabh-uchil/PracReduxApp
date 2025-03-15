import { useContext } from 'react'
import { NavContext } from '../Context/NavContext'
import "../CSS/Links.css";

export default function Links({path, children}) {
    const {navigateTo} = useContext(NavContext);
    
    const handleClick = (e)=>{
        e.preventDefault();
        navigateTo(path);
    }
  return (
    <a href={path} onClick={handleClick}>{children}</a>
  )
}
