import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function AccountView() {
  return (
    <View>
      <Text style={styles.text}>sAccountVieww</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Light',
  },
});
