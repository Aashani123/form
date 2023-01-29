import './App.css';
import Form from './Components/Form';
import LeaveChart from './Components/LeaveChart';
import Request from './Components/Request';
import { BrowserRouter as Router,Routes,Route,Link, NavLink, BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
     <header>
      <nav>
        <NavLink to="/">Leave Request</NavLink>
        <NavLink to="/LeaveChart">Remaining Leaves</NavLink>
        <NavLink to="/Request">Requested Leaves</NavLink>
      </nav>
     </header>
     <main>
      <Routes>
        <Route index element={<Form />} />
        <Route index element={<LeaveChart />}/>
        <Route index element={<Request />}/>

       
      </Routes>
     </main>
   </BrowserRouter>
  );
}

export default App;
