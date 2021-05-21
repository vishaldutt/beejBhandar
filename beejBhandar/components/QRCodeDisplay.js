import React, { Component } from "react";
import logo from "./logo-tm.png";
import { StyleSheet, View, Text} from "react-native";
import QRCode from 'react-native-qrcode-svg';



class QRCodeDisplay extends React.Component{
  constructor(props) {
    super(props);
  }
  
  state={
    numberFromRegistration: '',
  }



  render() {
    return (
      <View >
        <View style={styles.container}>
          <QRCode
            value={this.props.route.params.contactNo}
            size={250}
            backgroundColor="white"
          />
        </View>
        <Text style={styles.btnText}>
              Please save this QR Code as this will be required for logging in to the app
            </Text>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 0,
    marginTop:"60%",
    backgroundColor:"yellow"
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight:'bold',
    marginTop:"60%",
  }
  });



export default QRCodeDisplay;
