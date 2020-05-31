import React from 'react';
import createMount from '@material-ui/core/test-utils/createMount';

import config from './helpers/config';
import { TestApp, TestChild } from './helpers/components';

let mount;

beforeEach(() => {
  mount = createMount();
});

afterEach(() => {
  mount.cleanUp();
});

describe('useMuiTheme init', () => {
  it('should default to light theme', () => {
    const hookRef = React.createRef();
    const getHookValue = () => hookRef.current;

    mount(<TestApp hookRef={hookRef}></TestApp>);

    const theme = getHookValue();

    expect(theme.palette.type).to.equal('light'); // https://material-ui.com/customization/default-theme/
  });

  it('should assign a custom name to default theme', () => {
    const hookConfig = config.customNameConfig;
    const hookRef = React.createRef();
    const getThemeName = () => hookRef.current.name;

    mount(<TestApp hookConfig={hookConfig} hookRef={hookRef} />);

    const name = getThemeName();

    expect(name).to.equal(hookConfig.themeOptions.name);
  });

  it('should deep merge extra arguments with theme', () => {
    const hookConfig = config.deepMergeConfig;
    const hookRef = React.createRef();
    const getTheme = () => hookRef.current;

    mount(<TestApp hookConfig={hookConfig} hookRef={hookRef} />);

    const theme = getTheme();

    expect(theme.name).to.equal(hookConfig.themeArgs[0].name);
    expect(theme.palette.type).to.equal(hookConfig.themeArgs[1].palette.type);
  });

  it('should generate theme with responsive font sizes', () => {
    const hookConfig = config.responsiveFontConfig;
    const hookRef = React.createRef();
    const getThemeName = () => hookRef.current.name;

    mount(<TestApp hookConfig={hookConfig} hookRef={hookRef}></TestApp>);

    const name = getThemeName();

    expect(name).to.equal(hookConfig.themeOptions.name);
  });
});
