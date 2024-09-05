import './CurrentTime.css';

function CurrentTime() {
  let date = new Date().toLocaleTimeString();
  return (
      <h2>Текущее время: {date}</h2>
    );
}


export default CurrentTime;