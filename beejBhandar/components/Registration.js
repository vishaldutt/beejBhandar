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

class Registration extends React.Component{
  constructor(props) {
    super(props);

  }

  state={
    branch:'',
    fieldOfficer:this.props.route.params.userName,
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
    imageUri:'',
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
    branchArray:[],

  };
  
  componentDidMount () {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://backend.beejbhandar.in/get-branch.php", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(result => (
        this.setState({
          branchArray:result
        })))
      .catch(error => console.log('error', error));
    
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  // Launch Camera
  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
        this.setState({imageUri:res.uri});
        this.setState({imageName:res.fileName});
      }
    });
  }

  // Launch Gallery
  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
        this.setState({imageUri:res.uri});
        this.setState({imageName:res.fileName});

        var myHeaders = new Headers();
        myHeaders.append("format", "json");
        myHeaders.append("Content-Type","multipart/form-data");

        let body = new FormData();
        this.setState({
          fileObj:{
            uri:res.uri,
            name:res.fileName,
            type: res.type,
          }
        });
        body.append('user_image', this.state.fileObj);
        body.append('user_phone',this.state.phoneNo);
        
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: body,
          redirect: 'follow'
        };
      console.log("request body: "+ JSON.stringify(requestOptions))
      fetch('https://backend.beejbhandar.in/reg-img.php', requestOptions)
          .then(response => {
            response.json(),
            console.log("API RESPONSE IS:"+response.text),
            alert("Image uploaded successfully")
          });
      }
    });
  }

