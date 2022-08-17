import {
    View,
    Text,
    Image,
    TouchableOpacity,
    
  } from 'react-native';
import React from 'react'
import styles from '../css/styles'
// import { useNavigation } from '@react-navigation/native';
const StartScreen = ({navigation}) => {

  // const navigation = useNavigation()
  return (
    <View  style={styles.container}>

     <Text style={styles.text}>QuizApp</Text>
      
      
      <Image style={styles.startImage} source={require('../image/tree.png')} />
    
    <TouchableOpacity style={styles.button}
    onPress={() =>
      navigation.navigate('QuizScreen')
    }

     >
      
      <Text style={styles.buttonText}>Start</Text>
    </TouchableOpacity>
    </View>
  )
}

export default StartScreen