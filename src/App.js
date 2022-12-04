import './App.css';
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
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
const App = function (props) {
  return (
    <Router>
      <div className="app">
        <div className="header__wrapper">
          <Header />
        </div>
        <div className="wrapper">
          <Navigation state={props.state.friendPhotos} />
          <div className='content__wrapper'>
            <Routes>
              <Route path="/" element={<Profile store={props.store}/>} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/music" element={<Music state={props.state.music}/>} />
              <Route path="/news" element={<News />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/setings" element={<Setings />} />
              
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}


export default App;

// Route следит за URL, если там написано, что написано в path то загружается element
