import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

var PRODUCTS_DATA = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    picture: require('./src/img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./src/img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description:
      'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./src/img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./src/img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description:
      'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./src/img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./src/img/fairline.jpg'),
  },
];

const Getaboatapp = () => {
  let boatArr = [];
  for (let i = 0; i < PRODUCTS_DATA.length; i++) {
    let boat = PRODUCTS_DATA[i];
    boatArr.push(<Text key={boat.name}>{boat.name}</Text>);
    boatArr.push(<Text key={boat.description}>{boat.description}</Text>);
    boatArr.push(<Image source={boat.picture} />);
    console.log(boatArr);
  }
  return (
    <ScrollView>
      <Text>GetABoat-For Sale</Text>
      <View>{boatArr}</View>
    </ScrollView>
  );
};

export default Getaboatapp;
