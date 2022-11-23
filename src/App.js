import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

const App = function () {
  return (
    <div className="app">
      <div className="header__wrapper">
        <Header />
      </div>
      <div className="wrapper">
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}


export default App;
