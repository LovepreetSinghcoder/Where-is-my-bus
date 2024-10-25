import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const RouteScreen = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all bus routes data
  const fetchRoutes = async () => {
    // try {
    //   const response = await axios.get("http://192.168.146.47:3000/api/routes"); // Update with your local API URL

    // //   console.log("This is the data from api", response);
    //   setRoutes(response.data);
    // } catch (err) {
    //   setError("Error fetching bus routes. Please try again later.");
    // } finally {
    //   setLoading(false);
    // }

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

            <Text style={styles.subtitle}>Stops:</Text>
            {/* <FlatList
              data={item.stops}
              keyExtractor={(stop) => stop._id}
              renderItem={({ stop }) => (
                <View style={styles.stopItem}>
                  <Text style={styles.stopName}>{stop.stopName}</Text>
                  <Text style={styles.arrivalTime}>{stop.arrivalTime}</Text>
                </View>
              )}
              ListEmptyComponent={<Text style={styles.noResults}>No stops available for this route.</Text>}
            /> */}

            <FlatList
              data={item.stops}
              keyExtractor={(stop) => stop._id} // Correctly using stop._id for unique keys
              renderItem={(
                { item: stop } // Destructure item here to get stop
              ) => (
                <View style={styles.stopItem}>
                  <Text style={styles.stopName}>{stop.stopName}</Text>
                  <Text style={styles.arrivalTime}>{stop.arrivalTime}</Text>
                </View>
              )}
              ListEmptyComponent={
                <Text style={styles.noResults}>
                  No stops available for this route.
                </Text>
              }
            />

            {/* You can add upTrips and downTrips sections here if needed */}
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noResults}>No bus routes found.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 20,
    textAlign: "center",
  },
  routeItem: {
    backgroundColor: "#F1F1F1",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  routeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 16,
    color: "#666",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#4A4A4A",
  },
  stopItem: {
    backgroundColor: "#E7E7E7",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  stopName: {
    fontSize: 16,
    color: "#333",
  },
  arrivalTime: {
    fontSize: 14,
    color: "#666",
  },
  noResults: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default RouteScreen;
