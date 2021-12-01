import React, { useState } from 'react';
import MainBottomBar from '../Includes/MainBottomBar/MainBottomBar';
import mainStyles from '../main.css';
import { View, ImageBackground, FlatList } from 'react-native';
import DomRecListChild from '../DomRecListChild/DomRecListChild';

const Domicilio = (props)=>{
    const domicilios = [
        { sampleKey : "1", tipoRegistro:"DOM", numeroRegistro:"125489", arrayFormulas:["15487", "25489", "98674"], direccion:"Carrera 24 # 71A - 22 Manuela Beltrán" },
        { sampleKey : "2", tipoRegistro:"DOM", numeroRegistro:"125490", arrayFormulas:["81275", "93845", "45287"], direccion:"Carrera 24 # 71A - 22 Manuela Beltrán" },
        { sampleKey : "3", tipoRegistro:"DOM", numeroRegistro:"125491", arrayFormulas:["33256", "889521"], direccion:"Carrera 24 # 71A - 22 Manuela Beltrán" },
        { sampleKey : "4", tipoRegistro:"DOM", numeroRegistro:"125492", arrayFormulas:["48957", "78487", "11245"], direccion:"Carrera 24 # 71A - 22 Manuela Beltrán" },
        { sampleKey : "5", tipoRegistro:"DOM", numeroRegistro:"125493", arrayFormulas:["18957",], direccion:"Carrera 24 # 71A - 22 Manuela Beltrán" },
    ]
    const renderDomicilios = ({item})=>{
        return <DomRecListChild id = { item.sampleKey } registro = { item } props = { props } />
    }
    return(
        <ImageBackground style = {[ styles.bg_image_container, { padding:0, margin:0 } ]} source = { require('../assets/backgroundApp/backgroundApp.png') } >
        <View style = { styles.containerViewWithBottomNav } >
            <View style = { styles.containerContentOverBottomBar } >
                <FlatList
                    keyExtractor = { item => item.sampleKey }
                    data = { domicilios }
                    renderItem = { renderDomicilios }
                />
            </View>
            <MainBottomBar props = { props } />
        </View>
        </ImageBackground>
    )
}

const styles = ({
    ...mainStyles
})

export default Domicilio;