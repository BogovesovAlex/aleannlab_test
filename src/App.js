import { Route, Routes, Navigate } from 'react-router-dom';
import JobBoard from './pages/JobBoard';
import JobDetailed from './pages/JobDetailed';
import Layout from './components/Layout/Layout';
import { useState } from 'react';

function App() {
  const [pageId, setPageId] = useState('');

  const getPageId = (id) => {
    setPageId(id)
  }
  return (
    <Layout pageId={pageId}>
      <Routes>
        <Route path='/' element={<Navigate to={'/job-board/page=1'} />} />
        <Route path='/job-board/page=:page' element={<JobBoard />} />
        <Route path='/job-board/page=:page/:jobsId' element={<JobDetailed onPageId={getPageId}/>} />
      </Routes>
    </Layout>
  );
}

export default App;
