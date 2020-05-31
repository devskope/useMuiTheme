import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { expect } from 'chai';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

global.React = React;
global.expect = expect;
