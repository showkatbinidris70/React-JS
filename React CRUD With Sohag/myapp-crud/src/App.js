import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductsComponent from './components/ProductsComponent';
import ProductsListComponent from './components/ProductsListComponent'
import ProductsUpdateComponent from './components/ProductsUpdateComponent'
import LoginButton from './components/LoginButton';


function App() {
    return (
        <div>
            <LoginButton />
            <BrowserRouter>

                <ul>
                    <li>
                        <Link to='/save'>
                            Add Products</Link>
                    </li>
                    <li>
                        <Link to='/list'>
                            Products List</Link>
                    </li>
                </ul>

                <Routes>
                    <Route path='save'
                        element={<ProductsComponent />}></Route>
                    <Route path='list'
                        element={<ProductsListComponent />}></Route>
                    <Route path='/update/:id'
                        element={<ProductsUpdateComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
