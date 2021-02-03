
import './App.css';
import { MainPage } from './Components/Pages/MainPage/MainPage.jsx';
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
    <MainPage />
      <EventPage />
      <Routes />
    <Footer/>
    </div>
  );
}

export default App;
