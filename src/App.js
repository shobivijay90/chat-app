import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
       height= "100vh"
       projectID="
       dbde9923-6bf6-47a6-9567-2a1e7ff322ef"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
  />
  )
}

export default App