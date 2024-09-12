import PropTypes from 'prop-types';

function Greeting({ name }) {
  return (
    <p>Привет, {name}!</p>
  );
}

Greeting.propTypes = {
  name: PropTypes.string,
}

export default Greeting;