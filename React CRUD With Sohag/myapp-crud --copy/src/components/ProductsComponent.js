import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function ProductsComponent() {
    const [products, setProduct] = useState({name: "", description: ""});

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:8077/product/save",products)
            .then((response=>{
                alert("Saved successfully");
            })).catch(function (error){
                console.log("Not saved");
        });
    }


    const handleChange = (event) => {
        const {name, value} = event.target;
        setProduct((prevState)=>({...prevState, [name]:value}));
    }


    return (
        <div>
            <form className="m-5"
                  onSubmit={handleSubmit}>
                {/* <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">ID</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" name='id'
                            onChange={handleChange}/>
                    </div>
                </div> */}
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name='name'
                               onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name='description'
                               onChange={handleChange}/>
                    </div>
                </div>
                <input type='submit' value='Submit' className='btn btn-success'/> {/* <div className="row mb-3">
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
