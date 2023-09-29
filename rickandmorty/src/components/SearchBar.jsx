import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {

const [id, setid] = useState("")

function handleChange (event){
   setid(event.target.value)
   console.log(event.target.value)
}

   return (
      <div className={style.searchbar}>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
