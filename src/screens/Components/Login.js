import React, { useState, useEffect } from 'react';
import { ImageBackground, SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from './main.css';
import Axios from 'axios';

const Login = ()=>{

    //const usuario

    useEffect(()=>{
        const makeReq = async()=>{
            console.log("si entra acá");
            const axiosRequest = await makeRequest();
        }
        makeReq();
    },[])

    const makeRequest = async()=>{
        const test = await Axios.get("https://jsonplaceholder.typicode.com/todos/2");
        console.log(test);
        return test
    }
 
    return (<View style = { styles.container_all_centered } >
<ImageBackground style = {styles.bg_image_container} source = { require('./assets/backgroundApp/backgroundApp.png') } >
            <Image style = { styles.mb_10 } source = { require('./assets/logoDuanaFormulacion/logoDuanaFormulacion.png') } />

            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_10 ] }
                placeholder="Usuario"
                label = "Usuario"
            />

            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Contraseña"
                label = "Contraseña"
            />

            <TouchableOpacity style = { [ styles.primaryButton, styles.mt_5 ] } >
                <Text style = { styles.buttonTextSize } >LOGIN</Text>
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

export default Login;