import './App.css';
import './components/ProjectPage.css'
//import ProjectData from './components/ProjectData';
import ProjectData2 from './components/ProjectData2';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import OpenProj from './components/Pages/OpenProj';
import NewProj from './components/Pages/NewProj';
import DeadlineProj from './components/Pages/DeadlineProj';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import NotFound from './components/Pages/NotFound';


function App() {
  return (
    <div className="App">
      {/* <ProjectData></ProjectData> */}

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/openProj" element={<OpenProj />} />
          <Route path="/newProj" element={<NewProj />} />
          <Route path="/deadlineProj" element={<DeadlineProj />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/project2" element={<ProjectData2 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
