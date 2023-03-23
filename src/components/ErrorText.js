import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ErrorText = props => {
  return (
    <>
      <Text style={styles?.default}>{props?.text}</Text>
    </>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    color: '#FF0D10',
    marginHorizontal: 8,
    marginVertical: 8,
  },
});
