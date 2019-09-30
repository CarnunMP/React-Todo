import React from 'react';
import styled from "styled-components";

import TodoList from "./components/TodoComponents/TodoList";

const StyledToDoWiget = styled.div`
  margin: 0 auto;
  background: lightgray;
  margin-top: 3rem;
  width: 20rem;
  height: 25rem;
`;

const dummyTodoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoArray: dummyTodoData
    };
  }

  render() {
    const { todoArray } = this.state;
    return (
      <StyledToDoWiget>
        <div className="title">
          <h2>To-Do List</h2>
        </div>
        <TodoList todoArray={todoArray} />
      </StyledToDoWiget>
    );
  }
}

export default App;
