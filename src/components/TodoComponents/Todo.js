import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.item = props.item;
    }

    render() {
        return (
            <div className="list-item">
                <p>{this.item.task}</p>
            </div>
        )
    }
}