import './App.css';
import Navigation from './components/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Setings from './components/Setings/Setings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
const App = function (props) {
  return (
    <Router>
      <div className="app">
        <div className="header__wrapper">
          <HeaderContainer />
        </div>
        <div className="wrapper">
          <Navigation store={props.store} />
          <div className='content__wrapper'>
            <Routes>
              {/* <Route path="/profile/*" element={<ProfileContainer store={props.store} />} /> */}
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/music" element={<Music store={props.store} />} />
              <Route path="/news" element={<News />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/friends" element={<FriendsContainer />} />
              <Route path="/setings" element={<Setings />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}


export default App;

// Route следит за URL, если там написано, что написано в path то загружается element
