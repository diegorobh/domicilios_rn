import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Avatar } from 'react-native-paper';
import DomRectListChildStyles from './DomRectListChild.css';
import mainStyles from '../main.css';

const DomRecListChild = ({ id, registro, props })=>{

    const { tipoRegistro, numeroRegistro, arrayFormulas, direccion } = registro;

    const createTwoButtonAlert = () => {
        console.log("click but no alert :(")
         Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    )};

    return(
        <View style = {[ styles.containerAllItems, { paddingHorizontal:10 }, styles.mb_10 ]}>
            <View>
                <View style = { styles.containerTitle } >
    <Text style = { styles.title } >{ tipoRegistro } No. {numeroRegistro}</Text>
                    <Avatar.Icon icon="circle" size={25} backgroundColor = "transparent" color = {"#FF7A00"} style = { styles.titleIcon } />
                </View>

                <View style = {[ styles.shortLine , { alignItself:"flex-start", marginVertical:5 } ]} />

                <View style = { [ styles.containerTitle ] } >
    <Text style = { styles.blackLightTextSubt } >Form No. <Text style = { styles.grayLightNormalText }>{ arrayFormulas.join(", ") }</Text></Text>
                </View>
                <View style = { [ styles.containerTitle, styles.mb_2 ] } >
    <Text style = { styles.grayLightNormalText }>{ direccion }</Text>
                </View>
            </View>
            <View style = { [styles.containerTitle, { justifyContent:"space-around", width:65 }] } >
                <TouchableOpacity onPress = { ()=>{ props.navigation.navigate((tipoRegistro == 'DOM') ? "DomicilioDetail" : "ReclamoDetail"); } } >
                    <Avatar.Icon icon="eye" backgroundColor = "transparent" style = { styles.titleIcon } width = {25} color = {"#006AA6"} size = {40} />
                </TouchableOpacity>
                <TouchableOpacity onPress = { createTwoButtonAlert } >
                    <Avatar.Icon icon="delete" backgroundColor = "transparent" style = { styles.titleIcon } width = {25} color = {"#BF3434"} size = {40} />
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create(
    {
        ...DomRectListChildStyles, ...mainStyles
    }
);

export default DomRecListChild;