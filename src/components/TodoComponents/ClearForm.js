import React from "react";

export default class ClearForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clearCompleted, clearAll} = this.props;
        return (
            <div className="clearButtons">
                <button onClick={clearCompleted}>Clear completed</button>
                <button onClick={clearAll}>Clear all
                </button>
            </div>
        )
    }
}