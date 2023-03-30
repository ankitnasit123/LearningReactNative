import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../common/StylesCommon';

const InputField = props => {
  //console.log({props});
  return (
    <>
      <TextInput
        style={styles?.default}
        testID={props?.testID}
        placeholder={props?.placeholder}
        onChangeText={props?.onChangeText}
        onBlur={props?.onBlur}
        value={props?.value}
        secureTextEntry={props?.secureTextEntry}
        keyboardType={props?.keyboardType}
      />
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  default: {
    borderWidth: 0.5,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
    borderStyle: 'dashed',
  },
});
