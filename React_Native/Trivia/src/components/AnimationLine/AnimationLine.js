import React, { useState, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const AnimationLine = (props) => {
  const lineWidth = props.lineWidth;
  const time = props.time;

  const [ animation ] = useState(new Animated.Value(0));

  useEffect(() => {
    // Burada süre ile ilgili değişiklikleri takip edebilir ve animasyonu güncelleyebilirsin
    const duration = 5000; // 5 saniyelik bir süre
    Animated.timing(animation, {
      toValue: 1, // 1'e ulaşıncaya kadar olan süre
      duration: duration,
      useNativeDriver: true, // useNativeDriver true ise animasyon daha performanslı çalışır
    }).start();
  }, [animation]);

   /*
   // Önce test et sonra titret
    useEffect(() => {
    // Burada süre ile ilgili değişiklikleri takip edebilir ve animasyonu güncelleyebilirsin
    Animated.timing(animation, {
      toValue: 0, // 1'e ulaşıncaya kadar olan süre
      duration: 0,
      useNativeDriver: true, // useNativeDriver true ise animasyon daha performanslı çalışır
    }).start();
  }, [props.questionId]);
  */
  const interpolatedColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(247, 157, 163, 1)','rgba(247, 157, 163, 1)'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.line,{width:lineWidth},
          {
            backgroundColor: interpolatedColor,
            width: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: '#f7cbc1',
    borderRadius:20,
  },
  line: {
    height: 10,
    borderRadius:20,
  },
});

export default AnimationLine;
