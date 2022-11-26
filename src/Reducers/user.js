import {createReducer} from '@reduxjs/toolkit';


const initialState = {};

export const userReducer = createReducer(initialState,{

    LoginRequest: (state)=>{
        state.loading = true;
    },
    LoginSuccess: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticate = true;
    },
    LoginFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false;
    },

    RegisterRequest: (state)=>{
        state.loading = true;
    },
    RegisterSuccess: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticate = true;
    },
    RegisterFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false;
    },

    LoadUserRequest: (state)=>{
        state.loading = true;
    },
    LoadUserSuccess: (state,action)=>{
        state.loading = false;
        state.isAuthenticate = true;
        state.user = action.payload;
    },
    LoadUserFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = false;
    },

    UpdateProfileRequest: (state)=>{
        state.loading = true;
    }
    ,
    UpdateProfileSuccess: (state, action)=>{
        state.loading = false;
        state.message = action.payload.message;
        state.user = action.payload.user;
    }
    ,
    UpdateProfileFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload.error;
    },
    
    LogoutUserRequest: (state)=>{
        state.loading = true;
    },
    LogoutUserSuccess: (state)=>{
        state.loading = false;
        state.user = null;
        state.isAuthenticate = false;
    },
    LogoutUserFailure: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticate = true;
    },
    clearError: (state)=>{
        state.error = null;
    },
    clearMessage: (state)=>{
        state.message = null;
    }
});
