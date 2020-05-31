import { useCallback, useEffect, useState } from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const useMuiTheme = (initialConfig = {}) => {
  const [config, setConfig] = useState(initialConfig);

  const {
    themeOptions = {},
    themeArgs = [],
    responsiveFonts = false,
    fontOptions = {},
  } = config;

  const setTheme = useCallback((config = {}) => setConfig(config), [config]);

  const theme = responsiveFonts
    ? responsiveFontSizes(
        createMuiTheme(themeOptions, ...themeArgs),
        fontOptions
      )
    : createMuiTheme(themeOptions, ...themeArgs);

  return [theme, setTheme];
};

export default useMuiTheme;
