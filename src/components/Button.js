import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../common/StylesCommon';

const Button = props => {
  return (
    <>
      <Pressable
        disabled={props?.disabled}
        style={styles?.default}
        onPress={()=>{props?.onPress}}>
        <Text style={styles?.defaultText}>{props?.title}</Text>
      </Pressable>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderColor: 'white',
    width: windowWidth / 1.5,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  defaultText: {
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 24,
    color: 'white',
  },
});
