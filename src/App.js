import React from 'react';
import styled from "styled-components";

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

const StyledToDoWiget = styled.div`
  background: red;
  width: 20rem;
  height: 25rem;
  margin: 0 auto;
`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      todoArray: dummyTodoData
    };
  }

  render() {
    return (
      <StyledToDoWiget>
        
      </StyledToDoWiget>
    );
  }
}

export default App;
