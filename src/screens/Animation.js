import {View, Text, Animated, Easing} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

export default function Animation() {
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(translation.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: -100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: -100,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{translateX: translation.y}, {translateY: translation.x}],
        }}>
        <Text>Animation</Text>
      </Animated.View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{translateX: translation.y}, {translateY: translation.x}],
        }}>
        <Text>Animation</Text>
      </Animated.View>
    </View>
  );
}
