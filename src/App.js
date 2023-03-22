import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CodePush from "react-native-code-push";
import AuthScreen from "./screens/AuthScreen";

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
      <>
        <AuthScreen/>
      </>
    )
  }
}

export default CodePush(CODE_PUSH_OPTIONS)(App);