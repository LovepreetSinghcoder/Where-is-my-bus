import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const FavoriteScreen = ({ navigation }) => {
  // Mock favorite buses (replace with actual data from storage or API)
  const [favorites, setFavorites] = useState([
    { id: '1', route: '101', name: 'City Express' },
    { id: '2', route: '202', name: 'Downtown Loop' },
    { id: '3', route: '303', name: 'Airport Shuttle' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorite Buses</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.favoriteItem}
            onPress={() => navigation.navigate('BusDetails', { busId: item.id })} // Navigate to bus details
          >
            <Text style={styles.busRoute}>Route: {item.route}</Text>
            <Text style={styles.busName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noFavorites}>You have no favorite buses yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2', // Sky blue for branding
    marginBottom: 20,
    textAlign: 'center',
  },
  favoriteItem: {
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  busRoute: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A', // Slate grey for text
  },
  busName: {
    fontSize: 16,
    color: '#333',
  },
  noFavorites: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavoriteScreen;
