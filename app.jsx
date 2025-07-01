// App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import Profile from './pages/student/Profile';
import Marks from './pages/student/Marks';
import Attendance from './pages/student/Attendance';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/students" element={<StudentList />} />

        <Route path="/students/:id" element={<StudentDetail />}>
          <Route path="profile" element={<Profile />} />
          <Route path="marks" element={<Marks />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
