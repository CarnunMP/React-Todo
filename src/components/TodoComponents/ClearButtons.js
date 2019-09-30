import React from "react";

export default class ClearButtons extends React.Component {
    render() {
        const {clearCompleted, clearAll} = this.props;
        return (
            <div className="clear-buttons">
                <button onClick={clearCompleted}>Clear completed</button>
                <button onClick={clearAll}>Clear all</button>
            </div>
        )
    }
}