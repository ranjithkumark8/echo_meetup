import './App.css';
import { EventCategories } from './Components/EventCategories';
import { NavBar } from './Components/NavBar';
import { EventPage } from './Components/Pages/MainPage/EventPage';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <EventCategories /> */}
      <EventPage />
      <Routes />
    </div>
  );
}

export default App;
