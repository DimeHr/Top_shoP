import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Home from './index.js';

chai.should();

describe('Home Component', () => {
    it('should render without exploding', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).to.have.length(1);
    });
});
