import Card from './Card';
import style from "./Cards.module.css"

export default function Cards({characters}) {

   return (
    <div className={style.cards}>
      {
      characters.map(({id, name, status, species, gender, image, origin}) => {
         return <Card
         key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         image={image}
         origin={origin.name}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      })
      }
   </div>
   )
}
