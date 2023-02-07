import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function ProductsListComponent() {

    const [products , setProducts] = useState({data: []});


    useEffect(() => {
        getAllProducts();
    }, []);

    // const getAllProducts = () => {
    //     axios.get('https://dummyjson.com/products').then(response => {
    //         console.log(response.data.products);
    //         setProducts({data: response.data.products});
    //     }).catch(error => console.error(error));
    // }

    const getAllProducts = () => {
        axios.get('http://localhost:8077/product/list').then(response => {
            console.log(response.data);
            setProducts({data: response.data});
        }).catch(error => console.error(error));
    }

    const handleDelete = (id) => { // onClick={() => {if(window.confirm('Delete the item?')){this.removeToCollection(key, e)};}}

        axios.delete(`http://localhost:8077/product/delete/` + id).then(response => {
            console.log(response.data);
            alert('Data Deleted successfully');
            getAllProducts();
        }).catch(function (error) {
            console.error(error);
            console.log('Did not delete');
        });


    }

    return (
        <div className='m-5'>
            <table className="table table-striped table-bordered">
                <thead className='table-dark'>
                    <tr>
                        <th className='col-0.5'>ID</th>
                        <th className='col-2'>Title</th>
                        <th className='col-7.5'>Description</th>
                        <th className='col-2'>Action</th>
                    </tr>
                </thead>
                <tbody> {
                    products.data.map((listValue, index) => {
                        return (
                            <tr key={index}>
                                <td>{
                                    listValue.id
                                }</td>
                                <td>{
                                    listValue.name
                                }</td>
                                <td>{
                                    listValue.description
                                }</td>
                                <td>
                                    <Link to={
                                            '/update/' + listValue.id
                                        }
                                        className='btn btn-primary'>Edit</Link>
                                    <button onClick={
                                            () => {
                                                if (window.confirm('Delete the item?')) {
                                                    handleDelete(listValue.id)
                                                };
                                            }
                                        }
                                        className='btn btn-danger'>Delete</button>

                                </td>
                            </tr>
                        );
                    })
                } </tbody>
            </table>
        </div>
    )
}
