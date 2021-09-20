import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import ImageDetail from './Components/ImageDetail';

const styles = StyleSheet.create({
    claseEjemplo : {
        fontSize : 20
    }
})

const ImageScreen = ()=>{
    return (
        <View>
            <ImageDetail src = { require('./Components/beach.jpg') } title = "Beach" score = { 9 } />
            <ImageDetail src = { require('./Components/forest.jpg') } title = "Forest" score = { 10 } />
            <ImageDetail src = { require('./Components/mountain.jpg') } title = "Mountain" score = { 11 } />
        </View>
    )
}

export default ImageScreen;