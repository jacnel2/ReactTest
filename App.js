import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*----Navigation stuff----*/

//FUNCTION: HomeScreen
//PURPOSE:  Defines attributes of the HomeScreen page
//PARAMS:   {navigation} by default provided to all items in Stack Navigator
function HomeScreen({navigation}) {
  //state variable
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{count}</Text>
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
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is technically an 'app'</Text>
    </View>
  );
}

const Stack = createStackNavigator();

//PURPOSE:  Renders app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//PURPOSE:  Defines app style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function WelcomeMsg(props)  {
  if (props.pain == "true"){
    return <h2>TRUE</h2>;
  }
  return <h2>NOT TRUE, {props.name}</h2>;
}