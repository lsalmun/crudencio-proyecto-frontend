import { useState } from "react"
import firebase from "./fireBaseConfig"



function LoginForm (){

let [email,setEmail] = useState('')
let [password,setPassword] = useState('')

function handleInput (e) {
   if(e.target.name === 'email') {

       setEmail(e.target.value)
   } else if (e.target.name === 'password') {
    setPassword(e.target.value)

   }
    }


function handleSubmit (e) {
e.preventDefault()

firebase.auth().signInWithEmailAndPassword(email,password)
.then(user => console.log(user))
.catch(err => console.log(err))

}

return (

<form action="/" method="post" onSubmit={handleSubmit}>

<div>
<div>

<input type='email' name="email"  value={email} onInput={handleInput}/>

</div>



<div>

<input type='password' name="password"  value={password} onInput={handleInput}/>

</div>


<div>

<button>Continuar</button>

</div>



</div>

</form>

)

}
export default LoginForm