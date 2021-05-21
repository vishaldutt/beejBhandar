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


class RabiDetails extends React.Component{
  constructor(props) {
    super(props);

  }

  state={
    rabiCropDetails:[{
      'crop_1':'',
      'acre_1':'',
      'product_1':'',
      'company_1':'',
    },
    {
      'crop_2':'',
      'acre_2':'',
      'product_2':'',
      'company_2':'',
    },
    {
      'crop_3':'',
      'acre_3':'',
      'product_3':'',
      'company_3':'',
    },
    {
      'crop_4':'',
      'acre_4':'',
      'product_4':'',
      'company_4':'',
    },
    {
      'crop_5':'',
      'acre_5':'',
      'product_5':'',
      'company_5':'',
    },
    {
      'crop_6':'',
      'acre_6':'',
      'product_6':'',
      'company_6':'',
    },
    {
      'crop_7':'',
      'acre_7':'',
      'product_7':'',
      'company_7':'',
    }],
    data:{},
    kharifScreenFlag:false,
    alertFlag:false,
    cropArray:[],
  };
  
  componentDidMount () {
    this.setState({data : this.props.route.params.stateData});
    console.log(JSON.stringify(this.state.data))

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://backend.beejbhandar.in/get-crop.php", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .then(result => (
          this.setState({
            cropArray:result
          })))
        .catch(error => console.log('error', error));
      
  }

  saveData() {
    
    this.setState({
      data:{
        ...this.state.data,
        rabiCropDetails:this.state.rabiCropDetails
      }
    }),
    this.setState({
      kharifScreenFlag:true
    })
}

