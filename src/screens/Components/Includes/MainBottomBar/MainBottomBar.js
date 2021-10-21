import React, { useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import MainBottomBarStyles from './MainBottomBar.css';
import mainStyles from '../../main.css';
import { Avatar } from 'react-native-paper';

const MainBottomBar = ( {props} )=>{

    return(
        <View style = { styles.containerButtons } >
            <TouchableOpacity  style = { [ styles.primaryButton, { width:"50%" }, { marginRight : 2 }, styles.mt_5 ] } onPress = { ()=>{ props.navigation.navigate("Domicilio"); } } >
                <Text style = { styles.buttonTextSize } >DOMICILIO</Text>
            </TouchableOpacity>
            <TouchableOpacity style = { [ styles.primaryButton, { width:"50%" }, { marginLeft : 2 }, styles.mt_5 ] } onPress = { ()=>{ props.navigation.navigate("Reclamar"); } } >
                <Text style = { [ styles.buttonTextSize ] } >RECLAMAR</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    ...mainStyles, ...MainBottomBarStyles
})

export default MainBottomBar;