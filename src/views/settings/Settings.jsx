import React from 'react';
import { ThemeSwitcherConsumer } from '../../App';

const Settings = () => {
  return (
    <div>
      <ThemeSwitcherConsumer>
        {toggleTheme => <button onClick={toggleTheme}>Change theme</button>}
      </ThemeSwitcherConsumer>
    </div>
  );
};

export default Settings;
