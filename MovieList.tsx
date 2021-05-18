import React, { useState, FC, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swipeable from 'react-native-gesture-handler/Swipeable';

interface Props {
  item: any;
}

// interface action {
//   progress: any;
//   dragX: any;
// }

const LeftActions = (progress, dragX) => {
  const dragLeft = dragX.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0, 5, 25]
  })
  return (
    <View style={styles.leftAction}>
      <Animated.Text style={[styles.actionText, { transform: [{ translateX: dragLeft }] }]}>Archive</Animated.Text>
    </View>
  );
};

const RightActions = (progress, dragX) => {
  const dragRight = dragX.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0, 20, 50]
  })
  return (
    <View style={styles.rightAction}>
      <Animated.Text style={[styles.actionText, {transform: [{translateX: dragRight}]}]}>Delete</Animated.Text>
    </View>
  )
};

const MovieList: FC<Props> = ({ item }) => {
  const dimensions = useWindowDimensions();
  const [changeColor, setChangeColor] = useState(true);
  const rotate = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;
  const scaleText = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   Animated.stagger(300, [
  //     Animated.timing(scale, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true
  //     }),
  //     Animated.timing(rotate, {
  //       toValue: 300,
  //       duration: 1000,
  //       useNativeDriver: true
  //     }),
  //     Animated.timing(scaleText, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: true
  //     }),
  //   ]).start();
  // }, []);

  // const rotateAnim = rotate.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ['0deg', '360deg']
  // })

  return (
    <View style={{ margin: 12 }}>
      <Swipeable renderLeftActions={LeftActions} renderRightActions={RightActions}>
        <TouchableOpacity activeOpacity={0.5}>
          <Animated.View style={styles.container}>
            <View style={styles.item}>
              <Animated.Image
                style={styles.movieImg}
                source={item.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.content}>
              <Animated.Text style={styles.movieTitle}>{item.title}</Animated.Text>
              <Icon
                style={styles.icon}
                name={item.icon}
                size={25}
                color={changeColor ? '#ffff' : '#80b918'}
                onPress={() => { setChangeColor(preSate => !preSate) }}
              />
              <View style={{ flexDirection: 'row', paddingTop: 65 }}>
                <Animated.Text style={styles.rate}>{item.rate}</Animated.Text>
                <View style={{ paddingLeft: 10 }}>
                  <Animated.Text style={styles.release}>{item.release}</Animated.Text>
                  <Animated.Text style={styles.time}>{item.time}</Animated.Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212529',
    borderRadius: 8,
  },
  item: {
    flex: 0.5,
  },
  movieImg: {
    width: '100%',
    height: 210,
    borderRadius: 8,
  },
  content: {
    flex: 0.5,
    padding: 10,
    height: '100%',
  },
  movieTitle: {
    fontSize: 20,
    paddingBottom: 15,
    color: 'white',
  },
  icon: {
    textAlign: 'right',
  },
  rate: {
    textAlignVertical: 'center',
    fontSize: 25,
    color: '#ca6702',
  },
  release: {
    color: 'white',
  },
  time: {
    fontSize: 11,
    color: 'white',
  },
  leftAction: {
    backgroundColor: '#4895ef',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    borderRadius: 5,
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
    fontSize: 25
  },
  rightAction: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    borderRadius: 5,
  }
});

export default MovieList;
