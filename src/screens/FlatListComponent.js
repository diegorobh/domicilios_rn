import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';

const FlatListComponent = ()=>{

    const myData = [
        { name: "Diego 1"},
        { name: "Diego 2"},
        { name: "Diego 3"},
        { name: "Diego 4"},
        { name: "Diego 5"},
        { name: "Diego 6"},
        { name: "Diego 7"},
        { name: "Diego 8"},
        { name: "Diego 9"}
    ];

    const styles = StyleSheet.create({
        textListTitle: {
            fontSize : 20
        },
        normalText: {
            fontSize : 10
        }
    })

    const renderItem = ({item})=>{
        return (
            <View>
                <Text style = {styles.textListTitle}>{ item.name }</Text>
                <Text style = {styles.normalText}>Texto de Contenido</Text>
            </View>
        )
    };

    return (
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator = { false }
        keyExtractor = { item => item.name }
        data = { myData }
        renderItem = { renderItem }
        />
    )
}

export default FlatListComponent;