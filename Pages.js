import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles, stylesBtn } from './Style'

/*----Navigation stuff----*/

//FUNCTION: HomeScreen
//PURPOSE:  Defines attributes of the HomeScreen page
//PARAMS:   {navigation} by default provided to all items in Stack Navigator
export function HomeScreen({navigation}) {
    //state variable
    const [count, setCount] = useState(0);
  
    return (
        <View style={styles}>
            <Text>Home Screen</Text>
            <Text>{count}</Text>
            <br></br>
            <Button
                title="Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Count"
                onPress={() => setCount(count + 1)}  
            />
            
        </View>
    );
}
  
//PURPOSE:  Defines the attributes of the DetailsScreen page
export function DetailsScreen() {
    return (
        <View style={styles}>
            <Text>This is technically an 'app'</Text>
        </View>
    );
}