import React from 'react';
import styled from "styled-components";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm';
import ClearButtons from './components/TodoComponents/ClearButtons';

const StyledToDoWiget = styled.div`
  margin: 0 auto;
  background: lightgray;
  margin-top: 3rem;
  width: 25rem;
  height: 30rem;

  .list-item {
    &:hover {
      cursor: pointer;
    }
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
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

  addTodo = (formValues, actions) => {
    const newTodo = {
      task: formValues.addItemField,
      id: Date.now(),
      completed: false,
    }

    this.setState(currentState => ({
      todoArray: currentState.todoArray.concat([newTodo])
    }));

    actions.resetForm();
  };

  toggleCompleted = event => {
    const currentItemId = event.currentTarget.id;
    // Question: Why is 'event' not _visible_ inside setState()?

    this.setState(currentState => {
      const targetIndex = currentState.todoArray.findIndex(item => 
        item.id.toString() === currentItemId
      );
      
      let newState = currentState.todoArray;
      newState[targetIndex].completed ?
        newState[targetIndex].completed = false :
        newState[targetIndex].completed = true;

      return ({ todoArray: newState });
    });
  };

  clearCompleted = event => {
    this.setState(currentState => {
      const filteredTodoArray = currentState.todoArray.filter(item => item.completed === false);

      return ({ todoArray: filteredTodoArray });
    });
  };

  clearAll = event => {
    this.setState({todoArray: []});
  };

  render() {
    const { todoArray } = this.state;

    return (
      <StyledToDoWiget>
        <div className="title">
          <h2>To-Do List</h2>
        </div>
        <TodoList todoArray={todoArray} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo}/>
        <ClearButtons clearCompleted={this.clearCompleted} clearAll={this.clearAll}/>
      </StyledToDoWiget>
    );
  }
}

export default App;