moveToNextScreen() {
//move to next screen with data
if(this.state.kharifScreenFlag){
  this.props.navigation.navigate('KharifDetails', {
    stateData: this.state.data,
  });
}else{
  this.setState({
    alertFlag:true
  })
}
  
}

  render() {
    return (
      <ScrollView style={styles.container}>
        
{/*********************** * CROP SECTION STARTS HERE **************************/}

    <View style={styles.cropTitleSection}>
              <Text style={styles.cropSectionTitle}>Rabi Crop Details</Text>
          </View>
        <View style={styles.firstSection}>
            <DropDownPicker
                items={this.state.cropArray}
                defaultValue={this.state.rabiCropDetails[0].crop_1}
                containerStyle={{height: "5%", width:"70%", marginLeft:"6%", marginBottom:"0%", padding:"0%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"0%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select crop"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                  rabiCropDetails:[{
                    'crop_1': item.value,
                    'acre_1': this.state.rabiCropDetails[0].acre_1,
                    'product_1':this.state.rabiCropDetails[0].product_1,
                    'company_1':this.state.rabiCropDetails[0].company_1,
                  },
                  {
                    'crop_2':this.state.rabiCropDetails[1].crop_2,
                    'acre_2': this.state.rabiCropDetails[1].acre_2,
                    'product_2':this.state.rabiCropDetails[1].product_2,
                    'company_2':this.state.rabiCropDetails[1].company_2,
                  },
                  {
                    'crop_3':this.state.rabiCropDetails[2].crop_3,
                    'acre_3':this.state.rabiCropDetails[2].acre_3,
                    'product_3':this.state.rabiCropDetails[2].product_3,
                    'company_3':this.state.rabiCropDetails[2].company_3,
                  },
                  {
                    'crop_4':this.state.rabiCropDetails[3].crop_4,
                    'acre_4':this.state.rabiCropDetails[3].acre_4,
                    'product_4':this.state.rabiCropDetails[3].product_4,
                    'company_4':this.state.rabiCropDetails[3].company_4,
                  },
                  {
                    'crop_5':this.state.rabiCropDetails[4].crop_5,
                    'acre_5': this.state.rabiCropDetails[4].acre_5,
                    'product_5':this.state.rabiCropDetails[4].product_5,
                    'company_5':this.state.rabiCropDetails[4].company_5,
                  },
                  {
                    'crop_6':this.state.rabiCropDetails[5].crop_6,
                    'acre_6':this.state.rabiCropDetails[5].acre_6,
                    'product_6':this.state.rabiCropDetails[5].product_6,
                    'company_6':this.state.rabiCropDetails[5].company_6,
                  },
                  {
                    'crop_7':this.state.rabiCropDetails[6].crop_7,
                    'acre_7':this.state.rabiCropDetails[6].acre_7,
                    'product_7':this.state.rabiCropDetails[6].product_7,
                    'company_7':this.state.rabiCropDetails[6].company_7,
                  }],
                })}
            />
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': text,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':text,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':text,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>

            </View>
            
            
            <DropDownPicker
                items={this.state.cropArray}
                defaultValue={this.state.rabiCropDetails[1].crop_2}
                containerStyle={{height: "5%", width:"70%", marginLeft:"6%", marginBottom:"2%", padding:"0%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"1%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select crop"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                  rabiCropDetails:[{
                    'crop_1':this.state.rabiCropDetails[0].crop_1,
                    'acre_1': this.state.rabiCropDetails[0].acre_1,
                    'product_1':this.state.rabiCropDetails[0].product_1,
                    'company_1':this.state.rabiCropDetails[0].company_1,
                  },
                  {
                    'crop_2':item.value,
                    'acre_2': this.state.rabiCropDetails[1].acre_2,
                    'product_2':this.state.rabiCropDetails[1].product_2,
                    'company_2':this.state.rabiCropDetails[1].company_2,
                  },
                  {
                    'crop_3':this.state.rabiCropDetails[2].crop_3,
                    'acre_3':this.state.rabiCropDetails[2].acre_3,
                    'product_3':this.state.rabiCropDetails[2].product_3,
                    'company_3':this.state.rabiCropDetails[2].company_3,
                  },
                  {
                    'crop_4':this.state.rabiCropDetails[3].crop_4,
                    'acre_4':this.state.rabiCropDetails[3].acre_4,
                    'product_4':this.state.rabiCropDetails[3].product_4,
                    'company_4':this.state.rabiCropDetails[3].company_4,
                  },
                  {
                    'crop_5':this.state.rabiCropDetails[4].crop_5,
                    'acre_5': this.state.rabiCropDetails[4].acre_5,
                    'product_5':this.state.rabiCropDetails[4].product_5,
                    'company_5':this.state.rabiCropDetails[4].company_5,
                  },
                  {
                    'crop_6':this.state.rabiCropDetails[5].crop_6,
                    'acre_6':this.state.rabiCropDetails[5].acre_6,
                    'product_6':this.state.rabiCropDetails[5].product_6,
                    'company_6':this.state.rabiCropDetails[5].company_6,
                  },
                  {
                    'crop_7':this.state.rabiCropDetails[6].crop_7,
                    'acre_7':this.state.rabiCropDetails[6].acre_7,
                    'product_7':this.state.rabiCropDetails[6].product_7,
                    'company_7':this.state.rabiCropDetails[6].company_7,
                  }],
                })}
            />
            <View style={styles.cropSectionRows}>
            
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2': text,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':text,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':text,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>

            </View>
            
            
            <DropDownPicker
                items={this.state.cropArray}
                defaultValue={this.state.rabiCropDetails[2].crop_3}
                containerStyle={{height: "5%", width:"70%", marginLeft:"6%", marginBottom:"2%", padding:"0%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"1%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select crop"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                  rabiCropDetails:[{
                    'crop_1':this.state.rabiCropDetails[0].crop_1,
                    'acre_1': this.state.rabiCropDetails[0].acre_1,
                    'product_1':this.state.rabiCropDetails[0].product_1,
                    'company_1':this.state.rabiCropDetails[0].company_1,
                  },
                  {
                    'crop_2':this.state.rabiCropDetails[1].crop_2,
                    'acre_2': this.state.rabiCropDetails[1].acre_2,
                    'product_2':this.state.rabiCropDetails[1].product_2,
                    'company_2':this.state.rabiCropDetails[1].company_2,
                  },
                  {
                    'crop_3':item.value,
                    'acre_3':this.state.rabiCropDetails[2].acre_3,
                    'product_3':this.state.rabiCropDetails[2].product_3,
                    'company_3':this.state.rabiCropDetails[2].company_3,
                  },
                  {
                    'crop_4':this.state.rabiCropDetails[3].crop_4,
                    'acre_4':this.state.rabiCropDetails[3].acre_4,
                    'product_4':this.state.rabiCropDetails[3].product_4,
                    'company_4':this.state.rabiCropDetails[3].company_4,
                  },
                  {
                    'crop_5':this.state.rabiCropDetails[4].crop_5,
                    'acre_5': this.state.rabiCropDetails[4].acre_5,
                    'product_5':this.state.rabiCropDetails[4].product_5,
                    'company_5':this.state.rabiCropDetails[4].company_5,
                  },
                  {
                    'crop_6':this.state.rabiCropDetails[5].crop_6,
                    'acre_6':this.state.rabiCropDetails[5].acre_6,
                    'product_6':this.state.rabiCropDetails[5].product_6,
                    'company_6':this.state.rabiCropDetails[5].company_6,
                  },
                  {
                    'crop_7':this.state.rabiCropDetails[6].crop_7,
                    'acre_7':this.state.rabiCropDetails[6].acre_7,
                    'product_7':this.state.rabiCropDetails[6].product_7,
                    'company_7':this.state.rabiCropDetails[6].company_7,
                  }],
                })}
            />


            <View style={styles.cropSectionRows}>
            
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2': this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':text,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':text,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':text,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>

            </View>

            <DropDownPicker
               items={this.state.cropArray}
                defaultValue={this.state.rabiCropDetails[3].crop_4}
                containerStyle={{height: "5%", width:"70%", marginLeft:"6%", marginBottom:"2%", padding:"0%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"1%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select crop"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                  rabiCropDetails:[{
                    'crop_1': item.value,
                    'acre_1': this.state.rabiCropDetails[0].acre_1,
                    'product_1':this.state.rabiCropDetails[0].product_1,
                    'company_1':this.state.rabiCropDetails[0].company_1,
                  },
                  {
                    'crop_2':this.state.rabiCropDetails[1].crop_2,
                    'acre_2': this.state.rabiCropDetails[1].acre_2,
                    'product_2':this.state.rabiCropDetails[1].product_2,
                    'company_2':this.state.rabiCropDetails[1].company_2,
                  },
                  {
                    'crop_3':this.state.rabiCropDetails[2].crop_3,
                    'acre_3':this.state.rabiCropDetails[2].acre_3,
                    'product_3':this.state.rabiCropDetails[2].product_3,
                    'company_3':this.state.rabiCropDetails[2].company_3,
                  },
                  {
                    'crop_4':item.value,
                    'acre_4':this.state.rabiCropDetails[3].acre_4,
                    'product_4':this.state.rabiCropDetails[3].product_4,
                    'company_4':this.state.rabiCropDetails[3].company_4,
                  },
                  {
                    'crop_5':this.state.rabiCropDetails[4].crop_5,
                    'acre_5': this.state.rabiCropDetails[4].acre_5,
                    'product_5':this.state.rabiCropDetails[4].product_5,
                    'company_5':this.state.rabiCropDetails[4].company_5,
                  },
                  {
                    'crop_6':this.state.rabiCropDetails[5].crop_6,
                    'acre_6':this.state.rabiCropDetails[5].acre_6,
                    'product_6':this.state.rabiCropDetails[5].product_6,
                    'company_6':this.state.rabiCropDetails[5].company_6,
                  },
                  {
                    'crop_7':this.state.rabiCropDetails[6].crop_7,
                    'acre_7':this.state.rabiCropDetails[6].acre_7,
                    'product_7':this.state.rabiCropDetails[6].product_7,
                    'company_7':this.state.rabiCropDetails[6].company_7,
                  }],
                })}
            />
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': text,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':text,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':text,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':text,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':text,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':text,
                    }],
                  });
                }}
              ></TextInput>

            </View>

            <DropDownPicker
                items={this.state.cropArray}
                defaultValue={this.state.rabiCropDetails[4].crop_5}
                containerStyle={{height: "5%", width:"70%", marginLeft:"6%", marginBottom:"2%", padding:"0%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"1%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select crop"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                  rabiCropDetails:[{
                    'crop_1': this.state.rabiCropDetails[0].crop_1,
                    'acre_1': this.state.rabiCropDetails[0].acre_1,
                    'product_1':this.state.rabiCropDetails[0].product_1,
                    'company_1':this.state.rabiCropDetails[0].company_1,
                  },
                  {
                    'crop_2':this.state.rabiCropDetails[1].crop_2,
                    'acre_2': this.state.rabiCropDetails[1].acre_2,
                    'product_2':this.state.rabiCropDetails[1].product_2,
                    'company_2':this.state.rabiCropDetails[1].company_2,
                  },
                  {
                    'crop_3':this.state.rabiCropDetails[2].crop_3,
                    'acre_3':this.state.rabiCropDetails[2].acre_3,
                    'product_3':this.state.rabiCropDetails[2].product_3,
                    'company_3':this.state.rabiCropDetails[2].company_3,
                  },
                  {
                    'crop_4':this.state.rabiCropDetails[3].crop_4,
                    'acre_4':this.state.rabiCropDetails[3].acre_4,
                    'product_4':this.state.rabiCropDetails[3].product_4,
                    'company_4':this.state.rabiCropDetails[3].company_4,
                  },
                  {
                    'crop_5':item.value,
                    'acre_5': this.state.rabiCropDetails[4].acre_5,
                    'product_5':this.state.rabiCropDetails[4].product_5,
                    'company_5':this.state.rabiCropDetails[4].company_5,
                  },
                  {
                    'crop_6':this.state.rabiCropDetails[5].crop_6,
                    'acre_6':this.state.rabiCropDetails[5].acre_6,
                    'product_6':this.state.rabiCropDetails[5].product_6,
                    'company_6':this.state.rabiCropDetails[5].company_6,
                  },
                  {
                    'crop_7':this.state.rabiCropDetails[6].crop_7,
                    'acre_7':this.state.rabiCropDetails[6].acre_7,
                    'product_7':this.state.rabiCropDetails[6].product_7,
                    'company_7':this.state.rabiCropDetails[6].company_7,
                  }],
                })}
            />
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5':text,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':text,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':text,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>

            </View>

            <DropDownPicker
                items={this.state.cropArray}
                defaultValue={this.state.rabiCropDetails[5].crop_6}
                containerStyle={{height: "5%", width:"70%", marginLeft:"6%", marginBottom:"2%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"1%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select crop"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                  rabiCropDetails:[{
                    'crop_1': this.state.rabiCropDetails[0].crop_1,
                    'acre_1': this.state.rabiCropDetails[0].acre_1,
                    'product_1':this.state.rabiCropDetails[0].product_1,
                    'company_1':this.state.rabiCropDetails[0].company_1,
                  },
                  {
                    'crop_2':this.state.rabiCropDetails[1].crop_2,
                    'acre_2': this.state.rabiCropDetails[1].acre_2,
                    'product_2':this.state.rabiCropDetails[1].product_2,
                    'company_2':this.state.rabiCropDetails[1].company_2,
                  },
                  {
                    'crop_3':this.state.rabiCropDetails[2].crop_3,
                    'acre_3':this.state.rabiCropDetails[2].acre_3,
                    'product_3':this.state.rabiCropDetails[2].product_3,
                    'company_3':this.state.rabiCropDetails[2].company_3,
                  },
                  {
                    'crop_4':this.state.rabiCropDetails[3].crop_4,
                    'acre_4':this.state.rabiCropDetails[3].acre_4,
                    'product_4':this.state.rabiCropDetails[3].product_4,
                    'company_4':this.state.rabiCropDetails[3].company_4,
                  },
                  {
                    'crop_5':this.state.rabiCropDetails[4].crop_5,
                    'acre_5': this.state.rabiCropDetails[4].acre_5,
                    'product_5':this.state.rabiCropDetails[4].product_5,
                    'company_5':this.state.rabiCropDetails[4].company_5,
                  },
                  {
                    'crop_6':item.value,
                    'acre_6':this.state.rabiCropDetails[5].acre_6,
                    'product_6':this.state.rabiCropDetails[5].product_6,
                    'company_6':this.state.rabiCropDetails[5].company_6,
                  },
                  {
                    'crop_7':this.state.rabiCropDetails[6].crop_7,
                    'acre_7':this.state.rabiCropDetails[6].acre_7,
                    'product_7':this.state.rabiCropDetails[6].product_7,
                    'company_7':this.state.rabiCropDetails[6].company_7,
                  }],
                })}
            />
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':text,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':text,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':text,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>

            </View>

            <DropDownPicker
                items={this.state.cropArray}
                defaultValue={this.state.rabiCropDetails[6].crop_7}
                containerStyle={{height: "5%", width:"70%", marginLeft:"6%", marginBottom:"2%"}}
                style={{backgroundColor: '#fafafa', marginLeft:"0%", width:"60%", marginBottom:"1%", marginTop:"0%"}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                showArrow={false}
                placeholder="Tap to select crop"
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                  rabiCropDetails:[{
                    'crop_1': this.state.rabiCropDetails[0].crop_1,
                    'acre_1': this.state.rabiCropDetails[0].acre_1,
                    'product_1':this.state.rabiCropDetails[0].product_1,
                    'company_1':this.state.rabiCropDetails[0].company_1,
                  },
                  {
                    'crop_2':this.state.rabiCropDetails[1].crop_2,
                    'acre_2': this.state.rabiCropDetails[1].acre_2,
                    'product_2':this.state.rabiCropDetails[1].product_2,
                    'company_2':this.state.rabiCropDetails[1].company_2,
                  },
                  {
                    'crop_3':this.state.rabiCropDetails[2].crop_3,
                    'acre_3':this.state.rabiCropDetails[2].acre_3,
                    'product_3':this.state.rabiCropDetails[2].product_3,
                    'company_3':this.state.rabiCropDetails[2].company_3,
                  },
                  {
                    'crop_4':this.state.rabiCropDetails[3].crop_4,
                    'acre_4':this.state.rabiCropDetails[3].acre_4,
                    'product_4':this.state.rabiCropDetails[3].product_4,
                    'company_4':this.state.rabiCropDetails[3].company_4,
                  },
                  {
                    'crop_5':this.state.rabiCropDetails[4].crop_5,
                    'acre_5': this.state.rabiCropDetails[4].acre_5,
                    'product_5':this.state.rabiCropDetails[4].product_5,
                    'company_5':this.state.rabiCropDetails[4].company_5,
                  },
                  {
                    'crop_6':this.state.rabiCropDetails[5].crop_6,
                    'acre_6':this.state.rabiCropDetails[5].acre_6,
                    'product_6':this.state.rabiCropDetails[5].product_6,
                    'company_6':this.state.rabiCropDetails[5].company_6,
                  },
                  {
                    'crop_7':item.value,
                    'acre_7':this.state.rabiCropDetails[6].acre_7,
                    'product_7':this.state.rabiCropDetails[6].product_7,
                    'company_7':this.state.rabiCropDetails[6].company_7,
                  }],
                })}
            />
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':text,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':text,
                      'company_7':this.state.rabiCropDetails[6].company_7,
                    }],
                  });
                }}
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ text =>{
                  this.setState({
                    rabiCropDetails:[{
                      'crop_1':this.state.rabiCropDetails[0].crop_1,
                      'acre_1': this.state.rabiCropDetails[0].acre_1,
                      'product_1':this.state.rabiCropDetails[0].product_1,
                      'company_1':this.state.rabiCropDetails[0].company_1,
                    },
                    {
                      'crop_2':this.state.rabiCropDetails[1].crop_2,
                      'acre_2':this.state.rabiCropDetails[1].acre_2,
                      'product_2':this.state.rabiCropDetails[1].product_2,
                      'company_2':this.state.rabiCropDetails[1].company_2,
                    },
                    {
                      'crop_3':this.state.rabiCropDetails[2].crop_3,
                      'acre_3':this.state.rabiCropDetails[2].acre_3,
                      'product_3':this.state.rabiCropDetails[2].product_3,
                      'company_3':this.state.rabiCropDetails[2].company_3,
                    },
                    {
                      'crop_4':this.state.rabiCropDetails[3].crop_4,
                      'acre_4':this.state.rabiCropDetails[3].acre_4,
                      'product_4':this.state.rabiCropDetails[3].product_4,
                      'company_4':this.state.rabiCropDetails[3].company_4,
                    },
                    {
                      'crop_5':this.state.rabiCropDetails[4].crop_5,
                      'acre_5': this.state.rabiCropDetails[4].acre_5,
                      'product_5':this.state.rabiCropDetails[4].product_5,
                      'company_5':this.state.rabiCropDetails[4].company_5,
                    },
                    {
                      'crop_6':this.state.rabiCropDetails[5].crop_6,
                      'acre_6':this.state.rabiCropDetails[5].acre_6,
                      'product_6':this.state.rabiCropDetails[5].product_6,
                      'company_6':this.state.rabiCropDetails[5].company_6,
                    },
                    {
                      'crop_7':this.state.rabiCropDetails[6].crop_7,
                      'acre_7':this.state.rabiCropDetails[6].acre_7,
                      'product_7':this.state.rabiCropDetails[6].product_7,
                      'company_7':text,
                    }],
                  });
                }}
              ></TextInput>

            </View>


           
        </View>
    
    

    <View style={{marginTop:"2%",marginBottom:"2%",flex:1, flexDirection:"row"}}> 
            <TouchableOpacity
              style={styles.btnSection}
              onPress={() =>  this.saveData()}>
              <Text style={styles.btnText}>
                Save Details
              </Text>
            </TouchableOpacity> 
            <TouchableOpacity
              style={styles.btnSection_2}
              onPress={() =>  this.moveToNextScreen()}>
              <Text style={styles.btnText}>
                Next Page
              </Text>
            </TouchableOpacity> 
          </View>

          <View style={{marginTop:"0%", alignItems:"center",marginBottom:"2%",}}> 
           
          </View>
          <AwesomeAlert
          show={this.state.alertFlag}
          showProgress={false}
          title="Attention"
          titleStyle={{fontWeight:"bold"}}
          message="Please save the details to proceed further"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            this.setState({
              alertFlag:false
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
     // padding:"2%",
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
      marginTop:"5%",
      marginBottom:"2%",
      height:50,
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
      height: "5%",
      flexDirection: "row",
      marginTop: "1%",
      marginLeft: "2%",
      marginRight: "2%",
      marginBottom: "5%",
      width:"90%",
      padding:"0%",
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
      borderWidth: 0,
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
      marginLeft: "25%",
      marginRight: "2%",
      fontWeight:"700",
      fontSize:25,
      marginTop:"1%",
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
    firstSectionColumn_2: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: "80%",
      width: "70%",
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "5%"
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
      borderWidth: 0,
      borderColor: "#000000",
      borderRadius: 7,
      borderStyle: "solid",
      backgroundColor: "rgba(210,206,206,1)",
      marginLeft: "1%",
      marginRight: "2%"
    },

    btnSection: {
      width: "40%",
      height: "60%",
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      margin:"5%",

    },
    btnSection_2: {
      width: "40%",
      height: "60%",
      backgroundColor: '#16a085',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      margin:"5%",

    },
    btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    }
  });



export default RabiDetails;
