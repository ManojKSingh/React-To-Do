import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ToDoContextProvider from './contexts/ToDoContext';
import themes from './themes';
import {ToDoList} from './components/organisms/ToDoList';

function App() {
  const [isDark, toggleDark] = useState(false);
  const themeType = isDark ? "dark" : "light";
  const theme = themes[themeType];

  const toggleTheme = () => toggleDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <ToDoContextProvider>
      <div>
        <ToDoList toggleTheme={toggleTheme}/>
      </div>
      </ToDoContextProvider>
    </ThemeProvider >
  );
}
export default App;
