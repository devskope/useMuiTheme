# useMuiTheme

[![CircleCI](https://circleci.com/gh/devskope/useMuiTheme.svg?style=shield)](https://circleci.com/gh/devskope/useMuiTheme)

A react hook to create and modify [material-ui themes](https://material-ui.com/customization/theming/#theming).

# Usage

```javascript
const [theme, setTheme] = useMuiTheme(hookconfig);

/**
 * Example
 * */
import useMuiTheme from '@devskope/use-mui-theme';

import NavBar from '../components/NavBar';

const App = (props) => {
  const [theme, setTheme] = useMuiTheme(); // generate default theme

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
};
```

# Installation

```

npm install @devskope/use-mui-theme

```

# API:

`useMuiTheme(config) => [theme, setTheme]`

Generate a theme based on the configuration options received.

### Arguments

1.  `hookConfig` (Object [optional]) - defaults:

    ```javascript
    {
      themeOptions = {},
      themeArgs = [],
      responsiveFonts = false,
      fontOptions = {},
    }

    /**
    * themeOptions (Object[optional]) Takes an incomplete theme object
    *   and adds the missing parts.
    *
    * themeArgs (Array[optional]) Deep merge the arguments with
    *   the about to be returned theme
    *
    * responsiveFonts (bool) Generate responsive typography settings
    *
    * fontOptions (Object[optional]) options for responsiveFontSizes
    *   https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme
    */
    ```

### Returns

`[theme, setTheme]`

1.  `theme` (Object): A complete, ready to use theme object.

2.  `setTheme` (Function) A function that can be passed around to set the theme. Accepts `hookConfig` as its only argument.

### Note

Calling `useMuiTheme` or `setTheme` without a configuration object will set theme to the [default theme Object](https://material-ui.com/customization/default-theme/#default-theme)
