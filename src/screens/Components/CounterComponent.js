import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const CounterComponent = ()=>{
    const [counter, setCounter] = useState(0);
    return(
        <View>
            <Text>{counter}</Text>
            <Button onPress={()=>setCounter(counter + 1)} title = "Plus"/>
            <Button onPress={()=>setCounter(counter - 1)} title = "Substract"/>
        </View>
    )
}
export default CounterComponent;