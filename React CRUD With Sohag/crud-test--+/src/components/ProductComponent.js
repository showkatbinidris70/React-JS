import {useState} from "react";
import axios from "axios"


function ProductComponent() {
    const [product, setProduct] = useState({productName:"",productDesc:""});
    const handelSubmit=(event)=>{
        event.preventDefault();
       axios.post('http://localhost:8077/product/save',product)
           .then(response=>{
               alert("saved");
           }).catch(function (error){
               console.log("Not");
       });

    }

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setProduct(prevState => ({...prevState, [name]:value}))
    }

    return (
        <div className="p-3">
            <form onSubmit={handelSubmit}>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Product Name</label>
                    <div className="col-sm-6">
                        <input type="text" onChange={handleChange} name="productName" className="form-control"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Product Description</label>
                    <div className="col-sm-6">
                        <input type="text" onChange={handleChange} name="productDesc" className="form-control"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default ProductComponent;