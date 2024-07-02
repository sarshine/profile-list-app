import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const contacts = [
  {
    id: "1",
    name: "Sarah Cantik",
    photo:
      "https://i.pinimg.com/736x/4c/4e/cc/4c4ecc8ec23a2422f703746ca05a5138.jpg",
    no_telp: "+62 896-8729-6674",
    sosmed: "sarshine",
    address: "Kayangan",
  },
  {
    id: "2",
    name: "Mett Galak",
    photo:
      "https://i.pinimg.com/originals/36/4a/a5/364aa5a85fa038d3334e713967a48960.jpg",
    no_telp: "+62 857-9458-9283",
    sosmed: "mett_galak",
    address: "Bali",
  },
  {
    id: "3",
    name: "Inggot",
    photo:
      "https://media.licdn.com/dms/image/D5603AQEss7U6DFcklg/profile-displayphoto-shrink_800_800/0/1701089829759?e=1725494400&v=beta&t=DEQ2MJ1udcdjehtLQOayKH9k5u0SGiY2gRDk7Kzhn0k",
    no_telp: "+62 857-7003-2596",
    sosmed: "inggot_suka_bikin_kesel",
    address: "Kost 99",
  },
  {
    id: "4",
    name: "Chalvin",
    photo:
      "https://tse3.mm.bing.net/th?id=OIP.MNEq6Gf5njfV4EWn2CihIgHaIQ&pid=Api&P=0&h=180",
    no_telp: "+62 856-2498-5966",
    sosmed: "calpinzz",
    address: "Jampunk",
  },
];

function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image source={{ uri: item.photo }} style={styles.contactPhoto} />
      <Text style={styles.contactName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => handleDetailPress(item)}
      >
        <Text style={styles.detailButtonText}>Detail</Text>
      </TouchableOpacity>
    </View>
  );

  const handleDetailPress = (contact) => {
    navigation.navigate("Profile", {
      id: contact.id,
      name: contact.name,
      photo: contact.photo,
      no_telp: contact.no_telp,
      sosmed: contact.sosmed,
      address: contact.address,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>List Contact</Text>
      </View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contactList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "lightgrey",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
  },
  contactList: {
    padding: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactName: {
    fontSize: 16,
    flex: 1,
  },
  detailButton: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 10,
  },
  detailButtonText: {
    color: "black",
  },
});

export default HomeScreen;
