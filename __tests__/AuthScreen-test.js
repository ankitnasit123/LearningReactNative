import "react-native";
import React from "react";
import AuthScreen from '../src/screens/AuthScreen'
import TestFuncationScreen from "../src/screens/TestFuncationScreen";

import renderer from "react-test-renderer";

// uncomment if you want to compare with snapshot of code
// test('renders correctly', () => { 
//     const snapshot = renderer.create(<AuthScreen/>).toJSON();
//     console.log(snapshot);
//     expect(snapshot).toMatchSnapshot();
//  })

//in progress with funcational compoent funcation test cases
// test('funcation testing',()=>{
//     const AuthRef = renderer.create(<AuthScreen/>).getInstance();
//     console.log({AuthRef});
//     //const input = AuthRef.handleLogin();
// })

//funcation test with test funcation screen
test('funcation testing',()=>{
    const TestFuncationScreenRef = renderer.create(<TestFuncationScreen/>).getInstance();
    console.log({TestFuncationScreenRef});
    const input = TestFuncationScreenRef?.getData(2);
    console.log({input});
    expect(TestFuncationScreenRef.state.counter).toEqual(12);
})
