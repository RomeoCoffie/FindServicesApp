import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    gottenData: null,
}

export const dashSubSlice = createSlice({
    name: 'gettingData',
    initialState,
    reducers: {
        getData: (state, action)=>{
            state.gottenData=action.payload
        },
    }
})

export const { getData } = dashSubSlice.actions;
export default dashSubSlice.reducer; 