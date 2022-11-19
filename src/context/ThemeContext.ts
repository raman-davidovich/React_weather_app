import { createContext } from 'react';

// eslint-disable-next-line no-shadow
export enum Theme {
  // eslint-disable-next-line no-unused-vars
  LIGHT = 'light',
  // eslint-disable-next-line no-unused-vars
  DARK = 'dark',
}
interface Props {
  theme: Theme;
  // eslint-disable-next-line no-unused-vars,no-use-before-define
  changeTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});