checkUniqueRecord(){
  this.props.navigation.navigate('RabiDetails', {
    stateData: this.state,
  });
  this.setState({uniqueRecordCheck:false});
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://backend.beejbhandar.in/get-data.php?mobile="+this.state.phoneNo, requestOptions)
  .then(response => response.text())
  .then(result => {
    if(result.trim()==""){
     this.setState({uniqueRecordCheck:true})
    }
    
    if(this.state.uniqueRecordCheck){
      this.props.navigation.navigate('RabiDetails', {
        stateData: this.state,
      });
    }else{
      this.setState({
        showAlert:true,
      }),
      this.setState({
        alertMessage:"Mobile number is already registered.",
      })
    }
   
  }).catch(error => console.log('error', error));
}

  uploadData() {
   // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    console.log(JSON.stringify(this.state));
    (this.props.navigation.navigate('QRCodeDisplay', {
            contactNo: this.state.phoneNo,
          }))
    fetch('https://backend.beejbhandar.in/reg-api.php', requestOptions)
        .then(response => (response.json(),console.log(response.json())))
        .then(this.props.navigation.navigate('QRCodeDisplay', {
          contactNo: this.state.phoneNo,
        })).catch(error =>{
          console.log(error);
        });
}

 async validations(){

  const regex = /^[0]?[6789]\d{9}$/;
  const flag = true;

  if(this.state.branch.trim().length==0){
    this.setState({
      borderColor:'red'
    })  
  }else{
    this.setState({
      borderColor:'black'
    })
  }

  if(this.state.fieldOfficer.trim().length==0){
    this.setState({
      foBorderColor:'red'
    })  
  }else{
    this.setState({
      foBorderColor:'black'
    })
  }

  if(this.state.name.trim().length==0){
    this.setState({
      nameBorderColor:'red'
    })  
  }else{
    this.setState({
      nameBorderColor:'black'
    })
  }

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

  if((this.state.phoneNo.trim().length==0)||(regex.test(this.state.phoneNo)===false)){
    this.setState({
      phoneNoBorderColor:'red'
    })  
  }else{
    this.setState({
      phoneNoBorderColor:'black'
    })
  }
  //ALL CONDITION CHECK HERE
  if((this.state.branch.trim().length==0)||
      (this.state.fieldOfficer.trim().length==0)||
      (this.state.name.trim().length==0)||
      (this.state.village.trim().length==0)||
      (this.state.tehsil.trim().length==0)||
      (this.state.district.trim().length==0)||
      (this.state.state.trim().length==0)||
      (this.state.phoneNo.trim().length==0)||(regex.test(this.state.phoneNo)===false) || (this.state.imageUri=="")){
        this.setState({
          showAlert:true,
        }),
        this.setState({
          alertMessage:"Please complete and check the fields highlighted in red. Please also ensure that you've uploaded the image",
        })
  }else{
    await this.checkUniqueRecord();
  
  }
}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={logo} style={{resizeMode:"cover", marginLeft:wp("5%"), marginTop:hp("1%"), marginBottom:hp("0%"), zIndex:20}}/>
        <View style={styles.firstSection}>
          <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Branch</Text>
              <DropDownPicker
                items={this.state.branchArray}
                defaultValue={this.state.branch}
                containerStyle={{height: "50%", width:"70%", marginLeft:"6%", marginBottom:"0%", padding:"0%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"0%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({branch:item.value})}
            />
              
          </View>
            <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Field Officer</Text>
              <TextInput
                placeholder={this.props.route.params.userName}
                inlineImagePadding={2}
                style={[styles.firstSectionColumn_2,{borderColor:this.state.foBorderColor}]}
                value={this.props.route.params.userName}
                onChangeText={ text =>{
                  this.setState({fieldOfficer:this.props.route.params.userName});
                }}
                editable={false}
              ></TextInput>
            </View>
            <View style={styles.firstSectionRows}>
              <Text style={styles.firstSectionColumn_1}>Reference</Text>
              <TextInput
                placeholder="   reference name"
                inlineImagePadding={2}
                style={styles.firstSectionColumn_2}
                value={this.state.reference}
                onChangeText={ text =>{
                  this.setState({reference:text});
                }}
              ></TextInput>
            </View> 
            <View style={styles.firstSectionRows}>
            <Text style={styles.firstSectionColumn_1}>Samagra ID</Text>
              <TextInput
                placeholder="   "
                inlineImagePadding={2}
                style={styles.firstSectionColumn_2}
                value={this.state.samagraId}
                onChangeText={ text =>{
                  this.setState({samagraId:text});
                }}
              ></TextInput>
              </View>
        </View>




{/*********************** * SECTION 2 STARTS HERE **************************/}
        <View style={styles.secondSection}>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Name</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.nameBorderColor}]}
              onChangeText={ text =>{
                this.setState({name:text});
              }}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Father/Husband</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({father_husbandName:text});
              }}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Surname</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({surname:text});
              }}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Phone  No.</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.phoneNoBorderColor}]}
              onChangeText={ text =>{
                this.setState({phoneNo:text});
                
              }}
              keyboardType='number-pad'
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Whats-App</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({whatsapp:text});
              }}
              keyboardType='number-pad'
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Email</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({email:text});
              }}
            ></TextInput>
          </View>
          <View style={styles.secondSectionSingleRows}>
              <Text style={styles.secondSectionTwinColumn_1}>Adress</Text>
              <TextInput
                placeholder="   "
                inlineImagePadding={2}
                style={[styles.secondSectionSingleColumn_2,{borderColor:this.state.addressBorderColor}]}
                onChangeText={ text =>{
                  this.setState({address:text});
                }}
              ></TextInput>
          </View> 
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Village</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.villageBorderColor}]}
              onChangeText={ text =>{
                this.setState({village:text});
              }}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Tehsil</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.tehsilBorderColor}]}
              onChangeText={ text =>{
                this.setState({tehsil:text});
              }}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>District</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_2,{borderColor:this.state.districtBorderColor}]}
              onChangeText={ text =>{
                this.setState({district:text});
              }}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>State</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={[styles.secondSectionTwinColumn_1_state,{borderColor:this.state.stateBorderColor}]}
              onChangeText={ text =>{
                this.setState({state:text});
              }}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Pincode</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({pincode:text});
              }}
              keyboardType='number-pad'
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Aadhar No.</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({aadhar:text});
              }}
              keyboardType='number-pad'
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
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({qualification:text});
              }}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Exp.</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({experience:text});
              }}
            ></TextInput>
          </View>
          <View style={styles.secondSectionRows}>
            <Text style={styles.secondSectionTwinColumn_1}>Land (Acres)</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({landArea:text});
              }}
            ></TextInput>
             <Text style={styles.secondSectionTwinColumn_1}>Khasara</Text>
            <TextInput
              placeholder="   "
              inlineImagePadding={2}
              style={styles.secondSectionTwinColumn_2}
              onChangeText={ text =>{
                this.setState({KhasaraNo:text});
              }}
            ></TextInput>
          </View>
          <View style={styles.secondSectionSingleRows}>
              
          </View> 
          <View style={{height:"1%"} } />
        </View>



