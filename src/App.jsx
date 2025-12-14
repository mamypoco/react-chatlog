import './App.css';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';
import initialMessageData from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageData, setMessageData] = useState(initialMessageData);

  //when heart is clicked, it update liked data with true/false
  const updateLikesData = (messageId) => {
    setMessageData(messages => {
      return messages.map(message => {
        if (message.id === messageId) {
          return {...message, liked: !message.liked};
        } else {
          return message;
        }
      });
    });
  };
  // count the total liked
  const likesCount = messageData.filter(message => message.liked).length;

  const pair = new Set();
  initialMessageData.forEach((message) => {
    pair.add(message.sender);
  });
  const [first, second] = [...pair];

  return (
    <div id="App">
      <header>
        <h1>Chat Between {first} and {second}</h1><br></br>
        <h1>{likesCount} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={messageData} updateLikesData={updateLikesData}/>
      </main>
    </div>
  );
};

export default App;
