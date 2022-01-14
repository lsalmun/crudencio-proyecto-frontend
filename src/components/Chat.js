import {useEffect, useState} from 'react'

import io from 'socket.io-client'

const socket = io('http://localhost:5000')






function Chat (){


let [conversationid, setconversationid] = useState(null)
let [conversation, setConversation] = useState ([])
let [message, setMessage] = useState({text : ''})


useEffect (function () {

    receiveMessage()
}, [conversation])


function receiveMessage() {

    socket.on('newConversation', data => {

        setconversationid(data.id)
    })

    socket.on('outputMessage', data => {
        setConversation(conversation.concat(data))
})
}

function sendMessage (e){
    e.preventDefault()

    socket.emit('incomingMessage', {conversationid, message : message.text})
    setConversation(conversation.concat(message))
    setMessage({text : ''})
}

function handleInput(e) {

    setMessage({text : e.target.value})
}

function closeConversation (){

    socket.emit ('closeConversation', {conversationid})
}


return (
<div>
    
    <ul>
    {conversation.map(message => <li>{message.text}</li>)}

    </ul>
    
    <textarea onInput = {handleInput} value = {message.text}></textarea>


<button onClick = {sendMessage}>Enviar</button>

<div>

    <button onClick = {closeConversation}>Finalizar</button>
</div>



    </div>



)
}
export default Chat