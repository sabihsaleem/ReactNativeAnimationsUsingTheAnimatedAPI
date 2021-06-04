import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Animated} from 'react-native';

const arr = [];
for (var i = 0; i < 800; i++) {
  arr.push(i);
}

export default class AnimatedStagger extends Component {
  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const animations = arr.map(item => {
      return Animated.timing(this.animatedValue[item], {
        toValue: 1,
        duration: 4000,
      });
    });
    Animated.stagger(10, animations).start();
  }

  render() {
    const animations = arr.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedValue[a],
            height: 20,
            width: 20,
            backgroundColor: 'red',
            marginLeft: 5,
            marginTop: 3,
          }}
        />
      );
    });
    return <SafeAreaView style={styles.container}>{animations}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
