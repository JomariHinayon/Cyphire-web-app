import './style/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Browse from './pages/Browse'
import Tutorials from './pages/Tutorial'
import AskCommunity from './pages/AskCommunity'
import Layout2 from './pages/Layout2';
import UserProfile from './pages/UserProfile'
import UserInfo from './components/UserInfo'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        {/* Layout 1 */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>

        <Route path='/' element={<Layout2 />}> 
          <Route path='browse' element={<Browse />} />
          <Route path='tutorials' element={<Tutorials />} />
          <Route path='askcommunity' element={<AskCommunity />} />
          <Route path='userprofile' element={<UserProfile />} />
          <Route path='userinfo' element={<UserInfo />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
