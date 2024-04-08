import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addToDo } from "../store";

function Home() {
    const [text, setText] = useState("");
    const toDos = useSelector((state) => state);
    const dispatch = useDispatch();

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault(); // form 제출 기본 동작은 새로고침인데 이것을 방지하는 역할
        dispatch(addToDo(text));
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
                {JSON.stringify(toDos)}
            </ul>
        </>
    )
}

export default Home;