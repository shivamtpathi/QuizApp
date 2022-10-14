// main appgit
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Navigation from './navigations/Navigation';


const App = () => {
  return (
    <SafeAreaView style={style.container}>
    
       <Navigation/>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
