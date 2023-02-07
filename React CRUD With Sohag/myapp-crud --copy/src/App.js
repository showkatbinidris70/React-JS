import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductsComponent from './components/ProductsComponent';
import ProductsListComponent from './components/ProductsListComponent'
import ProductsUpdateComponent from './components/ProductsUpdateComponent'
import css from './style.css'
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import Profile from "./components/profile";



function App() {
    return (
        <div>

            <BrowserRouter>
                <ul>
                    <li>
                        <Link to='/save' className={"link-item"}>
                            Add Products</Link>
                    </li>
                    <li>
                        <Link to='/list' className={"link-item"}>
                            Products List</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path='save'
                        element={<ProductsComponent/>}></Route>
                    <Route path='list'
                        element={<ProductsListComponent/>}></Route>
                    <Route path='/update/:id'
                        element={<ProductsUpdateComponent/>}></Route>
                    {/* <Route path='/delete/:id'
                        element={<ProductsUpdateComponent/>}></Route> */} </Routes>
            </BrowserRouter>
            <LoginButton />
            <LogoutButton />
            <Profile />
        </div>
    );
}

export default App;
