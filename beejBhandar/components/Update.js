import React, { Component } from "react";
import logo from "./logo-tm.png";
import { StyleSheet, View, Text, TextInput, ScrollView, Image, Button,ActivityIndicator, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';
import * as ImagePicker from "react-native-image-picker";
import DatePicker from 'react-native-datepicker'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwesomeAlert from 'react-native-awesome-alerts';

class Update extends React.Component{
  constructor(props) {
    super(props);

  }

  state={
    branch:'',
    fieldOfficer:'',
    reference:'',
    name:'',
    father_husbandName:'',
    surname:'',
    phoneNo:'',
    whatsapp:'',
    email:'',
    address:'',
    village:'',
    tehsil:'',
    district:'',
    state:'',
    pincode:'',
    aadhar:'',
    dob:"01-JAN-2001",
    anniversary:"01-JAN-2001",
    qualification:'',
    experience:'',
    landArea:'',
    KhasaraNo:'',
    dropDownIndex:[],
    typeOfSoil:{
      'Black': false,
      'XXX': false,
      'Red': false,
      'Slip': false,
      'Retili': false,
    },
    waterSource:{
      'River' : false,
      'Well' : false,
      'Boring' : false,
      'Canal' : false,
      'Rain' : false,
    },
    irrigtionSource:{
      'Drip' : false,
      'Single' : false,
      'Kyari' : false,
      'Others' : false,
    },
    advAgriDevices:{
      'Tractor' : false,
      'Thresher' : false,
      'Cultivator' : false,
      'Rotavator' : false,
      'Siddle' : false,
      'Others' : false,
    },
    advDevices:{
      'Self' : false,
      'Rented' : false,
    },
    traditionalAgriDevices:{
      'Hal' : false,
      'Tiffan' : false,
      'Kolpa' : false,
      'Bakkhar' : false,
      'Patha' : false,
      'Others' : false,
    },
    cow:'',
    buffalo:'',
    goat:'',
    ox:'',
    compostType:{
      'Cow Dung' : false,
      'Wormi' : false,
      'Green' : false,
      'Others' : false,
    },
    compostTrolly:'',
    compostBullock:'',
    compostOthers:'',
    cashCropMandi:'',
    vegetableMandi:'',
    nikas:{
      'Jal Nikas' : false,
      'Bhoomigat' : false,
      'Prashthiya' : false,
    },
    selfLand:'',
    profitLand:'',
    leaseLand:'',
    sharingLand:'',
    totalLand:'',
    transportTrolly:'',
    transportBullock:'',
    transportOthers:'',
    maleMembers:'',
    femaleMembers:'',
    totalMembers:'',
    maleLabour:'',
    femaleLabour:'',
    totalLabour:'',
    barrenLand:'',
    otherWork:'',
    avatar:'',
    resourcePath: {},
    imageUri:'./profileLogo.jpeg',
    imageName:'',
    blackSoilCheckBox:false,
    XXXSoilCheckBox:false,
    RedSoilCheckBox:false,
    slipisChecked : false,
    retiliisChecked : false,
    riverisChecked : false,
    wellisChecked : false,
    boringisChecked : false,
    canalisChecked : false,
    rainisChecked : false,
    dripisChecked : false,
    singleisChecked : false,
    kyariisChecked : false,
    otherIrrigationisChecked : false,
    tractorisChecked : false,
    thresherisChecked : false,
    cultivatorisChecked : false,
    rotavatorisChecked : false,
    siddleisChecked : false,
    otherAADisChecked : false,
    selfisChecked : false,
    rentedisChecked : false,
    halisChecked : false,
    tiffanisChecked : false,
    kolpaisChecked : false,
    bakkharisChecked : false,
    pathaisChecked : false,
    otherTADisChecked : false,
    cowDungisChecked : false,
    wormiisChecked : false,
    greenisChecked : false,
    otherCompostisChecked : false,
    jalnikasisChecked : false,
    bhoomigatisChecked : false,
    prasthiyaisChecked : false,
    fileObj:{},
    samagraId:'',
    branchBorderColor:'black',
    foBorderColor:'black',
    nameBorderColor:'black',
    villageBorderColor:'black',
    addressBorderColor:'black',
    tehsilBorderColor:'black',
    districtBorderColor:'black',
    stateBorderColor:'black',
    phoneNoBorderColor:'black',
    uniqueRecordCheck:false,
    showAlert:false,
    alertMessage:"",
    mobileNoToSearch:"",
    updateFlag:false,

  };
  
  getRecord(){
    if(this.state.mobileNoToSearch.length<10){
      this.setState({
        showAlert:true,
      }),
      this.setState({
        alertMessage:"Please enter a valid 10 digit mobile number to search",
      })    
      return;
    }
    this.setState({uniqueRecordCheck:false});
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  var dummyData;
  fetch("https://backend.beejbhandar.in/get-all-data-for-mobile.php?mobile="+this.state.mobileNoToSearch, requestOptions)
  .then(response => response.text())
  .then(result => JSON.parse(result))
  // .then(dataRcvd => alert("------"+dataRcvd.branch))
  .then(data => (
      this.setState({
        branch:data.branch,
        fieldOfficer:data.fieldOfficer,
        reference:data.reference,
        name:data.name,
        father_husbandName:data.father_husbandName,
        surname:data.surname,
        phoneNo:data.phoneNo,
        whatsapp:data.whatsapp,
        email:data.email,
        address:data.address,
        village:data.village,
        tehsil:data.branch,
        district:data.district,
        state:data.state,
        pincode:data.pincode,
        aadhar:data.aadhar,
        dob:data.dob,
        anniversary:data.anniversary,
        qualification:data.qualification,
        experience:data.experience,
        landArea:data.landArea,
        KhasaraNo:data.KhasaraNo,
        updateFlag:true,
      }),
      dummyData=Object.keys(data).length,
      this.checkResponse(dummyData))
      )
  .catch(error => console.log('error', error));
  }
 

 checkResponse(data){
  if(data===2){
    this.setState({
      showAlert:true,
      alertMessage:"No record found for this number",
      updateFlag:false,
    })
  }
 }

 async validations(){

  const regex = /^[0]?[6789]\d{9}$/;
  const flag = true;

  if(this.state.village.trim().length==0){
    this.setState({
      villageBorderColor:'red'
    })  
  }else{
    this.setState({
      villageBorderColor:'black'
    })
  }


  if(this.state.tehsil.trim().length==0){
    this.setState({
      tehsilBorderColor:'red'
    })  
  }else{
    this.setState({
      tehsilBorderColor:'black'
    })
  }

  if(this.state.address.trim().length==0){
    this.setState({
      addressBorderColor:'red'
    })  
  }else{
    this.setState({
      addressBorderColor:'black'
    })
  }

  if(this.state.district.trim().length==0){
    this.setState({
      districtBorderColor:'red'
    })  
  }else{
    this.setState({
      districtBorderColor:'black'
    })
  }

  if(this.state.state.trim().length==0){
    this.setState({
      stateBorderColor:'red'
    })  
  }else{
    this.setState({
      stateBorderColor:'black'
    })
  }

  //ALL CONDITION CHECK HERE
  if( (this.state.village.trim().length==0)||
      (this.state.tehsil.trim().length==0)||
      (this.state.district.trim().length==0)||
      (this.state.state.trim().length==0)){
        this.setState({
          showAlert:true,
        }),
        this.setState({
          alertMessage:"Please complete and check the fields highlighted in red",
        })
  }
  else{
      alert(JSON.stringify(this.state));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
        };
        fetch('https://backend.beejbhandar.in/update-api.php', requestOptions)
        .then(response => response.json())
        .then(this.props.navigation.navigate('Home')).
        catch(error =>{
          console.log(error);
        });
  
  }
}

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <Image source={logo} style={{height:"", width:"", marginLeft:wp("5%"), marginTop:hp("1%"), marginBottom:hp("0%"), zIndex:20}}/> */}
        <View style={styles.searchSection}>
          <View style={styles.firstSectionRows}>
              <TextInput
                placeholder="Enter mobile number to search"
                inlineImagePadding={2}
                style={styles.searchSectionColumn_2}
                onChangeText={ text =>{
                  this.setState({mobileNoToSearch:text});
                }}
                
              ></TextInput>
              <TouchableOpacity
                  style={styles.searchBtnSection}
                  onPress={() => this.getRecord()}>
                  <Text style={styles.btnText}>
                    Search
                  </Text>
              </TouchableOpacity> 
          </View> 
        </View>

        <View style={styles.firstSection}>
          <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Branch</Text>
              <TextInput
                placeholder={this.state.branch}
                inlineImagePadding={2}
                style={[styles.firstSectionColumn_2, {borderColor:this.state.borderColor}]}
                
                value={this.state.branch}
                onChangeText={ text =>{
                  this.setState({branch:text});
                }}
                editable={false}
              ></TextInput>
          </View>
            <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Field Officer</Text>
              <TextInput
                placeholder={this.state.fieldOfficer}
                inlineImagePadding={2}
                style={[styles.firstSectionColumn_2,{borderColor:this.state.foBorderColor}]}
                value={this.state.fieldOfficer}
                onChangeText={ text =>{
                  this.setState({fieldOfficer:text});
                }}
                editable={false}
              ></TextInput>
            </View>
            <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Reference</Text>
              <TextInput
                placeholder={this.state.reference}
                inlineImagePadding={2}
                style={styles.firstSectionColumn_2}
                onChangeText={ text =>{
                  this.setState({reference:text});
                  placeholder=""
                }}
                value={this.state.reference}
                editable={true}
              ></TextInput>
            </View> 
            <View style={styles.firstSectionRows}>
            <Text style={styles.firstSectionColumn_1}>Samagra ID</Text>
              <TextInput
                placeholder={this.state.samagraId}
                inlineImagePadding={2}
                style={styles.firstSectionColumn_2}
                onChangeText={ text =>{
                  this.setState({samagraId:text});
                }}
                value={this.state.samagraId}
                editable={true}
              ></TextInput>
              </View>
        </View>
      
