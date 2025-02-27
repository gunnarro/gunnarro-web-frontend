// react import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// bootstrap import
import Container from 'react-bootstrap/Container';
// project import
import "./i18n";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { TodoItemForm } from './components/TodoItemForm';
import { EditTodoItemForm } from './components/EditTodoItemForm';
import { TodoAddParticipantForm } from './components/TodoAddParticipantForm'
import { Login } from './pages/Login';
import { RegisterUser } from './pages/RegisterUser';
import { Home } from './pages/Home';
import { About } from './pages/about/About';
import { GenderEqualityPlan } from './pages/about/GenderEqualityPlan';
import { HMSPlan } from './pages/about/HMSPlan';
import { EmployeeList } from './pages/employee/EmployeeList';
import { TodoAdminView } from './pages/todo/TodoAdminView';
import { TodoListView } from './pages/todo/TodoListView';
import { TodoHistoryView } from './pages/todo/TodoHistoryView';
import { TodoDetailsView } from './pages/todo/TodoDetailsView';
import { TodoParticipantDetails } from './pages/todo/TodoParticipantDetails';
import { Cv } from './pages/cv/Cv';
import { Projects } from './pages/cv/Projects';
import { Availability } from './pages/employee/Availability';

const App = () => {
  return (
  <Container fluid>
      <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<RegisterUser />} />
              <Route path='/employees' element={<EmployeeList />} />
              <Route path='/employees/:employeeId/cv' element={<Cv />} />
              <Route path='/employees/:employeeId/projects' element={<Projects />} />
              <Route path='/employees/:employeeId/availability' element={<Availability />} />
              <Route path='/todo/admin' element={<TodoAdminView />} />
              <Route path='/todo' element={<TodoForm />} />
              <Route path='/todo/:userName' element={<TodoListView />} />
              <Route path='/todo/:todoId/details' element={<TodoDetailsView />} />
              <Route path='/todo/:todoId/participants' element={<TodoAddParticipantForm />} />
              <Route path='/todo/:todoId/participants/:participantId' element={<TodoParticipantDetails />} />
              <Route path='/todo/:todoId/history' element={<TodoHistoryView />} />
              <Route path='/todo/new' element={<TodoForm />} />
              <Route path='/todo/:todoId/items/new' element={<TodoItemForm />} />
              <Route path='/todo/:todoId/items/:todoItemId/edit' element={<EditTodoItemForm userName="guest"/>} />
              <Route path='/about/about' element={<About />} />
              <Route path='/about/gender-equality-plan' element={<GenderEqualityPlan />} />
              <Route path='/about/hms-plan' element={<HMSPlan />} />
            </Routes>
          </BrowserRouter>
      <Footer />
  </Container>
  )
}
export default App