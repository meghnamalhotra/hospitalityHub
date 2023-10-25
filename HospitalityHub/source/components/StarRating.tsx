import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({
  rating,
  size,
  color,
}: {
  rating: number;
  size: number;
  color: string;
}) => {
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starType =
      i <= roundedRating
        ? 'star'
        : i - 0.5 === roundedRating
        ? 'star-half-o'
        : 'star-o';

    stars.push(<Icon key={i} name={starType} size={size} color={color} />);
  }

  return (
    <View style={styles.container}>
      <View>{stars[0]}</View>
      <View style={styles.star}>{stars[1]}</View>
      <View style={styles.star}>{stars[2]}</View>
      <View style={styles.star}>{stars[3]}</View>
      <View style={styles.star}>{stars[4]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginLeft: 8,
  },
});

export default StarRating;
