import { useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"

import firebase from "./fireBaseConfig"

  

function RegisterForm (){

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

firebase.auth().createUserWithEmailAndPassword(email,password)
.then(user => console.log(user))
.catch(err => console.log(err))

}

return (
    <Container>
        <Row>
            <Col xs="6" className = "offset-3" >

<Form action="/" method="post" onSubmit={handleSubmit} >


<Form.Group className ="mb-3">

<Form.Control type='email' name="email"  value={email} onInput={handleInput}/>

</Form.Group>



<Form.Group className ="mb-3">

<Form.Control type='password' name="password"  value={password} onInput={handleInput}/>

</Form.Group>


<Form.Group>

<Button variant="info">Primary</Button>{' '}

</Form.Group>





</Form>
</Col>
</Row>
</Container>
)

}
export default RegisterForm