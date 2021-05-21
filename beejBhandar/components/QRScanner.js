import React, { Component } from "react";
import {  StyleSheet, View, ImageBackground, Text}  from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button } from "react-native";
import background from "./back.jpeg";


class QRScanner extends React.Component{
  constructor(props) {
    super(props);
  }

  state={
    qrValue:null,
    result: null,
    navigationData:{}

  };

  onSuccess = e => {
    this.setState({
        result: e,
        qrValue:e.data
     
    })
    
  
    if(e.data!=null){
      this.props.navigation.navigate('LoginSuccess', {
        navigationData: e.data,
      });
      }
      else{
        this.props.navigation.navigate('Home') 
      }
  };



  render() {
    return (
      <ImageBackground source={background}
        style={styles.backgroundContainer}>
          <View >
            <QRCodeScanner 
                onRead={this.onSuccess.bind(this)} 
                showMarker={true}
                style={{width:"50%"}}
                cameraStyle={[{height:"50%", width:"90%", marginLeft:"5%", marginTop:"20%"}]}                
            />
          </View>   
          <View></View>        
      </ImageBackground>

    );
  }
}


const styles = StyleSheet.create({  
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    //alignItems: 'center',
    backgroundColor: '#32ff7e',
  }, 
    container: {
      flex: 1,
      padding:"2%",
      width:"80%"
    },
    button: {
      width: 250,
      height: 60,
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginBottom:12,
      marginLeft:"15%",
      marginTop:"120%",   
    },
  });
  

export default QRScanner;
