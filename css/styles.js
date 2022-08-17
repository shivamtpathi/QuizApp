import {

  StyleSheet,
 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'lightgreen',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    startImage: {
      width: 400,
      height: 400,
    },
    button: {
      width: 100,
      borderRadius: 30,
      alignItems: 'center',
      backgroundColor: 'orange',
      padding: 10,
      marginBottom:30,
    },
    buttonText: {
      fontSize: 20,
      color:"black",
    },
    text:{
      fontSize:40,
      marginTop:20,
      color:"red",
    }
})


export default styles