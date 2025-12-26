import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

type PropTypes = {
  style?: StyleMedia;
  label?: string;
  onPress?: Function;
};

const Button = (props: PropTypes) => {
  const {style = {}, label = 'Next', onPress = () => {}} = props;

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16a085',
  },
  text: {
    color: '#FFF',
    paddingVertical: 8,
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default Button;
