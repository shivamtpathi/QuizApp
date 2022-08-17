import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../screen/StartScreen';
import QuizScreen from '../screen/QuizScreen';
import Result from '../screen/Result';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartScreen" 
        options={{
          headerShown: false
      }}
        component={StartScreen} />

        <Stack.Screen name="QuizScreen" 
        options={{
          headerShown: false
      }} component={QuizScreen} />
        <Stack.Screen name="Result" 
        options={{
          headerShown: false
      }} component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
