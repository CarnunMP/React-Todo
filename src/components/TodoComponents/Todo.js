import React from "react";

export default class Todo extends React.Component {
    render() {
        const {item, toggleCompleted} = this.props;

        return (
            <div className="list-item" onClick={toggleCompleted} id={item.id}>
                {
                    item.completed ?
                        <p style={{textDecoration: "line-through"}}>{item.task}</p> :
                        <p>{item.task}</p>
                }
            </div>
        )
    }
}