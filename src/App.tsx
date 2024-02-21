import { BrowserRouter, Route, Routes } from 'react-router-dom';
// bootstrap import
import Container from 'react-bootstrap/Container';
// project import
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoItemForm } from './components/TodoItemForm';
import { Home } from './pages/Home';
import { Todo } from './pages/Todo';
import { TodoListView } from './pages/TodoListView';
import { TodoHistoryView } from './pages/TodoHistoryView';
import { TodoDetailsView } from './pages/TodoDetailsView';
import { About } from './pages/About';
import { EmployeeList } from './pages/EmployeeList';
import { Suspense } from 'react';

const App = () => {

  return (
    <Suspense fallback='loading'>
      <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employees' element={<EmployeeList />} />
          <Route path='/todo' element={<TodoForm />} />
          <Route path='/todo/:userName' element={<TodoListView />} />
          <Route path='/todo/:todoId/details' element={<TodoDetailsView />} />
          <Route path='/todo/:todoId/history' element={<TodoHistoryView />} />
          <Route path='/todo/new' element={<TodoForm />} />
          <Route path='/todo/:todoId/items/new' element={<TodoItemForm userName="guest"/>} />
          <Route path='/about' element={<About />} />
        </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}
export default App