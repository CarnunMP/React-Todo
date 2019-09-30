import React from "react";

import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todoArray} = this.props;
        
        return (
            <>
                {todoArray.map(item => (
                    <Todo item={item} key={item.id} />
                ))}
            </>
        );
    }
}