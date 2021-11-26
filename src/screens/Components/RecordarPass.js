import React, { Fragment, useState, useEffect } from 'react';
import { ImageBackground, SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from './main.css';

const RecordarPass = (props)=>{
    const [ nextStep, setNextStep ] = useState(false);
    const [ usuario, setUsuario ] = useState({
        codigo_verificacion:"",
        nueva_clave:"",
        confirmar_nueva_clave:"",
    });

    const onInputChange = (value, name)=>{
        setUsuario( { ...usuario, [name] : value } );
        console.log("STATE USUARIO ES AHORA =====================================================================",usuario)
    }

    const handleActionButton = ()=>{
        if(nextStep){ props.navigation.navigate("Domicilio") };
        const firstStepProperties = [ "tipo_documento", "numero_documento", "departamento", "municipio", "direccion" ];
        const fieldsEmpty = firstStepProperties.filter(propName => { return usuario[propName] == "" } );
        console.log("validateValues = ",fieldsEmpty)
        setNextStep(fieldsEmpty.length == 0);
    }

    return (
        <ImageBackground style = {styles.bg_image_container} source = { require('./assets/backgroundApp/backgroundApp.png') } >
        <View style = { [ styles.container_all_centered, styles.standartPaddingH ] } >
            

                { (nextStep)
                    ? <SecondStep onInputChange = { onInputChange } usuario = { usuario } />
                    : <FirstStep onInputChange = { onInputChange } usuario = { usuario } />
                }

                <TouchableOpacity style = { [ styles.primaryButton, styles.mt_5 ] } onPress = { handleActionButton } >
                    <Text style = { styles.buttonTextSize } >{ (nextStep) ? "REGISTRAR" : "SIGUIENTE" }</Text>
                </TouchableOpacity>

        </View>
        </ImageBackground>
    )
}
                //value = { usuario.tipo_documento }
const styles = StyleSheet.create({
        ...mainStyles
})

const FirstStep = ( { onInputChange, usuario } )=>{
    const sendVerificationCode = ()=>{
        console.log("Enviar codigo de verificación")
    }
    return (
        <Fragment>


                <View style={[styles.white_text_container, styles.mt_10]} >
                    <Text style={styles.whiteBoxText} >
                    Se ha enviado un código de verificación para actualización de tu contraseña a tu correo electrónico: 
                    </Text>
                        <Text style={[styles.whiteBoxTextBlue, styles.mt_5]} >
                        juanparengifo@gmail.com
                    </Text>
                    <TouchableOpacity style = { [ styles.primaryButton, styles.mt_5 ] } onPress = { sendVerificationCode } >
                        <Text style = { styles.buttonTextSize } >SIGUIENTE</Text>
                    </TouchableOpacity>
                </View>



            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_10 ] }
                placeholder="Tipo de Documento"
                label = "Tipo de Documento"
                name = "tipo_documento"
                onChangeText = { (e)=>onInputChange(e,"tipo_documento") }  


            />
        </Fragment>      
    )
};

const SecondStep = ( { onInputChange, usuario } )=>{
    return (
        <Fragment>
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_10 ] }
                placeholder="Teléfono"
                label = "Teléfono"
                name = "telefono"
                onChangeText = { (e)=>onInputChange(e,"telefono") }
            />
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Correo Electrónico"
                label = "Correo Electrónico"
                name = "correo_electronico"
                onChangeText = { (e)=>onInputChange(e,"correo_electronico") }
            />
        </Fragment>      
    )
};

export default RecordarPass;