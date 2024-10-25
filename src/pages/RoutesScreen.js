// RoutesScreen.js

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const RoutesScreen = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchRoutes = async () => {
      //   try {
      //     const response = await axios.get('http://localhost:3000/api/routes');
      //     setRoutes(response.data);
      //   } catch (error) {
      //     console.error('Error fetching routes:', error);
      //   } finally {
      //     setLoading(false);
      //   }

      try {
        const response = await fetch("https://buslio-api-v1.onrender.com/api/routes");
        const data = await response.json();
        setRoutes(data);
      } catch (err) {
        // setError('Failed to load timetable.');
        console.log("Error while loading data..", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

//   console.log("Hey bro this is the data :", routes);
  // Render loading indicator
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Render the routes list
  return (
    <FlatList
      data={routes}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.routeContainer}>
          <Text style={styles.routeName}>{item.routeName}</Text>
          <Text>Duration: {item.duration}</Text>
          <Text>Frequency: {item.frequency}</Text>
          {item.stops && item.stops.length > 0  ? (
            <>
              <Text>Stops:</Text>
              {item.stops.map((stop) => (
                <Text key={stop._id}>
                  {stop.stopName} - {stop.arrivalTime}
                </Text>
              ))}
            </>
          ) : (
            <Text>No stops available for this route.</Text>
          )}
          {item.upTrips.length > 0 && (
            <>
              <Text>Up Trips:</Text>
              {item.upTrips.map((trip) => (
                <View key={trip._id}>
                  <Text>Start Time: {trip.startTime}</Text>
                  {trip.stops.map((stop) => (
                    <Text key={stop._id}>
                      {stop.stopName} - {stop.arrivalTime}
                    </Text>
                  ))}
                </View>
              ))}
            </>
          )}
          {item.downTrips.length > 0 && (
            <>
              <Text>Down Trips:</Text>
              {item.downTrips.map((trip) => (
                <View key={trip._id}>
                  <Text>Start Time: {trip.startTime}</Text>
                  {trip.stops.map((stop) => (
                    <Text key={stop._id}>
                      {stop.stopName} - {stop.arrivalTime}
                    </Text>
                  ))}
                </View>
              ))}
            </>
          )}
        </View>
      )}
    />
  );
};

// Styles for the component
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  routeContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  routeName: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RoutesScreen;
