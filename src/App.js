import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Letters from './pages/Letters'
import Admin from './pages/Admin'
import 'react-quill/dist/quill.snow.css';
import SideBar from './components/SideBar'

function App() {
  
  return (
    <div>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
