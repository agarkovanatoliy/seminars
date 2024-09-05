function NewGreeting() {
  const date = new Date().getHours();
  let hello = '';
    if (date >= 0 && date < 6){
      hello = 'Доброй ночи!';
    } else if (date >= 6 && date < 12){
      hello = 'Доброе утро!';
    } else if (date >= 12 && date < 18){
      hello = 'Добрый день!';
    } else {
      hello = 'Добрый вечер!';
    }
    return (
      <h1>{hello}</h1>
    )
}

export default NewGreeting;