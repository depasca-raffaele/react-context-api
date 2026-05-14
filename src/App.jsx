import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Catalog from './pages/Catalog';
import ChiSiamo from './pages/ChiSiamo';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path='/catalog/:id' element={<ProductDetail />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
      </Routes>
    </Router>
  )
}

export default App