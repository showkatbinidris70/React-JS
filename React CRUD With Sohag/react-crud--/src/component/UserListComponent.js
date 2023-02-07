import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function UserListComponent() {


    const [products, setProducts] = useState({data: []});
    useEffect(() => {
        getAllUsers();
    }, []);


    const getAllUsers = () => {
        axios.get("https://dummyjson.com/products").then(response => { // console.log(response.data.data);
            const countries = [];

            // for (let data of response.data.data) {
            // // console.log(data);
            //     const {_id, name, airline: [country]} = data;
            //     countries.push(country);
            //      console.log(country);
            // }
            // setCountry({data: countries});
            console.log(response.data.products);
            setProducts({data: response.data.products});

        }).catch(error => console.error(error));
    };


    return (
        <div>
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Countries</th>
                        <th scope="col">Action</th>
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
                                    listValue.title
                                }</td>
                                <td>{
                                    listValue.description
                                }</td>
                                <td>
                                    <Link to={
                                            '/update/' + listValue.id
                                        }
                                        className="btn btn-primary">Edit</Link>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        );
                    })
                } </tbody>
            </table>
        </div>
    )
}
