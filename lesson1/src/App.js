import './App.css';
import Greeting from './components/Greeting/Greeting';
import CurrentTime from './components/CurrentTime/CurrentTime';
import NewGreeting from './components/NewGreeting/NewGreeting';
import EventCard from './components/EventCard/EventCard';

function App() {
  return (
    <div className="App">
      <h1>Привет, Мир!</h1>
      <Greeting />
      <CurrentTime />
      <NewGreeting />
      <EventCard name='семинар' date='5 сентября 2024 20.00' location='online' />
      <EventCard name='семинар' date='9 сентября 2024 20.00' location='online' />
      <EventCard name='семинар' date='13 сентября 2024 20.00' location='online' />
    </div>
  );
}



export default App;
