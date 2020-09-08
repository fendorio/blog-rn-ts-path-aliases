import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface ITitleProps {
  title: string;
}

export default function Title(props: ITitleProps) {
  const {title} = props;
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  } as TextStyle,
});
