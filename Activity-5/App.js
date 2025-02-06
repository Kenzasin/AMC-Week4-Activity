import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const morningToDo = ['lulu', 'sleep', 'eat', 'sleep again', 'wake up'];
  const afternoonToDo = ['Ligo', 'Meryenda', 'Toothbrush', 'Selpon', 'MOBA'];
  const eveningToDo = ['Higa', 'Kain', 'Toothbrush', 'Tulog'];

  const [selectedItem, setSelectedItem] = useState();

  const handlePress = (item) => {
    setSelectedItem(item);
  };

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.sectionHeader}>MORNING</Text>
          <FlatList
            data={morningToDo}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <View style={[
                  styles.itemContainer,
                  { backgroundColor: item === selectedItem ? '#E8E8E8' : '#D20103' }
                ]}>
                  <Text style={styles.textBold}>
                    <Text style={styles.textItalic}>{item}</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.sectionHeader}>AFTERNOON</Text>
          <FlatList
            data={afternoonToDo}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <View style={[
                  styles.itemContainer,
                  { backgroundColor: item === selectedItem ? '#E8E8E8' : '#ADD8E6' }
                ]}>
                  <Text style={styles.textBold}>
                    <Text style={styles.textItalic}>{item}</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={styles.sectionHeader}>EVENING</Text>
          <FlatList
            data={eveningToDo}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item)}>
                <View style={[
                  styles.itemContainer,
                  { backgroundColor: item === selectedItem ? '#E8E8E8' : '#5DE2E7' }
                ]}>
                  <Text style={styles.textBold}>
                    <Text style={styles.textItalic}>{item}</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: 'calibre',
    marginTop: 20,
    textAlign: 'left',
    color: '#333',
  },
  textBold: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textItalic: {
    fontStyle: 'timesnewroman',
  },
  itemContainer: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
