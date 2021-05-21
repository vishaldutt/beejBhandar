import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import logo from "./logo-tm.png";;
import Offline from './Offline';
import DropDownPicker from 'react-native-dropdown-picker';
import AwesomeAlert from 'react-native-awesome-alerts';
import background from "./back.jpeg";
import Icon from 'react-native-vector-icons/Ionicons';



class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      connection_Status: '',
    };
  }

  state = {
    id: '',
    //variable to store userid/username
    password: '',
    //variable to store password
    flag: false,
    //state decides navigation to next screen
    userType:'',
    showAlert:false,
  };

  //function to get userid entered in textInput
  handleEmail = text => {
    this.setState({id: text});
  };

  //function to get password entered in textInput
  handlePassword = text => {
    this.setState({password: text});
  };

  //function to check valid login using fetch API call
  login = (id, pass) => {
    if(pass!='' && id!=''){
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://backend.beejbhandar.in/get-user.php?username="+id+"&password="+pass, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log("==="+result.trim());
          if(result.trim()==="1"){
            this.props.navigation.navigate('Home', {
              userName: id,
            });
          }
          else if(result.trim()==="2"){
            this.props.navigation.navigate('WelcomeScreenUser', {
              userName: id,
            });
          }
          else{
            this.setState({
              showAlert:true
            });
          };
        })
        .catch(error => console.log('error', error));
    }
    else{
      this.setState({
        showAlert:true
      });
    }
    };

  render() {
    return (
      <ImageBackground source={background}
        style={styles.backgroundContainer}>
        <Offline />
        
        <View style={styles.backgroundContainer1}>
          <Image source={logo} style={styles.logoDigit} />
            
          <View style={styles.inputView}>
         
            <TextInput
              style={styles.inputText}
              placeholder="Enter username here"
              placeholderTextColor="#003f5c"
              onChangeText={this.handleEmail}
            />
          </View>
          <View style={styles.inputView}>
            
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Enter Password here"
              placeholderTextColor="#003f5c"
              onChangeText={this.handlePassword}
            />
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.login(this.state.id, this.state.password)}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Attention"
          titleStyle={{fontWeight:"bold"}}
          message="Please check the login details entered"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            this.setState({
              showAlert:false
            });
          }}
        />
        </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#32ff7e',
  },

  backgroundContainer1: {
    flex: 1,
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoDigit: {
    width: '50%',
    height: 50,
    resizeMode: 'stretch',
    marginBottom: '10%',
  },

  inputView: {
    width: '70%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    height: '7%',
    marginBottom: '5%',
    justifyContent: 'center',
    paddingLeft: '5%',
    padding: '6%',
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '30%',
    backgroundColor: '#2ecc71',
    borderRadius: 15,
    borderColor:"#16a085",
    borderWidth:1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,
  },
  loginText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  inputIcon: {
    position: 'absolute',
    backgroundColor: 'black',
    width: '18%',
    paddingLeft: 6,
    paddingTop: 8,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    fontSize: 30,
    color: '#fff',
    height:49,
  },
});

export default Login;
