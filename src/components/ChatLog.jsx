import ChatEntry from './ChatEntry';

const ChatLog = ({ entries, updateLikesData}) => {
  const chatEntryComponent = entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        updateLikesData={updateLikesData}
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