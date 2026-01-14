import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, liked, timeStamp, updateLikesData, textColor, first}) => {
  const handleLikes = () => {
    updateLikesData(id);
  };

  return (
    <section className={`chat-entry ${sender === first ? 'local': 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p style={{color: textColor}}>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button onClick={handleLikes} className="like">{liked ? '❤️' : '🤍'}</button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  updateLikesData: PropTypes.func,
  textColor: PropTypes.string,
  first: PropTypes.string
};

export default ChatEntry;
