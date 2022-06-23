import React, {useState} from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title, addItem }) => {
    
    const [text, setText] = useState('');
    const onchange = textValue => {setText(textValue)};



  return (
    <View style={{flexDirection:'row'}}>

    {/*searchbar*/}

     <View style={styles.Search}>
     <Icon name="search" size={30} color="#808080" style={styles.Icon}/>
       <TextInput placeholder='Search...' placeholderTextColor={'#808080'} style={styles.searchbar} onChangeText={ onchange}/>
       
     </View>
     <View>
     <TouchableOpacity onPress={() => addItem(text)} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>+</Text>
  </TouchableOpacity>
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
 
export default AddItem;