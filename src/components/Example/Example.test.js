import React from 'react';
import { shallow } from 'enzyme';

import Example from './index';

describe('Example Container Test', () => {
   it('renders without crashing', () => {
      shallow(<Example />);
    });
});