{/*********************** * SECTION 2 STARTS HERE **************************/}
        <View style={styles.secondSection}>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Name</Text>
            <TextInput
              placeholder={this.state.name}
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.nameBorderColor}]}
              onChangeText={ text =>{
                this.setState({name:text});
              }}
              editable={false}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Father/Husband</Text>
            <TextInput
              placeholder={this.state.father_husbandName}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({father_husbandName:text});
              }}
              value={this.state.father_husbandName}
              editable={true}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Surname</Text>
            <TextInput
              placeholder={this.state.surname}
              value={this.state.surname}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({surname:text});
              }}
              editable={true}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Phone  No.</Text>
            <TextInput
              placeholder={this.state.phoneNo}
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.phoneNoBorderColor}]}
              onChangeText={ text =>{
                this.setState({phoneNo:text});
                
              }}
              keyboardType='number-pad'
              editable={false}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Whats-App</Text>
            <TextInput
              placeholder={this.state.whatsapp}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({whatsapp:text});
              }}
              keyboardType='number-pad'
              value={this.state.whatsapp}
              editable={true}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Email</Text>
            <TextInput
              placeholder={this.state.email}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({email:text});
              }}
              value={this.state.email}
              editable={true}
            ></TextInput>
          </View>
          <View style={styles.secondSectionSingleRows}>
              <Text style={styles.secondSectionTwinColumn_1}>Adress</Text>
              <TextInput
                placeholder={this.state.address}
                inlineImagePadding={2}
                style={[styles.secondSectionSingleColumn_2,{borderColor:this.state.addressBorderColor}]}
                onChangeText={ text =>{
                  this.setState({address:text});
                  placeholder=""
                }}
                value={this.state.address}
              editable={true}
              ></TextInput>
          </View> 
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Village</Text>
            <TextInput
              placeholder={this.state.village}
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.villageBorderColor}]}
              onChangeText={ text =>{
                this.setState({village:text});
              }}
              value={this.state.village}
              editable={true}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Tehsil</Text>
            <TextInput
              placeholder={this.state.tehsil}
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.tehsilBorderColor}]}
              onChangeText={ text =>{
                this.setState({tehsil:text});
              }}
              value={this.state.tehsil}
              editable={true}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>District</Text>
            <TextInput
              placeholder={this.state.district}
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.districtBorderColor}]}
              onChangeText={ text =>{
                this.setState({district:text});
              }}
              value={this.state.district}
              editable={true}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>State</Text>
            <TextInput
              placeholder={this.state.state}
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_1_state,{borderColor:this.state.stateBorderColor}]}
              onChangeText={ text =>{
                this.setState({state:text});
              }}
              value={this.state.state}
              editable={true}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Pincode</Text>
            <TextInput
              placeholder={this.state.pincode}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({pincode:text});
              }}
              value={this.state.pincode}
              editable={true}
              keyboardType='number-pad'
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Aadhar No.</Text>
            <TextInput
              placeholder={this.state.aadhar}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({aadhar:text});
              }}
              keyboardType='number-pad'
              value={this.state.aadhar}
              editable={true}
            ></TextInput>
          </View>
         
          <View style={styles.secondSectionSingleRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Date Of Birth</Text>
              <DatePicker
                style={{width: "83%"}}
                date={this.state.dob}
                mode="date"
                placeholder="select date"
                format="DD-MMM-YYYY"
                minDate="01-JAN-1900"
                maxDate="31-DEC-2070"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                hideText={false}
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 34
                       
                  }
                }}
                onDateChange={(date) => {this.setState({dob: date})}}  
              />
          </View>
          <View style={styles.secondSectionRows}>
             <Text style={styles.secondSectionTwinColumn_1}>Anniv.</Text>
             <DatePicker
                style={{width: "83%"}}
                date={this.state.anniversary}
                mode="date"
                placeholder="select date"
                format="DD-MMM-YYYY"
                minDate="01-JAN-1900"
                maxDate="31-DEC-2070"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({anniversary: date})}}
              />
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Qualification</Text>
            <TextInput
              placeholder={this.state.qualification}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({qualification:text});
              }}
              value={this.state.qualification}
              editable={true}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Exp.</Text>
            <TextInput
              placeholder={this.state.experience}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({experience:text});
              }}
              value={this.state.experience}
              editable={true}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Land (Acres)</Text>
            <TextInput
              placeholder={this.state.landArea}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({landArea:text});
              }}
              value={this.state.landArea}
              editable={true}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Khasara</Text>
            <TextInput
              placeholder={this.state.KhasaraNo}
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({KhasaraNo:text});
              }}
              value={this.state.KhasaraNo}
              editable={true}
            ></TextInput>
          </View>
          <View style={styles.secondSectionSingleRows}>
              
          </View> 
          <View style={{height:"1%"} } />
        </View>



