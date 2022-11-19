import React, { ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import changeCssRootVariables from '../model/ChangeCssRootVariables';
import storage from '../model/Storage';

interface Props {
  children: ReactNode;
}

function ThemeProvider({ children, ...props }: Props) {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem('theme') || Theme.LIGHT,
  );
  changeCssRootVariables(theme);
  function changeTheme(newTheme: Theme) {
    storage.setItem('theme', newTheme);
    setTheme(newTheme);
    changeCssRootVariables(newTheme);
  }

  const themeMemo = useMemo(() => ({ theme, changeTheme }), [theme]);
  return (
    <ThemeContext.Provider
      value={themeMemo}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
