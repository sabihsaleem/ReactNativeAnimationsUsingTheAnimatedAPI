import React from 'react';
import {
  Animated,
  Easing,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

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
    const DATA = [
      {
        id: 'ReactNativeEasings',
        title: 'React Native Easings',
      },
      {
        id: 'AnimatedTiming',
        title: 'Animated Timing',
      },
      {
        id: 'AnimatedSpring',
        title: 'Animated Spring',
      },
    ];
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: '50%',}}>
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
        <FlatList
          data={DATA}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'lightblue',
                  borderColor: 'blue',
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '10%',
                }}
                onPress={() =>
                  this.props.navigation.navigate(item.id)
                }>
                <Text style={{fontSize: 20, textAlign: 'center'}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    );
  }
}

export default Home;