{/*********************** * SECTION 3 STARTS HERE **************************/}
<View style={styles.effect3}>
      <Text style={{flex: 1, flexDirection:"row", width:"85%", margin:"3%", fontWeight:"bold"}}>Other Details</Text>

        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>1. Please select the type of soil</Text>
        <View style={{flex: 1, flexDirection:"row", width:"90%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Black"}
            isChecked={this.state.blackSoilCheckBox}
            onClick={()=>{
              this.setState({
                blackSoilCheckBox:!this.state.blackSoilCheckBox,
                  typeOfSoil:{
                    'Black': !this.state.blackSoilCheckBox,
                    'XXX': this.state.XXXSoilCheckBox,
                    'Red': this.state.RedSoilCheckBox,
                    'Slip': this.state.slipisChecked,
                    'Retili': this.state.retiliisChecked,
                  },
                  
              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"XXX"}
            isChecked={this.state.XXXSoilCheckBox}
            onClick={()=>{
              this.setState({
                XXXSoilCheckBox:!this.state.XXXSoilCheckBox,
                typeOfSoil:{
                'Black': this.state.blackSoilCheckBox,
                'XXX': !this.state.XXXSoilCheckBox,
                'Red': this.state.RedSoilCheckBox,
                'Slip': this.state.slipisChecked,
                'Retili': this.state.retiliisChecked,
              },
              
              })
            }}
        /><CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Red"}
        isChecked={this.state.RedSoilCheckBox}
        onClick={()=>{
          this.setState({
            RedSoilCheckBox:!this.state.RedSoilCheckBox,
            typeOfSoil:{
              'Black': this.state.blackSoilCheckBox,
              'XXX': this.state.XXXSoilCheckBox,
              'Red': !this.state.RedSoilCheckBox,
              'Slip': this.state.slipisChecked,
              'Retili': this.state.retiliisChecked,
            },
          
          })
        }}
    />
    <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Slip"}
        isChecked={this.state.slipisChecked}
        onClick={()=>{
          this.setState({
            slipisChecked : !this.state.slipisChecked,
            typeOfSoil:{
              'Black': this.state.blackSoilCheckBox,
              'XXX': this.state.XXXSoilCheckBox,
              'Red': this.state.RedSoilCheckBox,
              'Slip': !this.state.slipisChecked,
              'Retili': this.state.retiliisChecked,
            },
             
          })
        }}
    />
    <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Retili"}
        isChecked={this.state.retiliisChecked}
        onClick={()=>{
          this.setState({
            retiliisChecked : !this.state.retiliisChecked,
            typeOfSoil:{
              'Black': this.state.blackSoilCheckBox,
              'XXX': this.state.XXXSoilCheckBox,
              'Red': this.state.RedSoilCheckBox,
              'Slip': this.state.slipisChecked,
              'Retili': !this.state.retiliisChecked,
            },
              
          })
        }}
    />
   
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>2. Please select the type of Water Source</Text>
        <View style={{flex: 1, flexDirection:"row", width:"90%", marginLeft:"4%"}}>
        
          
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"River"}
            isChecked={this.state.riverisChecked}
            onClick={()=>{
              this.setState({
                riverisChecked : !this.state.riverisChecked,
                waterSource:{
                  'River' : !this.state.riverisChecked,
                  'Well' : this.state.wellisChecked,
                  'Boring' : this.state.boringisChecked,
                  'Canal' : this.state.canalisChecked,
                  'Rain' : this.state.rainisChecked,
                },
                
              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"Well"}
            isChecked={this.state.wellisChecked}
            onClick={()=>{
              this.setState({
                wellisChecked : !this.state.wellisChecked,
                waterSource:{
                  'River' : this.state.riverisChecked,
                  'Well' : !this.state.wellisChecked,
                  'Boring' : this.state.boringisChecked,
                  'Canal' : this.state.canalisChecked,
                  'Rain' : this.state.rainisChecked,
                },
                
              })
            }}
        /><CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Boring"}
        isChecked={this.state.boringisChecked}
            onClick={()=>{
              this.setState({
                boringisChecked : !this.state.boringisChecked,
                waterSource:{
                  'River' : this.state.riverisChecked,
                  'Well' : this.state.wellisChecked,
                  'Boring' : !this.state.boringisChecked,
                  'Canal' : this.state.canalisChecked,
                  'Rain' : this.state.rainisChecked,
                },
                
              })
            }}
    />
    <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Canal"}
        isChecked={this.state.canalisChecked}
            onClick={()=>{
              this.setState({
                canalisChecked : !this.state.canalisChecked,
                waterSource:{
                  'River' : this.state.riverisChecked,
                  'Well' : this.state.wellisChecked,
                  'Boring' : this.state.boringisChecked,
                  'Canal' : !this.state.canalisChecked,
                  'Rain' : this.state.rainisChecked,
                },
                
              })
            }}
    />
    <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Rain"}
        isChecked={this.state.rainisChecked}
            onClick={()=>{
              this.setState({
                rainisChecked : !this.state.rainisChecked,
                waterSource:{
                  'River' : this.state.riverisChecked,
                  'Well' : this.state.wellisChecked,
                  'Boring' : this.state.boringisChecked,
                  'Canal' : this.state.canalisChecked,
                  'Rain' : !this.state.rainisChecked,
                },
                
              })
            }}
    />
   
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>3. Please select the source of irrigation</Text>
        <View style={{flex: 1, flexDirection:"row", width:"90%", marginLeft:"4%"}}>
        
          
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Drip"}
            isChecked={this.state.dripisChecked}
            onClick={()=>{
              this.setState({
                  dripisChecked : !this.state.dripisChecked,
                  irrigtionSource:{
                    'Drip' : !this.state.dripisChecked,
                    'Single' : this.state.singleisChecked,
                    'Kyari' : this.state.kyariisChecked,
                    'Others' : this.state.otherIrrigationisChecked,
                  },

              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"Single"}
            isChecked={this.state.singleisChecked}
            onClick={()=>{
              this.setState({
                  singleisChecked : !this.state.singleisChecked,
                  irrigtionSource:{
                    'Drip' : this.state.dripisChecked,
                    'Single' : !this.state.singleisChecked,
                    'Kyari' : this.state.kyariisChecked,
                    'Others' : this.state.otherIrrigationisChecked,
                  },

              })
            }}
        />
        <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Kyari"}
        isChecked={this.state.kyariisChecked}
        onClick={()=>{
          this.setState({
             
              kyariisChecked : !this.state.kyariisChecked,
              irrigtionSource:{
                'Drip' : this.state.dripisChecked,
                'Single' : this.state.singleisChecked,
                'Kyari' : !this.state.kyariisChecked,
                'Others' : this.state.otherIrrigationisChecked,
              },

          })
        }}
    />
    <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Others"}
        isChecked={this.state.otherIrrigationisChecked}
        onClick={()=>{
          this.setState({
              
              otherIrrigationisChecked : !this.state.otherIrrigationisChecked,
              irrigtionSource:{
                'Drip' : this.state.dripisChecked,
                'Single' : this.state.singleisChecked,
                'Kyari' : this.state.kyariisChecked,
                'Others' : !this.state.otherIrrigationisChecked,
              },
          })
        }}
    />
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>4. Advance Agricultural devices: Please select</Text>
        <View style={{flex: 1, flexDirection:"row", width:"90%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Tractor"}
            isChecked={this.state.tractorisChecked}
            onClick={()=>{
              this.setState({
                  tractorisChecked : !this.state.tractorisChecked,
                  advAgriDevices:{
                    'Tractor' : !this.state.tractorisChecked,
                    'Thresher' : this.state.thresherisChecked,
                    'Cultivator' : this.state.cultivatorisChecked,
                    'Rotavator' : this.state.rotavatorisChecked,
                    'Siddle' : this.state.siddleisChecked,
                    'Others' : this.state.otherAADisChecked,
                  },
              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"Thresher"}
            isChecked={this.state.thresherisChecked}
            onClick={()=>{
              this.setState({
                    thresherisChecked:!this.state.thresherisChecked,
                    advAgriDevices:{
                    'Tractor' : this.state.tractorisChecked,
                    'Thresher' : !this.state.thresherisChecked,
                    'Cultivator' : this.state.cultivatorisChecked,
                    'Rotavator' : this.state.rotavatorisChecked,
                    'Siddle' : this.state.siddleisChecked,
                    'Others' : this.state.otherAADisChecked,
                  },
              })
            }}
        /><CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Cultivator"}
        isChecked={this.state.cultivatorisChecked}
        onClick={()=>{
          this.setState({
              cultivatorisChecked : !this.state.cultivatorisChecked,
              advAgriDevices:{
                'Tractor' : this.state.tractorisChecked,
                'Thresher' : this.state.thresherisChecked,
                'Cultivator' : !this.state.cultivatorisChecked,
                'Rotavator' : this.state.rotavatorisChecked,
                'Siddle' : this.state.siddleisChecked,
                'Others' : this.state.otherAADisChecked,
              },
          })
        }}
    />
    <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Rotavator"}
        isChecked={this.state.rotavatorisChecked}
        onClick={()=>{
          this.setState({
              rotavatorisChecked : !this.state.rotavatorisChecked,
              advAgriDevices:{
                'Tractor' : this.state.tractorisChecked,
                'Thresher' : this.state.thresherisChecked,
                'Cultivator' : this.state.cultivatorisChecked,
                'Rotavator' : !this.state.rotavatorisChecked,
                'Siddle' : this.state.siddleisChecked,
                'Others' : this.state.otherAADisChecked,
              },
          })
        }}
    />   
    </View>
        <View style={{flex: 1, flexDirection:"row", width:"42.5%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Siddle"}
            isChecked={this.state.siddleisChecked}
            onClick={()=>{
              this.setState({
                  siddleisChecked : !this.state.siddleisChecked,
                  advAgriDevices:{
                    'Tractor' : this.state.tractorisChecked,
                    'Thresher' : this.state.thresherisChecked,
                    'Cultivator' : this.state.cultivatorisChecked,
                    'Rotavator' : this.state.rotavatorisChecked,
                    'Siddle' : !this.state.siddleisChecked,
                    'Others' : this.state.otherAADisChecked,
                  },
              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"Others"}
            isChecked={this.state.otherAADisChecked}
            onClick={()=>{
              this.setState({
                  otherAADisChecked : !this.state.otherAADisChecked,
                  advAgriDevices:{
                    'Tractor' : this.state.tractorisChecked,
                    'Thresher' : this.state.thresherisChecked,
                    'Cultivator' : this.state.cultivatorisChecked,
                    'Rotavator' : this.state.rotavatorisChecked,
                    'Siddle' : this.state.siddleisChecked,
                    'Others' : !this.state.otherAADisChecked,
                  },
              })
            }}
        /> 
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>5. Advance devices: Please select</Text>
        <View style={{flex: 1, flexDirection:"row", width:"42.5%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Self"}
            isChecked={this.state.selfisChecked}
            onClick={()=>{
              this.setState({
                  selfisChecked : !this.state.selfisChecked,
                  advDevices:{
                    'Self' : !this.state.selfisChecked,
                    'Rented' : this.state.rentedisChecked,
                  },

              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"Rented"}
            isChecked={this.state.rentedisChecked}
            onClick={()=>{
              this.setState({
                  rentedisChecked : !this.state.rentedisChecked,
                  advDevices:{
                    'Self' : this.state.selfisChecked,
                    'Rented' : !this.state.rentedisChecked,
                  },

              })
            }}
        /> 
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>6. Traditional Agricultural devices: Please select</Text>
        <View style={{flex: 1, flexDirection:"row", width:"90%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Hal"}
            isChecked={this.state.halisChecked}
            onClick={()=>{
              this.setState({
                  halisChecked : !this.state.halisChecked,
                  traditionalAgriDevices:{
                    'Hal' : !this.state.halisChecked,
                    'Tiffan' : this.state.tiffanisChecked,
                    'Kolpa' : this.state.kolpaisChecked,
                    'Bakkhar' : this.state.bakkharisChecked,
                    'Patha' : this.state.pathaisChecked,
                    'Others' : this.state.otherTADisChecked,
                  },

              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"Tiffan"}
            isChecked={this.state.tiffanisChecked}
            onClick={()=>{
              this.setState({
                  tiffanisChecked : !this.state.tiffanisChecked,
                  traditionalAgriDevices:{
                    'Hal' : this.state.halisChecked,
                    'Tiffan' : !this.state.tiffanisChecked,
                    'Kolpa' : this.state.kolpaisChecked,
                    'Bakkhar' : this.state.bakkharisChecked,
                    'Patha' : this.state.pathaisChecked,
                    'Others' : this.state.otherTADisChecked,
                  },

              })
            }}
        /><CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Kolpa"}
        isChecked={this.state.kolpaisChecked}
            onClick={()=>{
              this.setState({
                  kolpaisChecked : !this.state.kolpaisChecked,
                  traditionalAgriDevices:{
                    'Hal' : this.state.halisChecked,
                    'Tiffan' : this.state.tiffanisChecked,
                    'Kolpa' : !this.state.kolpaisChecked,
                    'Bakkhar' : this.state.bakkharisChecked,
                    'Patha' : this.state.pathaisChecked,
                    'Others' : this.state.otherTADisChecked,
                  },

              })
            }}
    />
    <CheckBox
        style={{flex: 1, padding: 1}}
        leftText={"Bakkhar"}
        isChecked={this.state.bakkharisChecked}
            onClick={()=>{
              this.setState({
                 
                  bakkharisChecked : !this.state.bakkharisChecked,
                  traditionalAgriDevices:{
                    'Hal' : this.state.halisChecked,
                    'Tiffan' : this.state.tiffanisChecked,
                    'Kolpa' : this.state.kolpaisChecked,
                    'Bakkhar' : !this.state.bakkharisChecked,
                    'Patha' : this.state.pathaisChecked,
                    'Others' : this.state.otherTADisChecked,
                  },

              })
            }}
    />   
    </View>
        <View style={{flex: 1, flexDirection:"row", width:"42.5%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Patha"}
            isChecked={this.state.pathaisChecked}
            onClick={()=>{
              this.setState({
                 
                  pathaisChecked : !this.state.pathaisChecked,
                  traditionalAgriDevices:{
                    'Hal' : this.state.halisChecked,
                    'Tiffan' : this.state.tiffanisChecked,
                    'Kolpa' : this.state.kolpaisChecked,
                    'Bakkhar' : this.state.bakkharisChecked,
                    'Patha' : !this.state.pathaisChecked,
                    'Others' : this.state.otherTADisChecked,
                  },

              })
            }}
        />
        <CheckBox
            style={{flex: 1, padding: 1}}
            leftText={"Others"}
            isChecked={this.state.otherTADisChecked}
            onClick={()=>{
              this.setState({
                 
                  otherTADisChecked : !this.state.otherTADisChecked,
                  traditionalAgriDevices:{
                    'Hal' : this.state.halisChecked,
                    'Tiffan' : this.state.tiffanisChecked,
                    'Kolpa' : this.state.kolpaisChecked,
                    'Bakkhar' : this.state.bakkharisChecked,
                    'Patha' : this.state.pathaisChecked,
                    'Others' : !this.state.otherTADisChecked,
                  },

              })
            }}
        /> 
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>7. No. of Animals: Please Type value</Text>
        <View style={styles.qualificationRow_1}>
          <Text style={styles.experience}>Cow</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({cow:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Buffalo</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({buffalo:text});
            }}
            style={{width:"10%",marginLeft:"-6%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Goat</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({goat:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Ox</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({ox:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>8. How is compost prepared: Please select</Text>
        <View style={{flex: 1, flexDirection:"row", width:"90%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Cow dung"}
            isChecked={this.state.cowDungisChecked}
            onClick={()=>{
              this.setState({
                  cowDungisChecked : !this.state.cowDungisChecked,
                  compostType:{
                    'Cow Dung' : !this.state.cowDungisChecked,
                    'Wormi' : this.state.wormiisChecked,
                    'Green' : this.state.greenisChecked,
                    'Others' : this.state.otherCompostisChecked,
                  },

              })
            }}
          />
            <CheckBox
              style={{flex: 1, padding: 1}}
              leftText={"Wormi"}
              isChecked={this.state.wormiisChecked}
              onClick={()=>{
                this.setState({
                   
                    wormiisChecked : !this.state.wormiisChecked,
                    compostType:{
                      'Cow Dung' : this.state.cowDungisChecked,
                      'Wormi' : !this.state.wormiisChecked,
                      'Green' : this.state.greenisChecked,
                      'Others' : this.state.otherCompostisChecked,
                    },
  
                })
              }}
          /><CheckBox
          style={{flex: 1, padding: 1}}
          leftText={"Green"}
          isChecked={this.state.greenisChecked}
            onClick={()=>{
              this.setState({
                 
                  greenisChecked : !this.state.greenisChecked,
                  compostType:{
                    'Cow Dung' : this.state.cowDungisChecked,
                    'Wormi' : this.state.wormiisChecked,
                    'Green' : !this.state.greenisChecked,
                    'Others' : this.state.otherCompostisChecked,
                  },

              })
            }}
      />
      <CheckBox
          style={{flex: 1, padding: 1}}
          leftText={"Others"}
          isChecked={this.state.otherCompostisChecked}
          onClick={()=>{
            this.setState({
                otherCompostisChecked : !this.state.otherCompostisChecked,
                compostType:{
                  'Cow Dung' : this.state.cowDungisChecked,
                  'Wormi' : this.state.wormiisChecked,
                  'Green' : this.state.greenisChecked,
                  'Others' : !this.state.otherCompostisChecked,
                },
            })
          }}
      />  
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>9. Quantity: Please Type value</Text>
        <View style={styles.qualificationRow_1}>
          <Text style={styles.experience}>Trolly</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({compostTrolly:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Bullock Cart</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({compostBullock:text});
            }}
            style={{width:"10%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Others</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({compostOthers:text});
            }}
            style={{width:"10%",marginLeft:"-6%", borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>10. Nearest Mandi</Text>
        <View style={styles.qualificationRow_1}>
          <Text style={{marginLeft:"6%", marginTop:"2%"}}>1. Cash Crop</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({cashCropMandi:text});
            }}
            style={{width:"60%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          </View>
          <View style={styles.qualificationRow_1}>
          <Text style={{marginLeft:"6%", marginTop:"2%"}}>2. Vegetable </Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({vegetableMandi:text});
            }}
            style={{width:"60%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>11. Please tick the below box</Text>
        <View style={{flex: 1, flexDirection:"row", width:"90%", marginLeft:"4%"}}>
          <CheckBox
            style={{flex: 1, paddingTop: 1}}
            leftText={"Jal Nikas"}
            isChecked={this.state.jalnikasisChecked}
            onClick={()=>{
              this.setState({
                  jalnikasisChecked : !this.state.jalnikasisChecked,
                  nikas:{
                    'Jal Nikas' : !this.state.jalnikasisChecked,
                    'Bhoomigat' : this.state.bhoomigatisChecked,
                    'Prashthiya' : this.state.prasthiyaisChecked,
                  },

              })
            }}
          />
            <CheckBox
              style={{flex: 1, padding: 1}}
              leftText={"Bhoomigat"}
              isChecked={this.state.bhoomigatisChecked}
              onClick={()=>{
              this.setState({
                  bhoomigatisChecked : !this.state.bhoomigatisChecked,
                  nikas:{
                    'Jal Nikas' : this.state.jalnikasisChecked,
                    'Bhoomigat' : !this.state.bhoomigatisChecked,
                    'Prashthiya' : this.state.prasthiyaisChecked,
                  },

              })
            }}
          /><CheckBox
          style={{flex: 1, padding: 1, marginTop:"-2%"}}
          leftText={"Prasthiya Nikas"}
          isChecked={this.state.prasthiyaisChecked}
          onClick={()=>{
            this.setState({
              
                prasthiyaisChecked : !this.state.prasthiyaisChecked,
                nikas:{
                  'Jal Nikas' : this.state.jalnikasisChecked,
                  'Bhoomigat' : this.state.bhoomigatisChecked,
                  'Prashthiya' : !this.state.prasthiyaisChecked,
                },

            })
          }}
      />
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>12. Land Responsibility (in acres)</Text>
        <View style={styles.qualificationRow_1}>
          <Text style={styles.experience}>Self</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({selfLand:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Profit</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({profitLand:text});
            }}
            style={{width:"10%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Lease</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({leaseLand:text});
            }}
            style={{width:"10%",marginLeft:"-6%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <View style={styles.qualificationRow_1}>
          <Text style={styles.experience}>Sharing</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({sharingLand:text});
            }}
            style={{width:"10%",marginLeft:"-3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Total Land</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({totalLand:text});
            }}
            style={{width:"10%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>13. Mode of Transport: Please Type value</Text>
        <View style={styles.qualificationRow_1}>
          <Text style={styles.experience}>Trolly</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({transportTrolly:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Bullock Cart</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({transportBullock:text});
            }}
            style={{width:"10%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Others</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({transportOthers:text});
            }}
            style={{width:"10%",marginLeft:"-6%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>14. Members in Family (Helping in Farming)</Text>
        <View style={styles.qualificationRow_1}>
          <Text style={styles.experience}>Male</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({maleMembers:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Female</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({femaleMembers:text});
            }}
            style={{width:"10%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Total</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({totalMembers:text});
            }}
            style={{width:"10%",marginLeft:"-6%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <Text style={{flex: 1, flexDirection:"row", width:"85%", marginLeft:"4%", marginTop:"3%", fontWeight:"bold"}}>15. No. of Labours</Text>
        <View style={styles.qualificationRow_1}>
          <Text style={styles.experience}>Male</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({maleLabour:text});
            }}
            style={{width:"10%",marginLeft:"-10%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Female</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({femaleLabour:text});
            }}
            style={{width:"10%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          <Text style={styles.experience}>Total</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({totalLabour:text});
            }}
            style={{width:"10%",marginLeft:"-6%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
        <View style={styles.qualificationRow_1}>
          <Text style={{marginLeft:"0%", marginTop:"2%", fontWeight:"bold"}}>16. Total area of Barren land</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({barrenLand:text});
            }}
            style={{width:"36%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
          </View>
        <View style={styles.qualificationRow_1}>
          <Text style={{marginLeft:"0%", marginTop:"2%", fontWeight:"bold"}}>17. Other works apart from Agriculture</Text>
          <TextInput
            placeholder="  "
            inlineImagePadding={1}
            onChangeText={ text =>{
              this.setState({otherWork:text});
            }}
            style={{width:"15%",marginLeft:"3%",borderWidth:0, borderRadius:10,backgroundColor: "rgba(210,206,206,1)"}}
          ></TextInput>
    </View>
    

    </View>
    <View style={styles.lastSection}>
      <Image
        source={{ uri: this.state.imageUri }}
        style={styles.images}
      />
      <TouchableOpacity onPress={this.cameraLaunch} style={styles.button}  >
        <Text style={styles.buttonText}>Upload via Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.imageGalleryLaunch} style={styles.button}  >
        <Text style={styles.buttonText}>Upload via Gallery</Text>
      </TouchableOpacity>
    </View>

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
      width: "100%",
      height: "20%",
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom:"10%"
    },
    btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      marginBottom:"1%",
    }
  });



export default Registration;
