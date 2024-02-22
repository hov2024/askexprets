import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Home, Pages, Services, Work, Team, Gelari, Blog, ContactUs, } from './pages';


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/pages' element={<Pages />} />
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/gelari' element={<Gelari />} />
          <Route path='/blog' element={<Blog />} />
        </Routes> 
     </BrowserRouter>  
    </>
  );
}

export default App;
