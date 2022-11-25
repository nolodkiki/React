import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setings from './components/Setings/Setings';

const App = function () {
  return (
    <Router>
      <div className="app">
        <div className="header__wrapper">
          <Header />
        </div>
        <div className="wrapper">
          <Navigation />
          <div className='content__wrapper'>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs/*" element={<Dialogs />} />
              <Route path="/music" element={<Music />} />
              <Route path="/news" element={<News />} />
              <Route path="/setings" element={<Setings />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}


export default App;
