import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = props.addTodo;
    }

    render() {
        return (
            <Formik 
                initialValues={{addItemField: ""}}
                onSubmit={this.addTodo}
                render={props => {
                    return (
                        <Form>
                            <Field name="addItemField" type="text" placeholder="Add to-do..."/>
                            <button type="submit">Add</button>
                        </Form>
                    )
                }}
            />
        )
    }
}