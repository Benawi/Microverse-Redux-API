import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUsers from './components/DisplayUser';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ViewUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
