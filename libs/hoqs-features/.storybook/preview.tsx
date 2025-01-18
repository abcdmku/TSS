import { Provider } from "@hoqs/core-components";
import { withThemeByClassName } from '@storybook/addon-themes';

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
];
