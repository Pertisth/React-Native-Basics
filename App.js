import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState(
    [
      { name: 'Pertisth', key: '1' },
      { name: 'singh', key: '2' },
      { name: 'abhinav', key: '3' },
      { name: 'niket', key: '4' },
      { name: 'harshit', key: '5' },
      { name: 'Pertisth', key: '6' },
      { name: 'ansari', key: '7' },
      { name: 'abhinav', key: '8' },
      { name: 'niket', key: '9' },
      { name: 'harshit', key: '10' },
      { name: 'Pertisth', key: '11' },
      { name: 'ansari', key: '12' },
      { name: 'abhinav', key: '13' },
      { name: 'niket', key: '14' },
      { name: 'harshit', key: '15' },
      { name: 'harshit', key: '15' },
      { name: 'harshit', key: '15' },
      { name: 'harshit', key: '15' },
      { name: 'harshit', key: '15' },
      { name: 'harshit', key: '15' },

    ]
  )

  return (
    <View style={styles.container}>
    <ScrollView>
      {
        people.map((item) => {
          return (
            <View key={item.key}>
              <Text style = {styles.item}>{item.name}</Text>
            </View>
          )
        }
        )}
        </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    borderColor: 'blue',
    padding: 8,
  },
  item: {
    marginTop: 24, 
    padding: 2, 
    height: 30 ,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
