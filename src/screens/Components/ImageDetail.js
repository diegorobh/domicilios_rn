import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    textoTitulo : {
        fontSize : 20
    }
})

const ImageDetail = ({ src, title, score })=>{
    return (
        <View>
            <Text style = { styles.textoTitulo }>{ title } - { score } </Text>
            <Image source = { src } />
        </View>
    )
}

export default ImageDetail;