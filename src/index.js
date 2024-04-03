import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text) => {
  return {
    type: ADD_TODO, text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO, id
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]
    // id: Date.now()는 쓰지 않는 것이 좋다
    case DELETE_TODO:
      return state.filter(toDo => action.id !== toDo.id);
    default:
      return state;

  }
};
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  // HTML로 받아오는 id는 string 형태이기 대문에 parseInt를 써서 숫자로 변환한다.
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  ul.innerHTML = '';

  const toDos = store.getState();
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li);
  });
}

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);