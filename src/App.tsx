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
import Faune from './pages/Faune';
import Langues from './pages/Langues';
import Artisanat from './pages/Artisanat';
import Musique from './pages/Musique';
import Education from './pages/Education';
import Transport from './pages/Transport';
import Religion from './pages/Religion';
import Sports from './pages/Sports';

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
        <Route path="/faune" element={<Faune />} />
        <Route path="/langues" element={<Langues />} />
        <Route path="/artisanat" element={<Artisanat />} />
        <Route path="/musique" element={<Musique />} />
        <Route path="/education" element={<Education />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/religion" element={<Religion />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;