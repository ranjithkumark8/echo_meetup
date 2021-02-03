
import './App.css';
import { EventCategories } from './Components/EventCategories';
import { NavBar } from './Components/NavBar';
import { EventPage } from './Components/Pages/MainPage/EventPage';
import { Routes } from './Routes/Routes';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <EventCategories /> */}
      <EventPage />
      <Routes />
    <Footer/>
    </div>
  );
}

export default App;
