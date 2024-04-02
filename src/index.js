import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span")

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
}
store.subscribe(onChange);


add.addEventListener("click", () => {
  store.dispatch({ type: ADD })
})
minus.addEventListener("click", () => {
  store.dispatch({ type: MINUS })
})

console.log(store)