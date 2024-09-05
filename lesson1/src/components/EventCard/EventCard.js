import './EventCard.css'

function EventCard(props) {
  return (
    <p className='EventCard' >Название: {props.name}! Дата проведения: {props.date}! Место встречи: {props.location}.</p>
  );
}

export default EventCard;