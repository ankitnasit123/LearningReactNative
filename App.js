import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CodePush from "react-native-code-push";

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
}

export class App extends Component {

  componentDidMount(){
    CodePush.sync({installMode:CodePush.InstallMode.IMMEDIATE},this.syncWithCodePush,null)
  }

  syncWithCodePush = (status) =>{
    console.log(status)
  }
  render() {
    return (
      <View>
        <Text>Code push App</Text>
      </View>
    )
  }
}

export default CodePush(CODE_PUSH_OPTIONS)(App);