import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const RouteScreen = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all bus routes data
  const fetchRoutes = async () => {
    try {
      const response = await axios.get('https://buslio-api-v1.onrender.com/api/routes'); // Update with your local API URL
      setRoutes(response.data);
    } catch (err) {
      setError('Error fetching bus routes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Bus Routes</Text>
      <FlatList
        data={routes}
        keyExtractor={(item) => item._id} // Using _id for unique keys
        renderItem={({ item }) => (
          <View style={styles.routeItem}>
            <Text style={styles.routeName}>{item.routeName}</Text>
            <Text style={styles.details}>Duration: {item.duration}</Text>
            <Text style={styles.details}>Frequency: {item.frequency}</Text>

            {/* Stops Section */}
            <Text style={styles.subtitle}>Stops:</Text>
            <FlatList
              data={item.stops}
              keyExtractor={(stop) => stop._id} // Correctly using stop._id for unique keys
              renderItem={({ item: stop }) => ( // Destructure item here to get stop
                <View style={styles.stopItem}>
                  <Text style={styles.stopName}>{stop.stopName}</Text>
                  <Text style={styles.arrivalTime}>{stop.arrivalTime}</Text>
                </View>
              )}
              ListEmptyComponent={<Text style={styles.noResults}>No stops available for this route.</Text>}
            />

            {/* UpTrips Section */}
            <Text style={styles.subtitle}>Up Trips:</Text>
            {item.upTrips.length > 0 ? (
              item.upTrips.map((trip) => (
                <View key={trip._id} style={styles.tripItem}>
                  <Text style={styles.tripDetails}>
                    Start Time: {trip.startTime} - End Time: {trip.endTime}
                  </Text>
                  <FlatList
                    data={trip.stops}
                    keyExtractor={(stop) => stop._id} // Unique keys for stops
                    renderItem={({ item: stop }) => (
                      <View style={styles.stopItem}>
                        <Text style={styles.stopName}>{stop.stopName}</Text>
                        <Text style={styles.arrivalTime}>{stop.arrivalTime}</Text>
                      </View>
                    )}
                    ListEmptyComponent={<Text style={styles.noResults}>No stops available for this trip.</Text>}
                  />
                </View>
              ))
            ) : (
              <Text style={styles.noResults}>No up trips available for this route.</Text>
            )}

            {/* DownTrips Section */}
            <Text style={styles.subtitle}>Down Trips:</Text>
            {item.downTrips.length > 0 ? (
              item.downTrips.map((trip) => (
                <View key={trip._id} style={styles.tripItem}>
                  <Text style={styles.tripDetails}>
                    Start Time: {trip.startTime} - End Time: {trip.endTime}
                  </Text>
                  <FlatList
                    data={trip.stops}
                    keyExtractor={(stop) => stop._id} // Unique keys for stops
                    renderItem={({ item: stop }) => (
                      <View style={styles.stopItem}>
                        <Text style={styles.stopName}>{stop.stopName}</Text>
                        <Text style={styles.arrivalTime}>{stop.arrivalTime}</Text>
                      </View>
                    )}
                    ListEmptyComponent={<Text style={styles.noResults}>No stops available for this trip.</Text>}
                  />
                </View>
              ))
            ) : (
              <Text style={styles.noResults}>No down trips available for this route.</Text>
            )}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noResults}>No bus routes found.</Text>}
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
    color: '#4A90E2',
    marginBottom: 20,
    textAlign: 'center',
  },
  routeItem: {
    backgroundColor: '#F1F1F1',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  routeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#4A4A4A',
  },
  stopItem: {
    backgroundColor: '#E7E7E7',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  stopName: {
    fontSize: 16,
    color: '#333',
  },
  arrivalTime: {
    fontSize: 14,
    color: '#666',
  },
  tripItem: {
    marginTop: 10,
    backgroundColor: '#D5F5E3', // Light green for trip items
    padding: 10,
    borderRadius: 5,
  },
  tripDetails: {
    fontSize: 16,
    color: '#2E7D32', // Dark green for trip details
  },
  noResults: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RouteScreen;
