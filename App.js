import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Nav';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}

export default App;
