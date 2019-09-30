import React from "react";

import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.todoArray = props.todoArray;
    }

    render() {
        return (
            <>
                {this.todoArray.map(item => (
                    <Todo item={item} />
                ))}
            </>
        );
    }
}