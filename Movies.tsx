import React, { useState } from 'react';
import MovieList from './MovieList';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  SectionList,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const Movies = () => {
  const MOVIES = [
    {
      id: uuidv4(),
      image: require('../assets/movie-images/Catch-me-if-you-can.jpg'),
      title: 'Catch Me If You Can',
      icon: 'like2',
      rate: '8.3',
      release: 'Released',
      time: '11 May(Out Now)',
    },
    {
      id: uuidv4(),
      image: require('../assets/movie-images/Cruella.jpg'),
      title: 'Cruella',
      icon: 'like2',
      rate: '8.1',
      release: 'Released',
      time: '11 May(Coming Soon)',
    },
    {
      id: uuidv4(),
      image: require('../assets/movie-images/Inglourious.jpg'),
      title: 'Inglourious Basterds',
      icon: 'like2',
      rate: '9.1',
      release: 'Released',
      time: '11 May(Out Now)',
    },
    {
      id: uuidv4(),
      image: require('../assets/movie-images/Sound.jpg'),
      title: 'Sound Of Metal',
      icon: 'like2',
      rate: '8.3',
      release: 'Released',
      time: '11 May(Out Now)',
    },
    {
      id: uuidv4(),
      image: require('../assets/movie-images/The-Godfather.jpg'),
      title: 'The Godfather',
      icon: 'like2',
      rate: '8.8',
      release: 'Released',
      time: '11 May(Out Now)',
    },
    {
      id: uuidv4(),
      image: require('../assets/movie-images/Those-Who-Wish-Me-Dead.jpg'),
      title: 'Those Who Wish Me Dead',
      icon: 'like2',
      rate: '7.1',
      release: 'Released',
      time: '15 May(Coming Soon)',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Movies</Text>
        <View>
        <FlatList
          data={MOVIES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MovieList item={item} />}
        />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#495057',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 12,
    marginTop: 10
  },
});

export default Movies;
