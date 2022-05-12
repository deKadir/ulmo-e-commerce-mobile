import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import React from 'react';

export default function SafeArea({ children }) {
  return <SafeAreaView style={styles.view}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  view: {
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },
});
