import React, { useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import ColorChild from './ColorChild';

const ColorComponent = ()=>{
    const [idItem, setIdItem] = useState(0);
    const [arrayColors, setArrayColors] = useState([]);

    const addItem = ()=>{
        setIdItem(idItem + 1);
        setArrayColors([...arrayColors,idItem]);
        console.log(idItem, "y el array es = ",arrayColors);
    }

    const styles = StyleSheet.create({
        containerFlatList : {
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingTop:20,
            paddingBottom:20
        }
    })

    return (
        <View>
            <Button
                title = "Adicionar Color"
                onPress = {()=>{
                    addItem(); 
                }}
                />
             <FlatList
            columnWrapperStyle = { styles.containerFlatList }
            numColumns={ 4 } 
            data = {arrayColors}
            renderItem = {({ item })=>{
                return <ColorChild title = {item}/>
            }}
            keyExtractor = { item => { return String(item) } }
            /> 
        </View>
    )
}

export default ColorComponent;

