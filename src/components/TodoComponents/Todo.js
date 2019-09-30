import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item, toggleCompleted} = this.props;

        return (
            <div className="list-item" onClick={toggleCompleted} id={item.id}>
                <p>{item.task}</p>
            </div>
        )
    }
}