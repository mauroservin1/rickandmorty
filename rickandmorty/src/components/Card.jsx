import style from "./Card.module.css"
import {Link} from "react-router-dom"
import { addFav, removeFav} from "../redux/actions";
import { connect} from "react-redux";
import { useState } from "react";

function Card(props) {
  
   const [isFav, setisFav] = useState(false)
   
   
   function handlefavorite(){
      
      if (isFav){setisFav(false)
      props.removeFav(props)
      }
      else {setisFav(true)
      props.addFav(props)
      }
   }

   return (

      <div className={style.card}>
          
          {
   isFav ? (
      <button onClick={handlefavorite}>❤️</button>
   ) : (
      <button onClick={handlefavorite}>🤍</button>
   )
}
         <button onClick={()=>{props.onClose(props.id)}}>X</button>
         <Link to={`/detail/${props.id}`} >
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt= {''} />
      </Link> 
      </div>
   );
}
function mapDispatchToProps (dispatch) {
      return {
         addFav :(char)=> {dispatch(addFav(char));},
         removeFav :(id)=> {dispatch(removeFav(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card);

