import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { remove } from '../store';

function Detail() {
    const id = useParams().id;
    const navigate = useNavigate();

    const toDoText = useSelector((state) => state.find((toDo) => toDo.id === parseInt(id)));


    const dispatch = useDispatch();


    const onDelete = () => {
        dispatch(remove(id));
        navigate("/");
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>{toDoText.text}</h1>
            <h3>Created at : {toDoText.id}</h3>
            <button onClick={onDelete}>❌</button>
        </div>
    )
}

export default Detail