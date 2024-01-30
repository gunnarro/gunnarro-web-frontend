import { BrowserRouter, Route, Routes } from 'react-router-dom';
// bootstrap import
import {
  Container
} from 'reactstrap';
// project import
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { ToDo } from './pages/ToDo';
import { About } from './pages/About';
import { Suspense } from 'react';

const App = () => {

  return (
    <Suspense fallback='loading'>
      <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/about' element={<About />} />
        </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}
export default App