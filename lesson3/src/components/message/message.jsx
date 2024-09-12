import PropTypes from 'prop-types';

function Message({ text }) {
  return (
    <li>{text}</li>
  );
}

Message.propTypes = {
  text: PropTypes.string,
}

export default Message;