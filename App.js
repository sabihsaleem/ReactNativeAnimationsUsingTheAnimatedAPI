import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
} from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start( () => this.spin() )
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Hello! </Text>
      </View>
    );
  }
}

export default App;
