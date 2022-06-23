/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Node, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';


const App = () => {  

  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    }); 
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'OK'})
    } else {
      
      setItems(prevItems => {
        return[{id: 5, text}, ...prevItems]
      })
    }
  }

  
  return (
    <View>
    <View>
    <AddItem addItem={addItem}/>
    </View>
    <View style = {styles.lineStyle} />
    <View>
    <FlatList
        data={items}
        renderItem={({ item }) => (
           <ListItem item={item} deleteItem={deleteItem} />

        )}
        
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Search:{
    backgroundColor:'#00ffff',
    margin:10,
    borderRadius:10,
    paddingLeft:10,
    flexDirection:'row',
    width:'85%'
  },
  searchbar:{
    marginLeft:5,
    fontSize:19,
    fontWeight:'bold',
    width:'85%'

  },
  Icon:{
    margin:6,

  },
  Button:{
    marginLeft:1000
  },
  appButtonContainer: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  appButtonText: {
    fontSize: 40,
    color: "red",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    padding:5
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
}
});

export default App;
