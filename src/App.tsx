import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CenterInfoPage from './pages/CenterInfoPage/CenterInfoPage';
import NoticePage from './pages/NoticePage/NoticePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CounselingPage from './pages/CounselingPage/CounselingPage';
import EducationPage from './pages/EducationPage/EducationPage';
import CounselorInfoPage from './pages/CounselorInfoPage/CounselorInfoPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CenterInfoPage />} path="/CenterInfo/:id" />
        <Route element={<CounselorInfoPage />} path="/CounselorInfo/:id" />
        <Route element={<CounselingPage />} path="/Counseling/:id" />
        <Route element={<EducationPage />} path="/Education/:id" />
        <Route element={<NoticePage />} path="/Notice/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
