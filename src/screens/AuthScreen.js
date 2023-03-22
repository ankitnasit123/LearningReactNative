import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputField from '../components/InputField';

const AuthScreen = () => {
  const [authType, _authType] = useState(0);
  const [showText, setShowText] = useState(true);
  const [userId, setuserId] = useState('');
  const [password, setpassword] = useState('');
  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText(showText => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    console.log({userId, password});
  };


  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Text
          style={[
            {
              display: showText ? 'none' : 'flex',
              fontSize: 24,
              color: 'skyblue',
            },
          ]}>
          {authType ? 'Do login. .' : 'Self Register. .'}
        </Text>
        {showText && (
          <Text
            style={[
              {
                fontSize: 24,
                color: 'skyblue',
              },
            ]}>
            {''}
          </Text>
        )}
      </View>
      <InputField
        onChangeText={val => {
          setuserId(val);
        }}
        value={userId}
        secureTextEntry={false}
        placeholder={'Enter user id'}
      />
      <InputField
        onChangeText={val => {
          setpassword(val);
        }}
        value={password}
        secureTextEntry={true}
        placeholder={'Enter pass code'}
      />
    </>
  );
};

export default AuthScreen;
