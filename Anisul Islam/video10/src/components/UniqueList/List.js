import React from "react";
import {v4 as uuidv4} from 'uuid';

const todos = [
    {
        id: uuidv4(),
        title: "Todo 1",
        desc: "Todo Description 1"
    },
    {
        id: uuidv4(),
        title: "Todo 2",
        desc: "Todo Description 2"
    },
    {
        id: uuidv4(),
        title: "Todo 3",
        desc: "Todo Description 3"
    },
    {
        id: uuidv4(),
        title: "Todo 4",
        desc: "Todo Description 4"
    }
]

function List() {
    return (
        <div>
            {todos.map((todo) => {
                const {id,title, desc} = todo;
                return (
                    <div key={uuidv4()}>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default List;