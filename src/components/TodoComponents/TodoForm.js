import React from "react";
import { Formik, Form, Field} from "formik";

export default class TodoForm extends React.Component {
    render() {
        const { addTodo } = this.props;

        return (
            <Formik 
                initialValues={{addItemField: ""}}
                onSubmit={addTodo}
                render={props => {
                    return (
                        <Form>
                            <Field name="addItemField" type="text" placeholder="+ Add to-do..." />
                            <button type="submit">Add</button>
                        </Form>
                    )
                }}
            />
        )
    }
}