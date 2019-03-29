import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';


export default class App extends Component {
  state : {
    password: string, 
    isPasswordVisible: boolean,
    toggleText: string,
  }

  constructor(props: Props) {  
    super(props);  
    this.state = {  
        password: '',  
        isPasswordVisible: true,  
        toggleText: 'Show',  
    };  
}  

  handleToggle = () => {
    const {isPasswordVisible} = {this.state};
    if (isPasswordVisible){
      this.setState({isPasswordVisible:false});
      this.setState({toggleText:'Hide'});
    }else{
      this.setState({isPasswordVisible: true});
      this.setState({toggleText: 'Show'});
    }
  };


  render() { 
    return (
      <View style={styles.container}>
        <TextInput
          secureTextEntry = {this.state.isPasswordVisible}
          style = {styles.textInput}
        />
        <TouchableOpacity onPress = {this.handleToggle}>
          <text style = {{fontSize: 20}}> {this.state.toggleText} </text> 
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }, 
  textInput: {
    width: 400, 
    heigh: 50, 
    backgroundColor: '#a7a6a9',
    color: 'white',
    fontSize: 20,
  },
});
