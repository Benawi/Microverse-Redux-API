import { BrowserRouter } from 'react-router-dom';
import ViewUsers from './components/DisplayUser';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ViewUsers />
    </BrowserRouter>
  );
}

export default App;
