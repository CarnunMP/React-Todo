import React from 'react';
import styled from "styled-components";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from './components/TodoComponents/TodoForm';
import ClearButtons from './components/TodoComponents/ClearButtons';

const StyledToDoWiget = styled.div`
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 3rem;
  width: 25rem;
  height: 30rem;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;


  background: #8E0E00;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1F1C18, #8E0E00);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #1F1C18, #8E0E00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .title {
    border-bottom: 1.5px solid black;
    height: 10%;
    width: 95%;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2rem;
    }
  }

  .list {
    width: 100%;

    .list-item {
    display: flex;
    align-items: center;
    margin: 0 1rem 0.5rem 1rem;
    font-weight: bold;

    p:hover {
      color: red;
    }

      .checkbox {
        height: 0.8rem;
        width: 0.8rem;
        background: black;
        margin-right: 0.5rem;
        border-radius: 2px;
        color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  form {
    margin-left: 2.3rem;
    width: 100%;

    input {
      border-radius: 2px;
      border: 2px solid black;
      padding-left: 0.5rem;
      margin-top: 0.5rem;
      margin-right: 0.5rem;
      background: none;
      max-width: 80%;
      
      ::placeholder {
        color: black;
      }
    }
  }

  .clear-buttons {
    position: absolute;
    bottom: 0;
    margin-bottom: 2rem;
    
    button {
      margin: 0 0.5rem 0 0.5rem;
    }
  }

  button {
    padding: 0.2rem;
    border-radius: 2px;
    background: black;
    color: maroon;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;

const localStorage = window.localStorage;

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

    const startingData = localStorage.getItem("todoArray");
    console.log(startingData);
    if (startingData !== null) {
      this.state = {
        todoArray: JSON.parse(startingData),
      }
    } else {
      this.state = {
        todoArray: dummyTodoData
      };
    }
  }

  addTodo = (formValues, actions) => {
    if (formValues.addItemField !== "") {
      const newTodo = {
        task: formValues.addItemField,
        id: Date.now(),
        completed: false,
      }
  

      this.setState(currentState => {
        const newTodoArray = currentState.todoArray.concat([newTodo]);

        localStorage.setItem("todoArray", JSON.stringify(newTodoArray));

        return ({
          todoArray: newTodoArray,
        });
      });
    }

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

      localStorage.setItem("todoArray", JSON.stringify(filteredTodoArray));

      return ({ todoArray: filteredTodoArray });
    });
  };

  clearAll = event => {
    this.setState({todoArray: []});
    localStorage.removeItem("todoArray");
  };

  render() {
    const { todoArray } = this.state;

    return (
      <StyledToDoWiget>
        <div className="title">
          <h1>To-Do List</h1>
        </div>
        <TodoList todoArray={todoArray} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo}/>
        <ClearButtons clearCompleted={this.clearCompleted} clearAll={this.clearAll}/>
      </StyledToDoWiget>
    );
  }
}

export default App;
