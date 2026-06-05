import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext.jsx';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Students from './pages/Students.jsx';
import AddStudent from './pages/AddStudent.jsx';
import StudentDetails from './pages/StudentDetails.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Header />
          <Navigation />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/add" element={<AddStudent />} />
              <Route path="/students/:id" element={<StudentDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
