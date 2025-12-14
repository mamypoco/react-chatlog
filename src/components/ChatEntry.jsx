import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, liked, timeStamp, updateLikesData}) => {
  const handleLikes = () => {
    updateLikesData(id);
  };


  return (
    <section className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button onClick={()=> handleLikes(id)} className="like">{liked ? '❤️' : '🤍'}</button>
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
  updateLikesData: PropTypes.func.isRequired
};

export default ChatEntry;
