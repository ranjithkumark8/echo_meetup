import './App.css';
import { EventCategories } from './Components/EventCategories';
import { NavBar } from './Components/NavBar';
import { EventPage } from './Components/Pages/MainPage/EventPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <EventCategories />
      <EventPage />
    </div>
  );
}

export default App;
