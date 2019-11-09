import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Example from './Example';

const mockStore = configureMockStore()({});

describe('Example Container Test', () => {
   it('renders without crashing', () => {
      expect(
         shallow(
            <Provider store={mockStore}>
               <Example />;
            </Provider>
         )
      );
    });
});
