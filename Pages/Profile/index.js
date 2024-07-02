import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function ProfileScreen({ route }) {
  if (!route.params) {
    return null;
  }

  const { name, no_telp, sosmed, address, photo } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.profilePhoto} />

      <Text style={styles.label}>Nama:</Text>
      <Text style={styles.value}>{name}</Text>

      <Text style={styles.label}>No Telpon:</Text>
      <Text style={styles.value}>{no_telp}</Text>

      <Text style={styles.label}>Sosial Media:</Text>
      <Text style={styles.value}>{sosmed}</Text>

      <Text style={styles.label}>Alamat:</Text>
      <Text style={styles.value}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;
