import style from './About.module.css'
export default function About({name}) {
   return (
      <div className={style.about}>
         <h2>{name}Hola mi nombre es Mauro Servin</h2>
      </div>
   );
}