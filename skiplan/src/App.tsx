import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const sendMessage = async () => {
    try {
      const response = await fetch('https://test-vv4n.onrender.com/message?name=hi', {
        method: 'GET' // You might need to adjust the method based on your server endpoint
        // You can add headers, body, etc., depending on your API requirements
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Handle success if needed
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error.message);
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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => sendMessage()}>
          Send "hi" to the endpoint
        </button>
      </div>
    </>
  )
}

export default App
