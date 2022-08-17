import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import React, {useState} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import resultstyles from '../css/resultstyle';

const Result = ({route, navigation}) => {
  const {Result} = route.params;
  const [rating, setrating] = useState(Result);
  return (
    <View style={resultstyles.container}>
      <Text style={resultstyles.text}>Result</Text>
      <View>
      <Text style={resultstyles.numText}>{Result}/10</Text>
        <AirbnbRating
          count={5}
          reviews={['ok', 'Good', 'Very Good', 'Amazing', 'Excellent']}
          defaultRating={Math.floor((rating + 1) / 2)}
          size={60}
          isDisabled={true}
          reviewColor={'red'}
          reviewSize={25}
        />
      </View>
      <TouchableOpacity
       style={resultstyles.buttonText}

        onPress={() => navigation.navigate('StartScreen')}>
        <Text 
        
        
        >Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;
