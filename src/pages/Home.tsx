import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


export default function Home() {

  const [showHomePage, setShowHomePage] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home Page
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 900,
    letterSpacing: 0.2,
    textAlign: 'center',
    margin: 10,
    color: '#545454',
  }
});
