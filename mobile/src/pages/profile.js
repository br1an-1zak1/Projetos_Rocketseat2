import React from 'react';
import { WebView } from 'react-native-webview';

function Profile({ navigation }){
  const githubUsename = navigation.getParam('github_username');

  return <WebView style={{ flex: 1}} source={{uri: `https://github.com/${githubUsename}`}} />
}

export default Profile;