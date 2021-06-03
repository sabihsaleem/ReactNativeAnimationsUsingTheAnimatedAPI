import React from 'react';
import {Animated, Easing, Text, View, TouchableOpacity} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Hello! </Text>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{rotate: spin}],
            marginTop: '10%',
          }}
          source={{
            uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
        <TouchableOpacity
          style={{
            width: '50%',
            height: '5%',
            backgroundColor: 'lightblue',
            borderColor: 'blue',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10%',
          }}
          onPress={() => this.props.navigation.navigate('ReactNativeEasings')}
        >
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            React Native Easings
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
