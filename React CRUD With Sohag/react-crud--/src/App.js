import './App.css';
import NavbarComponent from './component/NavbarComponent'
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import UserComponent from './component/UserComponent';
import UserListComponent from './component/UserListComponent'

function App() {
  return (
    <div>
      
       <BrowserRouter>
           <NavbarComponent />
          <Routes>
            <Route path="/save" element={<UserComponent />}>++ Add Users</Route>
            <Route path="/list" element={<UserListComponent />}>++ Add Users</Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
