
import './App.css';
import { EventCalender } from './Components/Pages/EventInfo/EventCalender';
import { EventInfo } from './Components/Pages/EventInfo/EventInfo';
import { Login } from './Components/Pages/Login/Login';
import { Signup } from './Components/Pages/SignUp/Signup';

function App() {
  return (
    <div className="App">
      {/* <EventInfo/> */}
      <EventCalender/>
    </div>
  );
}

export default App;
