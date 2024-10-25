import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import Header from "../components/Header"; // Import the Header component

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }[styles.container]}>
      <Header
        title="Home"
        showBackButton={false} // No back button on Home screen
      />
      {/* <View style={}> */}
      <StatusBar style="auto" />
      <Text style={styles.title}>Welcome to Buslio</Text>
      <Text style={styles.subtitle}>Find your next bus with ease</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BusSearch")}
      >
        <Text style={styles.buttonText}>Find a Bus</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonTextSecondary}>View Timetables</Text>
      </TouchableOpacity>
      <View
        style={{ padding: "10px", backgroundColor: "white", height: "10px" }}
      >
        <Text>  . </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonTextSecondary}>Test Register Screen</Text>
      </TouchableOpacity>

      <View
        style={{ padding: "10px", backgroundColor: "white", height: "10px" }}
      >
        <Text>  . </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Text style={styles.buttonTextSecondary}>Test Favorites Screen</Text>
      </TouchableOpacity>

      <View
        style={{ padding: "10px", backgroundColor: "white", height: "10px" }}
      >
        <Text>  . </Text>
      </View>


      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Timetable", { busId: bus.id })}
      >
        <Text style={styles.buttonTextSecondary}>Test Timetable Screen</Text>
      </TouchableOpacity>

      <View
        style={{ padding: "10px", backgroundColor: "white", height: "10px" }}
      >
        <Text>  . </Text>
      </View>


      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Routes")}
      >
        <Text style={styles.buttonTextSecondary}>Test Routes Screen</Text>
      </TouchableOpacity>

      <View
        style={{ padding: "10px", backgroundColor: "white", height: "10px" }}
      >
        <Text>  . </Text>
      </View>


      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Routes2")}
      >
        <Text style={styles.buttonTextSecondary}>Test Routes2 Screen</Text>
      </TouchableOpacity>

      <View
        style={{ padding: "10px", backgroundColor: "white", height: "10px" }}
      >
        <Text>  . </Text>
      </View>


      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate("Routes1")}
      >
        <Text style={styles.buttonTextSecondary}>Test Routes1 Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White for clean, modern background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4A90E2", // Sky blue for brand clarity and trust
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#4A4A4A", // Slate grey for sleek text
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#50E3C2", // Emerald green for primary action
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonSecondary: {
    backgroundColor: "#F8C471", // Soft orange for secondary action
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonTextSecondary: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
