import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useState, useEffect, SetStateAction, Dispatch} from 'react';

const fetchMessages = async () => {
  try {
    const response = await fetch('http://localhost:3000/getallmessages');
    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching messages:', (error as Error).message);
  }
}

const clearMessage = async (setMessage: Dispatch<SetStateAction<MessageObject>>) => {
  try {
    // const response = await fetch('https://test-vv4n.onrender.com/message?name=hi', {
    const response = await fetch('http://localhost:3000/clearmessage', {

    method: 'GET' // You might need to adjust the method based on your server endpoint
      // You can add headers, body, etc., depending on your API requirements
    });

    if (!response.ok) {
      throw new Error('Failed to clear message');
    }

    // Handle success if needed
    console.log('Message cleared successfully!');
    setMessage({messages: []})
  } catch (error) {
    console.error('Error clearing message:', (error as Error).message);
  }
}

interface MessageObject {
  messages: string[];
}

function Message({ messageObject }: { messageObject: MessageObject }) {
  const messageList: string[] = messageObject.messages || [];
  console.log(messageList);
  return (
    <ul>
    {messageList.map((message, index) => (
      <li key={index}>{message}</li>
    ))}
  </ul>
);
}

function App() {
  const [messageObject, setMessage] = useState<MessageObject>({ "messages": [] }); // Correct state initialization
  useEffect(() => {
    fetchMessages()
      .then((data) => {
        setMessage(data); // Update state with received messages
      })
      .catch((error) => {
        console.error('Error fetching messages:', error.message);
      });
  }, []);
  
  
  const sendMessage = async (setMessage: Dispatch<SetStateAction<MessageObject>>) => {
    try {
      // const response = await fetch('https://test-vv4n.onrender.com/message?name=hi', {
      const response = await fetch('http://localhost:3000/message?name=hi', {
 
      method: 'GET' // You might need to adjust the method based on your server endpoint
        // You can add headers, body, etc., depending on your API requirements
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Handle success if needed
      console.log('Message sent successfully!');
      const resp = await fetchMessages();
      setMessage(resp);
    } catch (error) {
      console.error('Error sending message:', (error as Error).message);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Messages are persisted on backend</h1>
      <div className="card">
        <button onClick={() => sendMessage(setMessage)}>
          Send "hi" to the endpoint
        </button>
        <button onClick={() => clearMessage(setMessage)}>
          Clear messages
        </button>
      </div>
      <Message messageObject={messageObject}/>
    </>
  )
}

export default App
