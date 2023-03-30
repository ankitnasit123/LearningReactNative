import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CodePush from "react-native-code-push";
import Animation from "./screens/Animation";

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
        <Animation/>
      </>
    )
  }
}

export default CodePush(CODE_PUSH_OPTIONS)(App);