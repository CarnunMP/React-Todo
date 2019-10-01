import React from "react";

export default class Todo extends React.Component {
    render() {
        const {item, toggleCompleted} = this.props;

        return (
            <div className="list-item" onClick={toggleCompleted} id={item.id}>
                {
                    item.completed ?
                        <>
                            <div className="checkbox">✔</div>
                            <p style={{textDecoration: "line-through", color: "red"}}>{item.task}</p>
                        </> :
                        <>
                            <div className="checkbox" />
                            <p>{item.task}</p>
                        </>
                }
            </div>
        )
    }
}