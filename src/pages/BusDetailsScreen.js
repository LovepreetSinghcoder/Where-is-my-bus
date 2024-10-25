import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Mock data for bus stops (replace with API call or dynamic data)
const mockBusDetails = {
  id: '1',
  route: '101',
  name: 'City Express',
  stops: [
    { id: '1', name: 'Central Station', time: '10:00 AM' },
    { id: '2', name: 'City Mall', time: '10:15 AM' },
    { id: '3', name: 'East End', time: '10:30 AM' },
  ],
};

const BusDetailsScreen = ({ route, navigation }) => {
  // Get busId from the navigation route parameters
  const { busId } = route.params;

  // For now, using mock data, but replace this with a fetch from API or state
  const busDetails = mockBusDetails; // This would be fetched dynamically based on busId

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus {busDetails.route} - {busDetails.name}</Text>

      <Text style={styles.subTitle}>Stops:</Text>

      <FlatList
        data={busDetails.stops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.stopItem}>
            <Text style={styles.stopName}>{item.name}</Text>
            <Text style={styles.stopTime}>{item.time}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Search</Text>
      </TouchableOpacity>
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
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A', // Slate grey for text
    marginBottom: 10,
  },
  stopItem: {
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stopName: {
    fontSize: 16,
    color: '#333',
  },
  stopTime: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#50E3C2', // Emerald green for action button
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BusDetailsScreen;
