import React from 'react';
import { ImageBackground, Image, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from './main.css';

const Welcome = ()=>{
    return (<View style = { styles.container_all_centered } >
<ImageBackground style = {styles.bg_image_container} source = { require('./assets/backgroundApp/backgroundApp.png') } >
            <Image source = { require('./assets/logoDuanaFormulacion/logoDuanaFormulacion.png') } />
            <View style = { [styles.white_text_container,styles.mt_10] } >
                <Text style = { styles.whiteBoxText } >
                Ahora puedes agendar tu cita para reclamar tus medicamentos o solicitar tu domicilio.
                Pensamos en tu bienestar.
                </Text>
                <Text style = { [ styles.whiteBoxTextBlue, styles.mt_5 ] } >
                DUANA está contigo!
                </Text>
            </View>

            <TouchableOpacity style = { [ styles.primaryButton, styles.mt_5 ] } >
                <Text style = { styles.buttonTextSize } >LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style = { [ styles.grayButton, styles.mt_5 ] } >
                <Text style = { styles.buttonTextSize } >REGISTRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style = { [ styles.mt_10 ] } >
            <Text style = { [ styles.buttonTextSize, styles.blueLink ]} >Olvidé mi Contraseña</Text>
            </TouchableOpacity>
            </ImageBackground>
    </View>)
}

const styles = StyleSheet.create({
        ...mainStyles
})

export default Welcome;