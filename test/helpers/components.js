import PropTypes from 'prop-types';
import { ThemeProvider, useTheme } from '@material-ui/core';

import useMuiTheme from '../../src';
import config from './config';

export const TestApp = (props) => {
  const { hookRef, children } = props;
  const [hookTheme, setTheme] = useMuiTheme(props.hookConfig);

  React.useEffect(() => {
    if (hookRef) {
      hookRef.current = hookTheme;
    }
  }, [hookTheme]);

  return (
    <ThemeProvider theme={hookTheme}>
      <main>
        {children &&
          [children].map((Component) => {
            const props = { ...Component.props, setTheme };
            const Child = { ...Component, props };
            return Child;
          })}
      </main>
    </ThemeProvider>
  );
};

TestApp.Proptypes = {
  hookConfig: PropTypes.object,
  hookRef: PropTypes.object,
};

export const TestChild = (props) => {
  const { setTheme, setterRef } = props;
  const theme = useTheme();

  setterRef.current = setTheme;

  const flipTheme = () => {
    setTheme(config.darkConfig);
  };

  return <button onClick={flipTheme}>{theme.name}</button>;
};

TestChild.propTypes = {
  setterRef: PropTypes.object,
  setTheme: PropTypes.func,
};
