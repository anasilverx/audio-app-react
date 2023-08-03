import { useState, useEffect } from 'react';
import './App.css';
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';
import axios from 'axios';

function App() {

  const [messages, setMessages] = useState([])

  const addMessage = (newMessageData) => {
    console.log("DEBUG addMessage called")
    console.log("DEBUG newMessageData: " + JSON.stringify(newMessageData))
    if (newMessageData.audio_message != null && newMessageData.audio_message !== "") {
      console.log("DEBUG audio_message non empty")
      axios
        .post('http://127.0.0.1:5000/messages', newMessageData)
        .then((response) => {
          console.log("response data: ", response)
        })
        .catch((error)=> {
          console.log("error: ", error)
        })
    } else {
      console.log("DEBUG audio_message is empty, not POSTING")
    }
  }
  const getMessages = () => {
    axios.get('http://127.0.0.1:5000/messages')
      .then((response) => {
        const messagesData = [];
        response.data.forEach((message) => {
          messagesData.push(message);
        });
        setMessages(messagesData);
      })
      .catch((error) => {
        console.log("error: ", error);
      })
  }
  

  useEffect(getMessages, [])
  
  return (
    <div className="App">
      <h1 className="App-header">
        Create Farewell Message
      </h1>
      <NewMessageForm addMessageCallback={addMessage}></NewMessageForm>
      <MessageList listOfMessages={messages}></MessageList>
      

    </div>
  );
}

export default App;
