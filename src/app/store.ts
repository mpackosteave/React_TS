import { configureStore } from "@reduxjs/toolkit"
import counterReducer  from "../features/counter/counterSlice"


export const store = configureStore({
    reducer:{
        counter: counterReducer
    },
})

// return the get type of store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch