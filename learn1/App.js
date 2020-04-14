import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './component/header/header.component';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
