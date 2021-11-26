import React, { useEffect, useContext } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import MainBottomBarStyles from './MainBottomBar.css';
import mainStyles from '../../main.css';
import { Avatar } from 'react-native-paper';
import ActiveModule from '../../Contexts/ActiveModule';

const MainBottomBar = ( {props} )=>{

    const c_ActiveModule = useContext(ActiveModule); 

    return(
        <View style = { styles.containerButtons } >
            <TouchableOpacity  style = { [ styles.primaryButton, { width:"50%" }, { marginRight : 2 }, styles.mt_5, { backgroundColor: (c_ActiveModule.value == "DOMICILIO") ? "#B4FAFF" : "#fff"} ] } onPress = { ()=>{ 
                c_ActiveModule.setValue("DOMICILIO");
                    props.navigation.navigate("Domicilio"); 
                } } >
                <Text style = { styles.buttonTextSize } >DOMICILIO</Text>
            </TouchableOpacity>
            <TouchableOpacity style = { [ styles.primaryButton, { width:"50%" }, { marginLeft : 2 }, styles.mt_5, { backgroundColor: (c_ActiveModule.value == "RECLAMAR") ? "#B4FAFF" : "#fff"} ] } onPress = { ()=>{
                    c_ActiveModule.setValue("RECLAMAR");
                    props.navigation.navigate("Reclamar");
                } } >
                <Text style = { [ styles.buttonTextSize ] } >RECLAMAR</Text>
            </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    ...mainStyles, ...MainBottomBarStyles
})

export default MainBottomBar;