{/*********************** * SECTION 3 STARTS HERE **************************/}



    <View style={{marginTop:"2%", alignItems:"center",marginBottom:"2%",}}> 
            <TouchableOpacity
              style={styles.btnSection}
              onPress={() => this.validations()}>
              <Text style={styles.btnText}>
                Save and Next
              </Text>
            </TouchableOpacity> 
          </View>
        
          <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title="Attention"
          titleStyle={{fontWeight:"bold"}}
          message={this.state.alertMessage}          
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
    );
  }
}
  
const styles = StyleSheet.create({
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
    firstSection:{
      flex: 1,
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      marginTop:"0%",
      //height:"18%",
      borderStyle: "solid",
      borderColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
      paddingTop:"2%",
      paddingBottom:"5%",
    },
    searchSection:{
      flex: 1,
     // flexDirection:"row",
      backgroundColor:"beige",
      width:"90%",
      marginLeft:"5%",
      marginTop:"5%",
      height:70,
      borderStyle: "solid",
      borderColor:"#10ac84",
      borderWidth:2,
      borderRadius:5,
      paddingTop:"2%",
      paddingBottom:"2%",
      marginBottom:"5%",
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
    searchSectionColumn_2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 40,
      width: "67%",
      borderWidth: 1,
      //borderColor: "red",
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "2%"
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
      width: "100%",
      height: "20%",
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom:"10%"
    },
    searchBtnSection: {
      width: "30%",
      height: 40,
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom:"10%",
      marginLeft:"5%",
    },
    btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      marginBottom:"1%",
    }
  });



export default Update;
