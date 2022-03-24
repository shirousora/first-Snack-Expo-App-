import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from './config';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      nombre: ""
    }
  }

  sendData= (name) => {
    console.log(name);
    var time = new Date().getTime();
    var refMisses = db.ref("Misses/"+ name +time)
    refMisses.set({
      nombre: name,
      tiempo: firebase.database.ServerValue.TIMESTAMP
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <TextInput
                style={styles.textinput}
                placeholder={"Escribe tu nombre"}
                placeholderTextColor={"#5DADE2"} 
                onChangeText={(texto)=>{
                  this.setState({nombre: texto});
                }}
                value={this.state.nombre}    
          />

          <TouchableOpacity 
            style = {[styles.button, {marginTop:25}]}
            onPress = {()=> {
              var nombreState = this.state.nombre
              console.log("boton presionado por: "+nombreState)
              this.sendData(nombreState)

            }}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E44AD",
    alignItems: "center"
  },
  textinput: {
    width: "57%",
    height: 50,
    marginTop: 100,
    padding: 10,
    borderColor: "#FF00FF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#FADBD8",
    color: "#E74C3C"
  },
  button: {
    width: "43%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27AE60",
    borderRadius: 20,
    margin: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
  }
});