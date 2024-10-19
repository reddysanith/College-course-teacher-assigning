import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import TeacherProfiles from './components/TeacherProfiles';
import ConfirmationPage from './components/ConfirmationPage';
import CourseSelection from './components/CourseSelection'; // Import the CourseSelection component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course-selection" element={<CourseSelection />} />
        <Route path="/teacher-profiles" element={<TeacherProfiles />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
