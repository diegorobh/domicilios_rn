import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MainBottomBarStyles from './MainBottomBar.css'

const MainBottomBar = ()=>{
    return(
        <View styles>
            <TouchableOpacity>
                <Text>Domicilio</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Reclamar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ...MainBottomBarStyles
})

export default MainBottomBar;