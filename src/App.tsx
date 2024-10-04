import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';
import AboutPage from './pages/aboutPage/aboutPage';
import ProjectsPage from './pages/projectsPage/projectsPage';
import Layout from './layout/layout';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
