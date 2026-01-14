import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

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
        first={first}
      />
    );
  });
  return (
    <>
      {chatEntryComponent}
    </>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  updateLikesData: PropTypes.func,
  colorChoice1: PropTypes.string,
  colorChoice2: PropTypes.string,
  first: PropTypes.string,
};

export default ChatLog;