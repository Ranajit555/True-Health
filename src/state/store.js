import {configureStore} from "@reduxjs/toolkit";
import componentsReducer from "./slices"; // only store all reducer

const Store=configureStore({
    reducer:{
        components:componentsReducer,
    },
});

export default Store;

