import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function UserComponent() {

    const [user, setUser] = useState({username:'',email:'',phone:'',university:'',subject:'',gender:'',date:''});
    
    const handleSubmit  = (event)=>{
        event.preventDefault();
        console.log(user);
      }
      
    const handleChange  = (event)=>{
      const {name,value} = event.target;
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
    
  return (
    <div className='m-4'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">User Name :</label>  
            <div className="col-sm-8">
            <input 
                name='username'
                type='text'
                onChange={handleChange}
                placeholder='User name'
                className='form-control'  
                />
            </div>
      </div>

        <div className="mb-3 row">
        <label  className="col-sm-2 col-form-label"> Email Address : </label>  
            <div  className="col-sm-8">
            <input 
                name='email'
                type='email' 
                onChange={handleChange}
                placeholder='Email' 
                className='form-control'  
                />
            </div>
        </div>
       <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Phone no :</label>  
            <div className="col-sm-8">
            <input 
                name='phone'
                type='number' 
                onChange={handleChange}
                placeholder='Phone number'
                className='form-control'  
                />
            </div>
      </div>
      
        <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Choose University:</label>  
            <div className="col-sm-8">
            <select className='form-select' name='university' onChange={handleChange}>
            
            <option value='Dhaka University'>Dhaka University</option>
            <option value='Kalkata University'>Kalkata University</option>
            <option value='Oxford University'>Oxford University</option>
        </select>
            </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label" >Choose Subject:</label>  
            <div className="col-sm-8">
            <input type="checkbox" value="English" name="subject" defaultChecked  onChange={handleChange}/> English
            <input type="checkbox" value="Bangali" name="subject" onChange={handleChange}/> Bangali
            <input type="checkbox" value="Math" name="subject" onChange={handleChange}/> Math
            <input type="checkbox" value="Other" name="subject" onChange={handleChange}/> Other
            </div>
      </div>
    <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Select Gender:</label>  
            <div className="col-sm-8">
            <input type="radio" value="Male" name="gender" defaultChecked onChange={handleChange}/> Male
        <input type="radio" value="Female" name="gender" onChange={handleChange}/> Female
        <input type="radio" value="Other" name="gender" onChange={handleChange}/> Other
            </div>
      </div>
    <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Date of Birth :</label>  
            <div className="col-sm-8">
            <input 
                name='date'
                type='date' 
                onChange={handleChange}
                placeholder='Date of Birth'
                className='form-control'  
                />
            </div>
      </div>
      
        <input type='submit' value='Submit' className="btn btn-primary"/>
      </form>
    </div>
  )
}
