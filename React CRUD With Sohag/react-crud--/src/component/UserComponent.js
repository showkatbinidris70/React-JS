import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

export default function UserComponent() {

    const [user, setUser] = useState({id:'', name:'', country:''});
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      console.log(user);
      axios.post(
        `https://api.instantwebtools.net/v1/airlines`, { user })
               .then(res => {
                 console.log(res);
                 console.log(res.data);
                 alert('Data saved successfully');
             }).catch(function(error){
              console.log(error);
              console.log('Somthing wrong');
             });

    }
    const handleChange=(event)=>{
      const {name, value} =  event.target;
      setUser((prevState)=>({...prevState,[name]:value}));
    }

  return (
    <div className='m-4'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">ID :</label>  
            <div className="col-sm-8">
            <input 
                name='id'
                type='text'
                onChange={handleChange}
                placeholder='ID'
                className='form-control'  
                />
            </div>
      </div>

        <div className="mb-3 row">
        <label  className="col-sm-2 col-form-label"> Name : </label>  
            <div  className="col-sm-8">
            <input 
                name='name'
                type='text' 
                placeholder='Name' 
                onChange={handleChange}
                className='form-control'  
                />
            </div>
        </div>
        <div className="mb-3 row">
        <label  className="col-sm-2 col-form-label"> Country : </label>  
            <div  className="col-sm-8">
            <input 
                name='country'
                type='text' 
                placeholder='country' 
                onChange={handleChange}
                className='form-control'  
                />
            </div>
        </div>
    
    
 
      
        <input type='submit' value='Submit' className="btn btn-primary"/>
      </form>
    </div>
  )
}
