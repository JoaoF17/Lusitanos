import { Route, Routes } from 'react-router-dom';
import './styles.css';
import OurWay from './routes/OurWay';
import TrainingCamps from './routes/TrainingCamps';
import Coaches from './routes/Coaches'
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OurWay />} />
        <Route path="/camps" element={<TrainingCamps />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>        
    </div>
  );
}

export default App;
