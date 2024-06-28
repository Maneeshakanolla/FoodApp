import React from 'react';
import { View, StyleSheet } from 'react-native';

const Circle = ({ diameter, color }) => {
  return (
    <View style={[styles.circle, { width: diameter, height: diameter, backgroundColor: "#999" }]} />
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius:999, // Use a large value to ensure the border radius is a circle
  },
});

export default Circle;