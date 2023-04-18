import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CenterInfoPage from './pages/CenterInfoPage/CenterInfoPage';
import CounselingInfoPage from './pages/CounselingInfoPage/CounselingInfoPage';
import ProgramInfoPage from './pages/ProgramInfoPage/ProgramInfoPage';
import NoticePage from './pages/NoticePage/NoticePage';

function App() {
  return (
    <div className="App">
      <div className="bg-amber-300">Init</div>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CenterInfoPage />} path="/CenterInfo" />
        <Route element={<CounselingInfoPage />} path="/CounselingInfo" />
        <Route element={<ProgramInfoPage />} path="/ProgramInfo" />
        <Route element={<NoticePage />} path="/Notice" />
      </Routes>
    </div>
  );
}

export default App;
