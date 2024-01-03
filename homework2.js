import React, { useEffect, useRef, useState } from "react";
const App = () => {
    const newTask = useRef(null);
    const [listItems, addItems] = useState([]);

    useEffect(() => {
        const listTasks = listItems.map(task =>
            <li>{task}</li>
            )
        return (<ul>{listTasks}</ul>)
    }, [listItems]);

    function changeStyle(){

    }

    function addTask(){
        if (newTask.current.value != null){
            addItems(listItems.push(newTask.current.value));
        }
    }

    return (
        <div>
            <button onClick={addTask}>
                Submit
            </button>
            <input ref={newTask}></input>
        </div>
    )
}

export default App;
