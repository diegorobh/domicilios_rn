import React from "react";
import { Text, StyleSheet, TouchableOpacity, Button, View } from "react-native";
import ColorComponent from './Components/ColorComponent';


const HomeScreen = (props) => {
  return (
    <View>

      <Text style={styles.text}>Esto es un texto normal</Text>

      <TouchableOpacity
        onPress = { ()=>{console.log("Touch en TouchableOpacity")} }>
          <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>

      <Button
        title = "Botón Corriente, navegar"
        onPress = { ()=>{
          props.navigation.navigate("FlatListComponent");
            console.log("Touch en Botón Corriente");
          } } />

      <Button
        title = "Go to ImageScreen"
        onPress = {
          ()=>{
            props.navigation.navigate("ImageScreen");
          }
        } />

      <Button
        title = "Go to Counter"
        onPress = {
          ()=>{
            props.navigation.navigate("CounterComponent");
          }
        } />

      <Button
        title = "Colors Component"
        onPress = {
          ()=>{
            props.navigation.navigate("ColorComponent");
          }
        }
        />

    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
