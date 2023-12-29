import {  configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const checkWin = createAsyncThunk("counter/checkWin" , async (  _,  {getState})=>{
return new Promise((resolve , reject)=>{
    const value = getState().counter.value
    if(value == 10){
        resolve(1)
    }else if (value == -10){
        reject(1)
    }
}
)
})
const counterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            value: 0,
            incClicks: 0,
            decClicks: 0,
            isWin : "no win"
        }
        ,
        reducers: {
            take(state) {
                state.value -= 1
                state.decClicks += 1
                checkWin()
            },
            add(state) {
                state.value += 1
                state.incClicks += 1
                checkWin()
            }
        }
        ,extraReducers:builder=>{
            builder.addCase(checkWin.fulfilled , (state)=>{
                state.isWin = "win"
            }) 
            builder.addCase(checkWin.rejected , (state)=>{
                state.isWin = "lose"
            })
        }
    }
)
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    } 
})
const  {take , add } = counterSlice.actions
export  {add , take , checkWin};
export default store  