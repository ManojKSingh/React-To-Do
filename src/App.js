import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import ToDoList from './components/organisms/ToDoList';

function App() {
  const theme = themes['dark'];
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}
export default App;
