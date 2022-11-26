import React,{useEffect, useState} from 'react'
import './Login.css'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {login} from '../../Actions/user'

const Login = () => {

    const dispatch = useDispatch()

    const {loading, error, message} = useSelector(state => state.user)

    useEffect(() => {
        if(message){
            setTimeout(() => {
                dispatch({type: 'clearMessage'})
            }, 3000)
        }
        if(error){
            setTimeout(() => {
                dispatch({type: 'clearError'})
            }, 3000)
        }
    },[error, message])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }


    return (
        <div className='login'>
            <h1 className='heading'>Badhaan - Login System</h1>

            {
                error ? <div className='error'>{error}</div> : 
                message ? <div className='success'>{message}</div> : null
            }
           <div className="login-container">
            <form onSubmit={handleSubmit} style={{width:"400px"}}>
            <h3>Login</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='required-star'>*</span></label>
                    <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label  htmlFor="exampleInputPassword1" className="form-label">Password <span className='required-star'>*</span></label>
                    <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary">Login</button>
                <Link className='link' to="/signup">Not Registered? Signup Now</Link>
            </form>
            </div>
        </div>
    )
}

export default Login