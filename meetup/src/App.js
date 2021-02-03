
import './App.css';
import { Routes } from './Routes/Routes';
import { Footer } from './Components/Footer';
import { EventInfo } from './Components/Pages/EventInfo/EventInfo';
import { Login } from './Components/Pages/Login/Login';
import { Signup } from './Components/Pages/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
