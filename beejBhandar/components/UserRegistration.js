import React, { Component } from "react";
import logo from "./logo-tm.png";
import { StyleSheet, View, Text, TextInput, ScrollView, Image,ImageBackground, Button,ActivityIndicator, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';
import * as ImagePicker from "react-native-image-picker";
import DatePicker from 'react-native-datepicker'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';
import background from "./back.jpeg";

class UserRegistration extends React.Component{
  constructor(props) {
    super(props);

  }

  state={
    username:'',
    password:'',
    mobile:'',
    usertype:0,
    showAlert:false,
    messageAlert:'',
    titleAlert:'',

  };

  uploadData() {
   // Simple POST request with a JSON body using fetch
   if(this.state.username===''||this.state.password===''||this.state.mobile===''||this.state.usertype===0){
      this.setState({
        showAlert:true
      });
      this.setState({
        titleAlert:"ATTENTION",
        messageAlert:"Please fill in all the details to proceed"         
      });
   }else{
    var requestOptionsCheck = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://backend.beejbhandar.in/check-user.php?username="+this.state.username, requestOptionsCheck)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        if(result.trim()==="-1"){
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
           var requestOptions = {
             method: 'POST',
             headers: myHeaders,
             body: JSON.stringify(this.state),
             redirect: 'follow'
           };
           console.log(JSON.stringify(this.state));

           fetch("https://backend.beejbhandar.in/reg-user.php", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
        if(result.trim()==="success.."){
          this.setState({
            showAlert:true          
          });
          this.setState({
            messageAlert:"User Registered Successfully",
            titleAlert:"SUCCESS"          
          });
          
            this.props.navigation.navigate('Home');
        }
        else{
          this.setState({
            showAlert:true
          });
          this.setState({
            messageAlert:"Failed to Register User",
            titleAlert:"ERROR"      
          });
        
        }
      })
        .catch(error => console.log('error', error));

        }else{
          this.setState({
            showAlert:true
          });
          this.setState({
            messageAlert:"User is already registered.",
            titleAlert:"ATTENTION"      
          });
        }
      })
      .catch(error => console.log('error', error));
  
     
    
      
   }
   
}


  render() {
    return (
      <View style={styles.container}>
      <ScrollView >
        <View style={styles.firstSectionImage}>
        <Image source={logo} style={{resizeMode:"cover", marginLeft:wp("10%"), marginTop:hp("1%"), marginBottom:hp("0%"), zIndex:20, opacity:1}}/>
        </View>
        
        <View style={styles.firstSection}>
        <View style={styles.firstSectionRows}>
            <Text style={styles.firstSectionColumn_1}>User Type</Text>
            <DropDownPicker
                items={[{"label":"Admin","value":"Admin"},
                        {"label":"User","value":"User"}]}
                
                 containerStyle={{height: "7%", width:"70%", marginLeft:"0%", marginBottom:"5%", padding:"0%"}}
                 style={{backgroundColor: '#fafafa', marginLeft:"7%", width:"100%",height: "100%", marginBottom:"0%", marginTop:"0%", borderWidth:1, borderColor:"black"}}
                 itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select User Type"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => 
                  {
                    if(item.value==="Admin"){
                      this.setState({usertype:1})
                    }else{
                      this.setState({usertype:2})
                    }
                    
                }}
            />
              </View>
          <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>User Name</Text>
              <TextInput
                placeholder="   name"
                inlineImagePadding={2}
                style={[styles.firstSectionColumn_2,{borderColor:this.state.foBorderColor}]}
                value={this.state.username.toString()}
                onChangeText={ text =>{
                  this.setState({username:text});
                }}
              ></TextInput>
              
          </View>
            <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Password</Text>
              <TextInput
                placeholder="   email"
                inlineImagePadding={2}
                style={[styles.firstSectionColumn_2,{borderColor:this.state.foBorderColor}]}
                value={this.state.password}
                onChangeText={ text =>{
                  this.setState({password:text});
                }}
              ></TextInput>
            </View>
            <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Mobile No.</Text>
              <TextInput
                placeholder="   mobile number"
                inlineImagePadding={2}
                style={styles.firstSectionColumn_2}
                value={this.state.mobile}
                onChangeText={ text =>{
                  this.setState({mobile:text});
                }}
              ></TextInput>
            </View> 
            
              
        </View>
        <TouchableOpacity
            style={styles.btnSection}
             onPress={() => 
              this.uploadData()
             }>
            {/* onPress={() => this.props.navigation.navigate('Test')}> */}
            <Text style={styles.btnText}>
              Register User
            </Text>
          </TouchableOpacity>
          <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title={this.state.titleAlert}
          titleStyle={{fontWeight:"bold"}}
          message={this.state.messageAlert}
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
        </ScrollView>
        <ImageBackground source={background}
        style={styles.backgroundContainer}></ImageBackground>
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '140%',
    alignItems: 'center',
    backgroundColor: '#32ff7e',
    position: "absolute",
    paddingTop:"-10%",
    zIndex:-1,
  },
    MainContainer: {
      flex: 1,
      padding:"2%",
      backgroundColor:"#32ff7e",
      height:hp("100%"),
      width:wp("100%"),
      alignItems:"center",
    },
    effect3:{
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      paddingBottom:"2%",
      marginTop:"2%",
      borderStyle: "solid",
      borderColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
    },
    qualificationRow_1: {
      height: 40,
      flexDirection: "row",
      marginTop: 3,
      marginLeft: 17,
      marginRight: 12
    },
    experience: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: "50%",
      width: "22%",
      marginLeft: "1%",
      marginTop: "1%",
    },
    button: {
      width: 250,
      height: 60,
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginBottom:12,
      marginLeft:"10%",   
    },
    buttonReg: {
      width: 440,
      height: 80,
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      marginBottom:12,
    },
    images: {
      width: 250,
      height: 250,
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 3,
      backgroundColor:'grey',
      marginLeft:"10%",
      marginRight:"10%",
      marginBottom:"1%",
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      color: 'white'
    },
    firstSectionImage:{
      flex: 1,
      width:"100%",
      //marginLeft:"5%",
      marginTop:"10%",
      //height:"18%",
      borderStyle: "solid",
      borderColor:"#b8e994",
      backgroundColor:"#b8e994",
      borderWidth:2,
      borderRadius:5,
      marginBottom:"5%",
      opacity:.7,
     
    },
    firstSection:{
      flex: 1,
      backgroundColor:"#b8e994",
      width:"90%",
      marginLeft:"5%",
      marginTop:"0%",
      //height:"18%",
      borderStyle: "solid",
      borderColor:"#10ac84",
     // borderWidth:2,
      borderRadius:5,
      paddingTop:"2%",
      paddingBottom:"5%",
      opacity:.8,
      elevation:10,
    },
    cropTitleSection:{
      flex: 1,
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      marginTop:"2%",
      marginBottom:"2%",
      height:"18%",
      borderStyle: "solid",
      borderColor:"#10ac84",
      backgroundColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
      paddingTop:"1%",
    },
    lastSection:{
      flex: 1,
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      marginTop:"2%",
      //height:"18%",
      borderStyle: "solid",
      borderColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
      paddingTop:"1%",
    },
    thirdSection:{
      flex: 1,
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      marginTop:"2%",
      borderStyle: "solid",
      borderColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
      paddingTop:"1%",
    },
    secondSection:{
      flex: 1,
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      marginTop:"2%",
      height:"120%",
      borderStyle: "solid",
      borderColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
      paddingTop:"1%",
    },
    cropSection:{
      flex: 1,
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      marginTop:"2%",
      borderStyle: "solid",
      borderColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
      paddingTop:"1%",
    },
    firstSectionRows: {
      height: "23%",
      flexDirection: "row",
      marginTop: "1%",
      marginLeft: "2%",
      marginRight: "2%",
      width:"90%",
    },
    cropSectionRows: {
      height: "8%",
      flexDirection: "row",
      marginTop: "1%",
      marginLeft: "2%",
      marginRight: "2%",
      marginBottom: "5%",
      width:"90%",
    },
    secondSectionSingleRows: {
      height: "10%",
      flexDirection: "row",
      marginTop: "1%",
      marginLeft: "2%",
      marginRight: "2%",
      width:"90%",
    },
    secondSectionSingleColumn_2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: "80%",
      width: "83%",
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "1%",
      marginRight: "2%"
    },
    cropSectionTitle: {
      fontFamily: "roboto-regular",
      color: "white",
      height: "100%",
      width: "100%",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 7,
      borderStyle: "solid",
      marginLeft: "35%",
      marginRight: "2%",
      fontWeight:"bold"
    },
    
    secondSectionRows: {
      height: "8%",
      flexDirection: "row",
      marginTop: "1%",
      marginLeft: "2%",
      marginRight: "2%",
      width:"90%",
    },
    thirdSectionTextRows: {
      height: "15%",
      flexDirection: "row",
      marginTop: "1%",
      marginLeft: "2%",
      marginRight: "2%",
      width:"90%",
      fontWeight:"bold"
    },
    thirdSectionCheckBoxRows: {
      height: "15%",
      flexDirection: "row",
      marginTop: "1%",
      marginLeft: "2%",
      marginRight: "2%",
      width:"90%",
      marginBottom:"1%"
    },
    firstSectionColumn_1: {
      fontFamily: "roboto-regular",
      fontWeight:"bold",
      color: "#121212",
      height: "100%",
      width: "30%",
      marginTop: "2%",
     },
     cropSectionColumns: {
      fontFamily: "roboto-regular",
      fontWeight:"bold",
      color: "#121212",
      height: "100%",
      width: "20%",
      marginTop: "2%",
      marginLeft: "4%"
     },
     cropSectionEntries: {
      fontFamily: "roboto-regular",
      fontWeight:"bold",
      color: "#121212",
      height: "100%",
      width: "20%",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "5%",
      marginTop: "-2%",
      borderColor: "#10ac84",
      borderRadius: 7,
      borderWidth: 1,
     },

     cropSectionEntries_v1: {
      fontFamily: "roboto-regular",
      fontWeight:"bold",
      color: "#121212",
      height: "100%",
      width: "30%",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "5%",
      marginTop: "1%",
      borderColor: "#10ac84",
      borderRadius: 7,
      borderWidth: 1,
     },

     firstSectionColumn_2_branch:{
      fontFamily: "roboto-regular",
      color: "#121212",
      height: "80%",
      width: "70%",
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "5%"
     },
    firstSectionColumn_2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: "80%",
      width: "70%",
      borderWidth: 1,
      //borderColor: "red",
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "5%"
    },
    secondSectionTwinColumn_1_state: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: "100%",
      width: "30%",
      borderWidth: 1,
      //borderColor: "#000000",
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "1%",
      marginRight: "2%"
     },
    secondSectionTwinColumn_1: {
      fontFamily: "roboto-regular",
      fontWeight:"bold",
      color: "#121212",
      height: "100%",
      width: "20%",
      marginTop: "2%",
     },
    secondSectionTwinColumn_2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: "100%",
      width: "30%",
      borderWidth: 1,
      //borderColor: "#000000",
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "1%",
      marginRight: "2%"
    },

    btnSection: {
      width: "90%",
      height: "10%",
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginTop:"2%",
      marginBottom:"30%",
      marginLeft:"5%",
    },
    btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      marginBottom:"1%",
    }
  });



export default UserRegistration;
