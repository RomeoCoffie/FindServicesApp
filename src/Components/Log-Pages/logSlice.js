import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    logStatus: false,
    userDetails: null
}

export const logSlice = createSlice({
    name: 'logStatus',
    initialState,
    reducers: {
        logInState: (state)=>{
            state.logStatus=true
        },
        storeUserDetails:(state,action)=>{
            state.userDetails = action.payload
        },
        logOutUser: (state)=>{
            state.logStatus=false
            state.userDetails=null
        }
    }
})

export const { logInState, storeUserDetails, logOutUser } = logSlice.actions;
export default logSlice.reducer; 