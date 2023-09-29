import SearchBar from "./SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom"

export default function Nav ({onSearch}) {
    return (
     <div className={style.nav}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
       
     <SearchBar onSearch={onSearch}/>
     
     </div>
    );
}