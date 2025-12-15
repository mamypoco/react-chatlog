import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLikesData, colorChoice1, colorChoice2, first}) => {

  const chatEntryComponent = entries.map((entry) => {
    const textColor = entry.sender === first ? colorChoice1 : colorChoice2;

    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLikesData={updateLikesData}
        textColor={textColor}
      />
    );
  });
  return (
    <>
      {chatEntryComponent}
    </>
  );
};

export default ChatLog;