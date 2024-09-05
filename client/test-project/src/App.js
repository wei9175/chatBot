import './App.css';
import { useState } from "react";
import axios from 'axios';

function App() {
  const [responses, setResponses] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="text"]');
    const newMessage = input.value;
    // Store the newMessage to the prevMessage
    setMessages(prevMessages => [...prevMessages, newMessage]);

    try {
      const result = await axios.post('http://localhost:3001/api/chat', {
        message: newMessage
      });
      
      setResponses(prevResponses => [...prevResponses, result.data.answer]);
      console.log('Success:', result.data);
    } catch (error) {
      console.error('Error:', error);
      setResponses(prevResponses => [...prevResponses, 'Failed to get response']);
    }

    // Clear the input after sending the message
    input.value = '';
  }

  return (
    <section className='container mx-auto p-5 fixed inset-0'>
      <div className="mockup-window border bg-base-300 w-full h-full flex flex-col">

        <div className='p-5 pb-8 flex-grow overflow-auto'>
          {messages.map((message, index) => (
            <div key={`message-${index}`}>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="User" src="" />
                  </div>
                </div>
                <div className="chat-header">User</div>
                <div className="chat-bubble">{message}</div>
              </div>
              
              {responses[index] && (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Assistant" src="" />
                    </div>
                  </div>
                  <div className="chat-header">Assistant</div>
                  <div className="chat-bubble">{responses[index]}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <form className="form-control m-5 items-center" onSubmit={handleSubmit}>
          <div className="input-group max-w-full relative">
            <input type="text" placeholder="Type a question!" className="input input-bordered flex-grow" required />
            <button className="btn btn-square" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}

export default App;
