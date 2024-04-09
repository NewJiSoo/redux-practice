import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { add } from "../store";
import ToDo from '../components/ToDo';

function Home() {
    const [text, setText] = useState("");
    const toDos = useSelector((state) => state);
    console.log(toDos.toDos === Array)
    const dispatch = useDispatch();

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault(); // form 제출 기본 동작은 새로고침인데 이것을 방지하는 역할
        dispatch(add(text));
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}
            </ul>

        </>
    )
}

export default Home;