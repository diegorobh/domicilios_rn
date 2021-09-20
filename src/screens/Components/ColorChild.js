import React, { useState } from 'react';
import { Text, View } from 'react-native';

const ColorChild = (props)=>{
    const randomColor = ()=>{
        const random = ()=>{ return Math.ceil(Math.random() * 255) };
        return `rgb(${random()}, ${random()}, ${random()})`;
    }
    return (
        <View style = { { backgroundColor : randomColor(), width: 100, height: 100,marginBottom:20 } } >
            <Text >"{props.title}"</Text>
        </View>
    )
};

export default ColorChild;