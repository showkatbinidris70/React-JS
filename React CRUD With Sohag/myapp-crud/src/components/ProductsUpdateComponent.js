import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

export default function ProductsUpdateComponent() {

    const [products, setProducts] = useState({id: null, name: '', description: ''});

    const {id} = useParams();

    useEffect(() => {
        findById();
    }, []);

    const findById = () => {
        axios.get(`http://localhost:8077/product/findById/` + id).then(response => {
            setProducts({
                ...response.data
            });
        }).catch(error => console.log(error));
    }


    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8077/product/update/` + id, products).then(response => {
            console.log(response);
            console.log(response.data);
            alert('Data updated successfully');
        }).catch(function (error) {
            console.error(error);
            console.log('Did not update');
        });
        console.log(products);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProducts((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
            <form className="m-5"
                onSubmit={handleUpdate}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">ID</label>
                    <div className="col-sm-6">
                        <input type="number"
                            disabled={true}
                            className="form-control"
                            name='id'
                            value={
                                products.id
                            }
                            onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-6">
                        <input type="text"
                            value={
                                products.name
                            }
                            className="form-control"
                            name='name'
                            onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-6">
                        <input type="text"
                            value={
                                products.description
                            }
                            className="form-control"
                            name='description'
                            onChange={handleChange}/>
                    </div>
                </div>
                <input type='submit' value='Update' className='btn btn-success'/> {/* <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Discount Percentage</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Rating</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Stock</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Brand</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control"/>
                    </div>
                </div> */} </form>
        </div>
    )
}
