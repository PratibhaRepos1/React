import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import Enquiries from './components/Enquiries';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">Course List</Link>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Courses</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/enquiries">Enquiries</Link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <div className="container mt-4">
      <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/enquiries" element={<Enquiries />} />
      </Routes>
  </div>
</Router>
);

export default App;
