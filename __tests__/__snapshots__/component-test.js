import 'react-native';
import React from "react";
import Button from "../../src/components/Button";

import { shallow } from "enzyme";

it('render currectly',()=>{
    const wrapper = shallow(<Button/>)
    expect(wrapper).toMatchSnapshot();
})