import React, { useState } from 'react';
import MainBottomBar from '../Includes/MainBottomBar/MainBottomBar';
import mainStyles from '../main.css';
import { View, ImageBackground, FlatList } from 'react-native';
import DomRecListChild from '../DomRecListChild/DomRecListChild';

const Reclamar = (props)=>{
    const citas = [
        { sampleKey : "1", tipoRegistro:"CITA", numeroRegistro:"125489", arrayFormulas:["15487", "25489", "98674"], direccion:"Farm Cruz Verde B. Santa Ana | Cali" },
        { sampleKey : "2", tipoRegistro:"CITA", numeroRegistro:"125490", arrayFormulas:["81275", "93845", "45287"], direccion:"Farm Cruz Verde B. Santa Ana | Cali" },
        { sampleKey : "3", tipoRegistro:"CITA", numeroRegistro:"125491", arrayFormulas:["33256", "889521"], direccion:"Farm Cruz Verde B. Santa Ana | Cali" },
        { sampleKey : "4", tipoRegistro:"CITA", numeroRegistro:"125492", arrayFormulas:["48957", "78487", "11245"], direccion:"Farm Cruz Verde B. Santa Ana | Cali" },
        { sampleKey : "5", tipoRegistro:"CITA", numeroRegistro:"125493", arrayFormulas:["18957",], direccion:"Farm Cruz Verde B. Santa Ana | Cali" },
    ]
    const renderCitas = ({item})=>{
        return <DomRecListChild id = { item.sampleKey } registro = { item } props = { props } />
    }
    return(
        <ImageBackground style = {[ styles.bg_image_container, { padding:0, margin:0 } ]} source = { require('../assets/backgroundApp/backgroundApp.png') } >
        <View style = { styles.containerViewWithBottomNav } >
            <View style = { styles.containerContentOverBottomBar } >
                <FlatList
                    keyExtractor = { item => item.sampleKey }
                    data = { citas }
                    renderItem = { renderCitas }
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

export default Reclamar;