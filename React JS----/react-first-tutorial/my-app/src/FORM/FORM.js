import React, {useState} from 'react'
import style from './form.module.css'

export default function FORM() {
    const [user, setUser] = useState({name: '',email: '', password: ''})
    const {name, email, password} = user

    const handleChange = (e) =>{
    //    let fieldName = e.target.name;
    //    if(fieldName === 'name'){
    //     setUser({name: e.target.value, email, password})
    //    }
    //    if(fieldName === 'email'){
    //     setUser({name, email: e.target.value, password})
    //    }
    //    if(fieldName === 'password'){
    //     setUser({name, email, password : e.target.value})
    //    }
    setUser ({...user,[e.target.name]:e.target.value});
    }
    const handalerSubmit = (e) =>{
        console.log(user)
        e.preventDefault();
    }

    return (
        <div>
            <form action='' onSubmit={handalerSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' onChange={handleChange} value={name} required/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' onChange={handleChange}  value={email} required/>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' onChange={handleChange}  value={password} required/>
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}
