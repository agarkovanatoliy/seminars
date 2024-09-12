import Message from "../message/message";
import PropTypes from 'prop-types';


function MessagesList({ messages }) {
  return (
    <ul>
      {messages.map((message) => <Message key={message.id} text={message.text}/>)}
    </ul>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default MessagesList;