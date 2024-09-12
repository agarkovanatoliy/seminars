import './App.css'
import Counter from './components/counter/counter'
import Greeting from './components/greeting/greeting'
import MessagesList from './components/MessagesList/MessagesList'
import TextDisplayForm from './components/TextDisplayForm/TextDisplayForm'
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher'

const messages = [
  { id: 1, text: 'Hello!'},
  { id: 2, text: 'Cheers!'},
  { id: 3, text: 'Hi!'},
]

function App() {

  return (
    <>
      <Greeting name="Fill"/>
      <Counter/>
      <MessagesList messages={messages} />
      <TextDisplayForm/>
      <ThemeSwitcher/>
    </>
  )
}

export default App
