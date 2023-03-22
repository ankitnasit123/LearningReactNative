import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class TestFuncationScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0,
    };
  }

  getData(x){
    this.setState({counter: x + 10})
  }
  render() {
    return (
      <View>
        <Text>TestFuncationScreen</Text>
      </View>
    );
  }
}
