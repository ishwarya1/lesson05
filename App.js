/**
 * Lesson 05 Activities
 */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./src/img/doctor-sleep.jpg'),
  },
  {title: 'Midway', year: '2019', poster: require('./src/img/midway.jpg')},
];
const App = () => {
  let moviesArr = [];
  for (let i = 0; i < MOVIES_DATA.length; i++) {
    let movie = MOVIES_DATA[i];
    moviesArr.push(<Text key={movie.title}>{movie.title}</Text>);
    moviesArr.push(<Text key={movie.year}>{movie.year}</Text>);
    moviesArr.push(<Image source={movie.poster} />);
    console.log(moviesArr);
  }
  return (
    <ScrollView>
      <View>{moviesArr}</View>
    </ScrollView>
  );
};

export default App;
