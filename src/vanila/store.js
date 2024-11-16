import { /* createStore,*/ combineReducers } from "redux";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { /*createAction, createReducer,*/ configureStore, createSlice } from "@reduxjs/toolkit"


// export const addToDo = createAction("ADD")
// export const deleteToDo = createAction("DELETE")

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

// const reducer = createReducer([], (builder) => {
//     builder
//         .addCase(addToDo.type, (state, action) => {
//             state.push({ id: Date.now(), text: action.payload });
//         })
//         .addCase(deleteToDo.type, (state, action) => {
//             return state.filter((toDo) => toDo.id !== action.payload);
//         })
//         .addDefaultCase((state) => state);
// });

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

// const persistConfig = {
//     key: "todo", // localStorage에 저장될 키값
//     storage: storage // localstorage
// }

// const allReducer = combineReducers({
//     toDos: toDos.reducer
// });

const store = configureStore({
    // reducer: persistReducer(persistConfig, allReducer)
    reducer: toDos.reducer
});

export const { add, remove } = toDos.actions;
export default store;

