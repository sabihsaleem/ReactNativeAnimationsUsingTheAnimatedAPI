'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  TouchableOpacity,
} from 'react-native';

export default class AnimatedSpring extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.3);
  }

  componentDidMount() {
    this.spring();
    setTimeout(() => {
        this.props.navigation.goBack()
    }, 5000)
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
    }).start();
  }

  renderData() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 100}} onPress={this.spring.bind(this)}>
          Spring
        </Text>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{scale: this.springValue}],
          }}
          source={{
            uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
      </View>
    );
  }

  render() {
    return (
        this.renderData()
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
