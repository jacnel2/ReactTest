import React, { useState } from 'react';
import { Text, View, Button} from 'react-native';
import { styles } from './Style';
import PropTypes from 'prop-types';

/*----Navigation stuff----*/

//FUNCTION: HomeScreen
//PURPOSE:  Defines content of the HomeScreen page
//PARAMS:   {navigation} by default provided to all items in Stack Navigator
export function HomeScreen({navigation}) {
    //state variable
    const [count, setCount] = useState(0);
  
    return (
        <View>
            <View style={styles.default}>
                <Text style={styles.txtSig}>Home Screen</Text>
                <Text style={styles.txtMin}>{count}</Text>
                <br></br>
                <View style={styles.btnGroup}>
                    <View style={styles.btnInd}>
                        <Button
                            title="Details"
                            onPress={() => navigation.navigate('Details')}
                        />
                    </View>
                    <View style={styles.btnInd}>
                        <Button
                            title="Count"
                            //Button on press increments count hook (state var) which is displayed on screen
                            onPress={() => setCount(count + 1)}  
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

//PURPOSE: Prop validation to keep things stable
HomeScreen.propTypes = {
    //navigation prop of function HomeScreen must be instance of Navigator
    navigation: PropTypes.instanceOf(Navigator)
}
  
//PURPOSE:  Defines the content of the DetailsScreen page
export function DetailsScreen() {
    return (
        <View style={styles.default}>
            <Text style={styles.txtMin}>This is technically an app</Text>
        </View>
    );
}