import { Route, Routes, Navigate } from 'react-router-dom';
import JobBoard from './pages/JobBoard';
import JobDetailed from './pages/JobDetailed';
import Layout from './components/Layout/Layout';

import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to={`/job-board/page=${':page' ? 1 : ':page'}`} />} />
        <Route path='/job-board/page=:page' element={<JobBoard />} />
        <Route path='/job-board/page=:page/:jobsId' element={<JobDetailed />} />
      </Routes>
    </Layout>
  );
}

export default App;
