import React,{useState, useEffect} from 'react'
import './Profile.css'
import { useSelector, useDispatch} from 'react-redux'
import {logout, updateMyProfile} from '../../Actions/user'
import Loader from '../Loader/Loader'

const Profile = () => {

    const dispatch = useDispatch()

    const { user, loading: userLoading, error, message } = useSelector(state => state.user)

    console.log(user)

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [place, setPlace] = useState('');


    useEffect(() => {
        if(user){
            setName(user.name)
            setPhone(user.phone)
            setPlace(user.place)
        }

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
    },[user, message, error])

    const handleUpdate = (e)=>{
        e.preventDefault()
        console.log(name, phone, place)
        dispatch(updateMyProfile(name, phone, place))
    }

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('logout')
        dispatch(logout());
    }


    return (
        <div className='profile'>
            <h2 className='heading'>Badhaan - Login System</h2>

            {
                error ? <div className='error'>{error}</div> : 
                message ? <div className='success'>{message}</div> : null
            }

            <div className="profile-container">
                <h3>My Profile</h3>

                {
                    userLoading ? <Loader/> : <>
                        <form onSubmit={handleUpdate} style={{ width: "400px" }}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name <span className='required-star'>*</span></label>
                                <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone <span className='required-star'>*</span></label>
                                <input required value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPlace" className="form-label">Place <span className='required-star'>*</span></label>
                                <input required value={place} onChange={(e)=>setPlace(e.target.value)} type="text" className="form-control" id="exampleInputPlace" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                        <button onClick={((e)=>handleLogout(e))} type="submit" className="btn btn-danger logout-btn">Logout</button>
                    </>
                }
            </div>
        </div>
    )
}
export default Profile