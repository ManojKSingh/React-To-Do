import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import ToDoList from './components/organisms/ToDoList';

function App() {
  const [isDark, toggleDark] = useState(false);
  const themeType = isDark ? "dark" : "light";
  const theme = themes[themeType];

  const toggleTheme = () => toggleDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ToDoList toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider >
  );
}
export default App;
