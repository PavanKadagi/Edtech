import './App.css'
import Footer from './components/Footer';
import MainHeading from './components/MainHeading';
import Mentors from './components/Mentors';
import NavBar from './components/NavBar';
import Courses from './components/Courses';

function App() {
  return (
    <>
        <NavBar />
     <MainHeading />    
     <Courses />
     <Mentors />
     <Footer />
    </>
  );
}

export default App;
