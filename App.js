import React from "react";
import { ScrollView, FlatList, SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function App() {
  const data = [
    { id: "1", title: "Rosa" },
    { id: "2", title: "Azul" },
    { id: "3", title: "Azul-claro" },
    { id: "4", title: "Roxo" },
    { id: "5", title: "Lilás" },
    { id: "6", title: "Rosa Claro" },
    { id: "7", title: "Vermelho" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        {data.map((item2) => (
          <View key={item2.id} style={styles.item2}>
            <Text style={styles.title}>{item2.title}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 80,
  },
  item2: {
    backgroundColor: "#a096ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 80,
    maxHeight: 70,
  },
  title: {
    fontSize: 16,
  },


});
