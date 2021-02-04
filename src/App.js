
import './App.css';
import React, {useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase';



function App() {
const [input, setInput] = useState('');
const [messages, setMessages] = useState([
        
       ]
    )
    console.log(messages);
const [username, setUsername] = useState('');

useEffect(() => {
      setUsername(prompt('please enter your name'));
},[])

useEffect(() => {
      db.collection('messages')
      .orderBy("timestamp", 'desc')
      .onSnapshot(snapshot =>{
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
}, [])

const send = (event) =>{

  event.preventDefault();
  db.collection("messages").add({
    message: input,
    username:username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()

  })

  
  setInput(''); 
}
  return (
    <div className="App">
        <h4>Messenger</h4>
      <form> 
      <FormControl>
          <InputLabel >Enter a messege...</InputLabel>
          <Input  value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={send} >Send</Button>
      </FormControl> 
          
          
      </form>  
      {messages.map(message => (
           <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
