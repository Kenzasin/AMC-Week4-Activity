import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.textBold}>Tamesa <Text style={styles.textItalic}>Kenneth</Text></Text>
        </View>
    </ScrollView>
  );
 
};
const styles = StyleSheet.create({
  container: {
      borderWidth: 1,
      padding: 20,
      backgroundColor: "#ff5733",
 
  },
  textBold:{
      fontSize: 20,
      textAlign: "center",
      fontWeight: 'bold',
  },
  textItalic:{
      fontStyle: "italic"
  }
 
  })

export default App;