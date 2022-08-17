import { StyleSheet } from "react-native";

const quizscreenstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffcccc',
      justifyContent: 'space-between',
    },
    option: {
      backgroundColor: 'lightgreen',
      padding: 9,
      margin: 10,
    },
    options: {
      fontSize: 25,
      color: 'black',
    },
    button: {
      width: 100,
      borderRadius: 30,
      alignItems: 'center',
      backgroundColor: 'orange',
      padding: 10,
      marginBottom: 30,
    },
    buttontext: {
      fontSize: 20,
      color: 'black',
    },
    buttoncontainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    questins: {
      marginHorizontal: 10,
      marginTop: 20,
    },
    text: {
      fontSize: 30,
      color: 'black',
    },
  });
  export default quizscreenstyles