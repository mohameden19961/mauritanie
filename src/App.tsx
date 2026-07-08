import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Geography from './pages/Geography';
import Tourism from './pages/Tourism';
import Economy from './pages/Economy';
import Demographics from './pages/Demographics';
import Government from './pages/Government';
import Cuisine from './pages/Cuisine';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Pages from './pages/Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/demographics" element={<Demographics />} />
        <Route path="/government" element={<Government />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;