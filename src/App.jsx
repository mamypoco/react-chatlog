import './App.css';
import { useState } from 'react';
import ChatEntry from './components/ChatEntry';
import initialMessageData from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [messageData, setMessageData] = useState(initialMessageData);
  const [colorChoice1, setColorChoice1] = useState(null);
  const [colorChoice2, setColorChoice2] = useState(null);

  //On heart is clicked, updates liked data with true/false
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

  // unpack the sender names
  const pair = new Set();
  initialMessageData.forEach((message) => {
    pair.add(message.sender);
  });
  const [first, second] = [...pair];

  // colorChoice
  const colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  const updateColorChoice = (color, person) => {
    console.log(color, person);
    if (person === first) {
      setColorChoice1(color);
    } else if (person === second) {
      setColorChoice2(color);
    }
  };

  const renderColorChoices = (person) => {
    return colorChoices.map(color => (
      <ColorChoice
        key={`${person}-${color}`}
        color={color}
        onSelect={() => updateColorChoice(color, person)}
      />
    ))
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Between{' '}
          <span style={{color: colorChoice1}}>{first}</span>{' '}
          and <span style={{color: colorChoice2}}>{second}</span>
        </h1>
        <br></br>
        <section>
          <div>
            <div className="sender-name">
              {first}
            </div>
            <div className='widget'>
              {renderColorChoices(first)}
            </div>
          </div>
          <h1>{likesCount} ❤️s</h1>
          <div>
            <div className="sender-name">
              {second}
            </div>
            <div className='widget'>
              {renderColorChoices(second)}
            </div>
          </div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messageData} 
          updateLikesData={updateLikesData}
          colorChoice1={colorChoice1}
          colorChoice2={colorChoice2}
          first={first}
          second={second}
        />
      </main>
    </div>
  );
};

export default App;
