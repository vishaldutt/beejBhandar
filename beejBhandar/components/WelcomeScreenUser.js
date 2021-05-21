import React, { Component } from "react";
import logo from "./logo-tm.png";
import { StyleSheet, View, Text, TextInput, ScrollView, Image, Button,ActivityIndicator, TouchableOpacity, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import background from "./back.jpeg";
import Icon from 'react-native-vector-icons/Ionicons';

class WelcomeScreenUser extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ImageBackground source={background}
        style = { styles.MainContainer }>
        <Image source={logo} style={{resizeMode:"cover", marginLeft:wp("10%"),marginRight:wp("10%"), marginTop:hp("35%"), marginBottom:hp("0%"), zIndex:20}}/>

        <View style={{marginTop:"1%", alignItems:"center"}}>
          <TouchableOpacity
            style={styles.btnSection}
             onPress={() => this.props.navigation.navigate('Registration',{
              userName:this.props.route.params.userName
             })}>
            {/* onPress={() => this.props.navigation.navigate('Test')}> */}
            <Text style={styles.btnText}>
              Farmer Registration
            </Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={styles.btnSection}
            onPress={() => this.props.navigation.navigate('Verify')}>
            <Text style={styles.btnText}>
              Farmer Login
            </Text>
          </TouchableOpacity> 
         
                 </View>
      </ImageBackground>
    );
  }
}
  
const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      padding:"2%",
      backgroundColor:"#32ff7e",
      height:hp("100%"),
      alignItems:"center",
    },
    btnSection: {
      width: wp("70%"),
      height: hp("8%"),
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom:"5%",
      borderRadius: 15,
      borderColor:"#16a085",
      borderWidth:1,
      elevation:4,
    },
    btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    }
  });



export default WelcomeScreenUser;
