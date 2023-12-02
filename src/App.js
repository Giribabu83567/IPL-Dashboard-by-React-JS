import './App.css';

import {Routes, Route} from 'react-router-dom'

import Home from './Components/Home';
import TeamsPage from './Components/Team';
import NotFound from './Components/NotFound';

function App() {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/team/:id' element={<TeamsPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
   </>
  )
}

export default App;
