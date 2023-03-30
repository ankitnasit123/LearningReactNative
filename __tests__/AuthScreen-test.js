import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import AuthScreen from '../src/screens/AuthScreen';

describe('AuthScreen', () => {
  describe('auth test',()=>{
    it('change form values( name, email, phoneNumber, password, confirmPassword)', () => {
      const data = {"name": 'ankit', "email": 'ankitnasit@gmail.com', "phonNumber":'8980605594', "password":'123456', "confirmPassword":'123456'};
      const submitHandler = jest.fn();
  
      const {getByTestId} = render(<AuthScreen Auth={submitHandler} />);
      // use fireEvent change value TextInput
      fireEvent.changeText(getByTestId('name'), 'ankit');
      fireEvent.changeText(getByTestId('email'), 'ankitnasit@gmail.com');
      fireEvent.changeText(getByTestId('phoneNumber'), '8980605594');
      fireEvent.changeText(getByTestId('password'), '123456');
      fireEvent.changeText(getByTestId('confirmPassword'), '123456');
  
      // use toEqual check value TextInput
    //  expect(getByTestId('name').props.value).toEqual('ankit');
      expect(getByTestId('email').props.value).toEqual('ankitnasit@gmail.com');
      expect(getByTestId('phoneNumber').props.value).toEqual('8980605594');
      expect(getByTestId('password').props.value).toEqual('123456');
      expect(getByTestId('confirmPassword').props.value).toEqual('123456');
  
      //use fireEvent.press call Button submit
      fireEvent.press(getByTestId('Submit'));
  
      //checking output data equal input
      expect(submitHandler).toHaveBeenCalledWith(data);
    });
  })
});
