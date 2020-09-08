import React from 'react';
import {SafeAreaView} from 'react-native';
import Title from '@components/Title';

export default function Application() {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Title title="TS Aliases, yeah!" />
    </SafeAreaView>
  );
}
