import 'react-native';
import React from 'react';
import 'react-native';
import AuthScreen from '../src/screens/AuthScreen';
import TestFuncationScreen from '../src/screens/TestFuncationScreen';
import { act, create } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

// uncomment if you want to compare with snapshot of code
test('renders correctly', () => {
  const snapshot = renderer.create(<AuthScreen />).toJSON();
  console.log(snapshot);
  expect(snapshot).toMatchSnapshot();
});

//funcational components
//  test('funcational components',()=>{
//     const data = renderer(<AuthScreen/>);
//     console.log({data});
//  })

//in progress with funcational compoent funcation test cases
// test('funcation testing', () => {\
//   let wrapper = create(<AuthScreen />);
//   const root = wrapper.root;
//   const btn = root.findByType(Button);

//   act(() => {
//     btn.props.onPress();
//   });
//   expect(wrapper.toJSON()).toMatchSnapshot();
// });

//funcation test with test funcation screen
// test('funcation testing',()=>{
//     const TestFuncationScreenRef = renderer.create(<TestFuncationScreen/>).getInstance();
//     console.log({TestFuncationScreenRef});
//     const input = TestFuncationScreenRef?.getData(2);
//     console.log({input});
//     expect(TestFuncationScreenRef.state.counter).toEqual(12);
// })

// TDD using enzyme
// describe("AuthScreen",()=>{
//     it("should render my component",()=>{
//         const wrapper = shallow(<AuthScreen/>);
//         console.log({wrapper});
//     })
// })
