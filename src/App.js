import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Buslio</Text>
      <Button 
        title="Find a Bus" 
        onPress={() => navigation.navigate('BusSearch')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
