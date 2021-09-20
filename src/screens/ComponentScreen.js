import React from 'react';
import { Text, StyleSheet} from 'react-native';

const ComponentsScreen = ()=>{
    return (<Text style ={styles.textStyle}>
        Esto es un texto
    </Text>);
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50
    }
});

export default ComponentsScreen;