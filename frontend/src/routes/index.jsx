import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Palindromo from '../components/Palindromo';
import Navbar from "../components/Navbar";
import ScrollButton from '../components/ScrollButton';

const RouteList = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Palindromo />} />

      </Routes>
      <ScrollButton />
    </BrowserRouter>
  );
};

export default RouteList;
