import React from 'react';
import { Image, Text, View, Button } from 'react-native';

const Welcome = ()=>{
    return (<View>
        <View>
            <Image source = { require('./assets/logoDuanaFormulacion/logoDuanaFormulacion.png') } />
        </View>
    </View>)
}

export default Welcome;