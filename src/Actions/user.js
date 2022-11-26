import axios from "axios" 

const rootUrl = "https://inter-assign.herokuapp.com"

export const login= (email, password)=> async(dispatch)=>{
    try {

        dispatch({
            type:"LoginRequest"
        })

        console.log(email, password)

        const {data} = await axios.post(`${rootUrl}/api/v1/user/login`, {email, password},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials: 'true'
        })

        console.log(data);

        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })


    } catch (error) {
        dispatch({
            type:"LoginFailure",
            payload:error.response.data.message
        })
    }
}
export const register = (name, email, password, phone, place)=> async(dispatch)=>{
    try {

        dispatch({
            type:"RegisterRequest"
        })

        const {data} = await axios.post(`${rootUrl}/api/v1/user/register`, {name,email, password, phone, place},{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials: 'true'
        })

        const user = data.newUser;
        console.log(data.newUser);

        dispatch({
            type:"RegisterSuccess",
            payload:user
        })


    } catch (error) {
        dispatch({
            type:"RegisterFailure",
            payload:error.response.data.message
        })
    }
}


export const loadUser = ()=> async(dispatch)=>{
    try{
        dispatch({
            type:"LoadUserRequest"
        })

        const {data} = await axios.get(`${rootUrl}/api/v1/user/profile/me`,{
            withCredentials: 'true'
        });

        console.log(data);
        
        dispatch({
            type:"LoadUserSuccess",
            payload:data.user
        })
    }
    catch(error){
        dispatch({
            type:"LoadUserFailure",
            payload:error.response.data.message
        })
    }
}

export const updateMyProfile = (name, phone, place)=> async(dispatch)=>{
    try{
        dispatch({
            type:"UpdateProfileRequest"
        })
        const {data} = await axios.put(`${rootUrl}/api/v1/user/profile/update`, {name, phone ,place},{
            withCredentials: 'true'
        });
        dispatch({
            type:"UpdateProfileSuccess",
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:"UpdateProfileFailure",
            payload:error.response.data.message
        })
    }
}

export const logout = () =>async(dispatch)=>{

    try{
        dispatch({
            type:"LogoutUserRequest",
        });

        await axios.get(`${rootUrl}/api/v1/user/logout`,{
            withCredentials: 'true'
        });

        dispatch({
            type:"LogoutUserSuccess",
        })

    }
    catch(error){
        dispatch({
            type:"LogoutUserFailure",
            payload:error.response.data.message
        })
    }
}
