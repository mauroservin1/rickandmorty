import style from "./Form.module.css"
import { useState } from "react";
import validation from '../validation'
import styles from '../validation.module.css'
import login from '../App'
export default function Form (props) {
   console.log(props)
    const {login} = props
    const [userData, setuserData] = useState({
        email:"",
        password:"",
     })

     const [errors, seterrors] = useState({
     })

     function handleInputChange (event){
        setuserData({...userData, [event.target.name] : event.target.value})
        seterrors(validation({...userData, [event.target.name] : event.target.value}))
     }
     function handleSubmit (e){
      e.preventDefault()
      console.log(userData)
      login(userData)
     }
    return (
        <div className={style.form}>
          <form onSubmit={handleSubmit}>
        <img src="https://e1.pngegg.com/pngimages/382/659/png-clipart-dibujitos-animados-bob-esponja-by-jeniferromerog-d3ln0y2-icon-thumbnail.png" alt="none"/>
           <div>
           <label>Email:</label>
           <input type="text" name="email" value={userData.email} onChange={handleInputChange}></input>
      {errors.e1 && <p className={styles.error}>{errors.e1}</p>}
      {errors.e2 && <p className={styles.error}>{errors.e2}</p>}
      {errors.e3 && <p className={styles.error}>{errors.e3}</p>}
           </div>
        <div>
           <label>Password:</label>
           <input type="password" name="password" value={userData.password} onChange={handleInputChange}></input>
           {errors.p1 && <p className={styles.error}>{errors.p1}</p>}
      {errors.p2 && <p className={styles.error}>{errors.p2}</p>}
        </div>
           <button type="submit">LOGIN</button>
        
           </form>
        </div>
    );
   }