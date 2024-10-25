import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BusSearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [busResults, setBusResults] = useState([]);

  // Mock data for bus routes (replace with API call)
  const buses = [
    { id: '1', route: '101', name: 'City Express' },
    { id: '2', route: '202', name: 'Downtown Loop' },
    { id: '3', route: '303', name: 'Airport Shuttle' },
  ];

  const handleSearch = () => {
    if (searchQuery) {
      const filteredBuses = buses.filter(bus =>
        bus.route.includes(searchQuery) || bus.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBusResults(filteredBuses);
    } else {
      setBusResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for a Bus</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter bus route or name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}  // Trigger search on enter
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={busResults}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.busItem}
            onPress={() => navigation.navigate('BusDetails', { busId: item.id })} // Navigate to bus details
          >
            <Text style={styles.busRoute}>Route: {item.route}</Text>
            <Text style={styles.busName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noResults}>No buses found.</Text>}
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
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#50E3C2', // Emerald green for action button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  busItem: {
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
  noResults: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BusSearchScreen;
