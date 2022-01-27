import React from "react"
import { configureStore} from "@reduxjs/toolkit"
import { navSlice } from "../slices/navSlice"



const store = configureStore({
    reducer: {
        navSlice  : navSlice.reducer  
    }
})


export default store