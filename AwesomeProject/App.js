import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image style = {styles.image} source={require('./img/pipay-logo.png')} />
        <Text style={styles.title}>Pi Pay 2.0 is Available Now!</Text>
        <Text style={styles.description}>The new Pi Pay app brings exciting new features and performance improvements! Upgrade now to experience the world of infinite possibilities!</Text>
              
      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.buttonText}>Update Now</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {styles.noThanksText}>No, Thanks</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noThanksText:{
    marginTop:15,
    color:'#333',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    color:'#333',
    fontWeight:'700',
    textAlign: 'center',
    margin: 20,
    marginLeft: 70,
    marginRight: 70 

  },
  description: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginLeft: 65,
    marginRight: 65,
    lineHeight:22
  },
  image:{
    width: 90, 
    height: 90
  }, 
  button:{
    marginTop:40,
    width: 270, 
    height: 47,
    backgroundColor: '#ED288A',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText:{
    fontWeight:'800',
    color:'#fff'
  }
});
