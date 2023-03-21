import { configureStore } from '@reduxjs/toolkit';
import logReducer from '../Components/Log-Pages/logSlice'
import dashSubSlice from '../Components/FreeDashboard/DashBody/DashSubs/DashSubsSlice'

const store = configureStore({
    reducer: {
        logStatus: logReducer,
        dashSubFormat: dashSubSlice,
    }
})
export default store;