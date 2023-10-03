import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAlbum from './Components/AddAlbum';
import SearchAlbum from './Components/SearchAlbum';
import ViewAlbum from './Components/ViewAlbum';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<AddAlbum/>}/>
      <Route path='/searcha' exact element={<SearchAlbum/>}/>
      <Route path='/viewa' exact element={<ViewAlbum/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
