import React, { Fragment, useState, useEffect } from 'react';
import { ImageBackground, SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from '../main.css';

const Registro = (props)=>{
    const [ nextStep, setNextStep ] = useState(false);
    const [ usuario, setUsuario ] = useState({
        tipo_documento:"",
        numero_documento:"",
        departamento:"",
        municipio:"",
        direccion:"",
        telefono:"",
        correo_electronico:"",
        usuario:"",
        clave:"",
        confirmar_clave:""
    });

    const onInputChange = (value, name)=>{
        setUsuario( { ...usuario, [name] : value } );
        //setUsuario( Object.assign(usuario, { [name] : value } ) )
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
        <ImageBackground style = {styles.bg_image_container} source = { require('../assets/backgroundApp/backgroundApp.png') } >
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
    return (
        <Fragment>
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_10 ] }
                placeholder="Tipo de Documento"
                label = "Tipo de Documento"
                name = "tipo_documento"
                onChangeText = { (e)=>onInputChange(e,"tipo_documento") }  


            />
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Numero de Documento"
                label = "Numero de Documento"
                name = "numero_documento"
                onChangeText = { (e)=>onInputChange(e,"numero_documento") }
            />
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Departamento Reclamo / Domicilio"
                label = "Departamento Reclamo / Domicilio"
                name = "departamento"
                onChangeText = { (e)=>onInputChange(e,"departamento") }
            />
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Municipio Reclamo / Domicilio"
                label = "Municipio Reclamo / Domicilio"
                name = "municipio"
                onChangeText = { (e)=>onInputChange(e,"municipio") }
            />               
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Direcci??n Domicilio"
                label = "Direcci??n Domicilio"
                name = "direccion"
                onChangeText = { (e)=>onInputChange(e,"direccion") }
            />  
        </Fragment>      
    )
};

const SecondStep = ( { onInputChange, usuario } )=>{
    return (
        <Fragment>
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_10 ] }
                placeholder="Tel??fono"
                label = "Tel??fono"
                name = "telefono"
                onChangeText = { (e)=>onInputChange(e,"telefono") }
            />
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Correo Electr??nico"
                label = "Correo Electr??nico"
                name = "correo_electronico"
                onChangeText = { (e)=>onInputChange(e,"correo_electronico") }
            />
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Usuario"
                label = "Usuario"
                name = "usuario"
                onChangeText = { (e)=>onInputChange(e,"usuario") }
            />
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Contrase??a"
                label = "Contrase??a"
                name = "clave"
                onChangeText = { (e)=>onInputChange(e,"clave") }
            />               
            <TextInput
                style = { [ styles.whiteBoxText, styles.white_textfield, styles.mt_5 ] }
                placeholder="Confirmar Contrase??a"
                label = "Confirmar Contrase??a"
                name = "confirmar_clave"
                onChangeText = { (e)=>onInputChange(e,"confirmar_clave") }
            />  
        </Fragment>      
    )
};

export default Registro;