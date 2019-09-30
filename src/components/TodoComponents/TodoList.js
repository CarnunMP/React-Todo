import React from "react";

import Todo from "./Todo";

export default class TodoList extends React.Component {
    render() {
        const {todoArray, toggleCompleted} = this.props;

        return (
            <>
                {todoArray.map(item => (
                    <Todo item={item} toggleCompleted={toggleCompleted} key={item.id}/>
                ))}
            </>
        );
    }
}