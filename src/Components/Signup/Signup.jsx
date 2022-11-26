import React,{useState, useEffect} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {register} from '../../Actions/user'

const Signup = () => {

    const dispatch = useDispatch();

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [place, setPlace] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password, phone, place))
    }

    return (
        <div className='signup'>
            <h1 className='heading'>Badhaan - Login System</h1>

            {
                error ? <div className='error'>{error}</div> : 
                message ? <div className='success'>{message}</div> : null
            }

           <div className="signup-container">
            <h3>Signup</h3>
            <form onSubmit={handleSubmit} style={{width:"400px"}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name <span className='required-star'>*</span></label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} required={true} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone <span className='required-star'>*</span></label>
                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} required={true} type="number" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPlace" className="form-label">Place <span className='required-star'>*</span></label>
                    <input value={place} onChange={(e)=>setPlace(e.target.value)} required={true} type="text" className="form-control" id="exampleInputPlace" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='required-star'>*</span></label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} required={true} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password <span className='required-star'>*</span></label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} required={true} type="password" className="form-control" id="exampleInputPassword" />
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary">Signup</button>
                <Link to="/login">Already Registered? Login Now</Link>
            </form>
            </div>
        </div>
    )
}

export default Signup