import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.todoArray = props.todoArray;
    }

    render() {
        return (
            <>
                {this.todoArray.map(item => (
                    <div className="list-item">
                        <p>{item.task}</p>
                    </div>
                ))}
            </>
        );
    }
}