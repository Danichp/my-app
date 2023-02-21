import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Routes>
              <Route path='/dialogs' element={<DialogsContainer/>}/>
              <Route path='/profile/:userId' element={<ProfileContainer />}/>
              <Route path='/users' element={<UsersContainer/>}/>
              <Route path='/music' element={<Music />}/>
              <Route path='/settings' element={<Settings />}/>
              <Route path='/news' element={<News />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
