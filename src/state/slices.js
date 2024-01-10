import {createSlice} from "@reduxjs/toolkit";

const Slice=createSlice({
   name:"components",
   initialState:{
       Home_ref:null,
       Daily_work_ref: null,
       Excercise_ref:null,
       Food_ref:null,
       Sleep_ref:null,
       Tricks_ref:null,
       Footer_ref:null,
   },
   reducers:{
       set_HomeRef:(state,action)=>{
             state.Home_ref=action.payload;
       },
       set_DailyWorkRef:(state,action)=>{
             state.Daily_work_ref=action.payload;
       },
       set_ExcerciseRef:(state,action)=>{
             state.Excercise_ref=action.payload;
       },
       set_FoodRef:(state,action)=>{
             state.Food_ref=action.payload;
       },
       set_SleepRef:(state,action)=>{
             state.Sleep_ref=action.payload;
       },
       set_TricksRef:(state,action)=>{
             state.Tricks_ref=action.payload;
       },
       set_FooterRef:(state,action)=>{
             state.Footer_ref=action.payload;
       },
   },
});
export const {set_HomeRef,set_DailyWorkRef,set_ExcerciseRef,set_FoodRef,set_SleepRef,set_TricksRef,set_FooterRef}=Slice.actions;
export default Slice.reducer;
