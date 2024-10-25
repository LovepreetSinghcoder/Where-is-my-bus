import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TimetableScreen = ({ route, navigation }) => {
  const { busId } = route.params; // Get busId passed from previous screen
  const [timetable, setTimetable] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch timetable data from the API based on the busId
    const fetchTimetable = async () => {
      try {
        const response = await fetch(`https://buslio-api-v1.onrender.com/api/routes/${busId}`);
        const data = await response.json();
        setTimetable(data);
      } catch (err) {
        setError('Failed to load timetable.');
      } finally {
        setLoading(false);
      }
    };

    fetchTimetable();
  }, [busId]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      {/* Display the route name */}
      <Text style={styles.title}>Bus Route: {timetable.routeName}</Text>
      
      {/* Display "Up Trips" if available */}
      {timetable.upTrips && timetable.upTrips.length > 0 && (
        <>
          <Text style={styles.subTitle}>Up Trips:</Text>
          <FlatList
            data={timetable.upTrips[0].stops}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.stopItem}>
                <Text style={styles.stopName}>{item.stopName}</Text>
                <Text style={styles.arrivalTime}>Arrival: {item.arrivalTime}</Text>
              </View>
            )}
          />
        </>
      )}

      {/* Display "Down Trips" if available */}
      {timetable.downTrips && timetable.downTrips.length > 0 && (
        <>
          <Text style={styles.subTitle}>Down Trips:</Text>
          <FlatList
            data={timetable.downTrips[0].stops}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.stopItem}>
                <Text style={styles.stopName}>{item.stopName}</Text>
                <Text style={styles.arrivalTime}>Arrival: {item.arrivalTime}</Text>
              </View>
            )}
          />
        </>
      )}

      {/* Back Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
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
    color: '#4A90E2',
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
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
  arrivalTime: {
    fontSize: 16,
    color: '#999',
  },
  button: {
    backgroundColor: '#50E3C2',
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

export default TimetableScreen;
