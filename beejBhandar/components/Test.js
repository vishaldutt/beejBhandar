import React, { Component } from "react";
import {  StyleSheet, View, TouchableOpacity, TextInput, ScrollView}  from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

class QRScanner extends React.Component{
  constructor(props) {
    super(props);
  }




  render() {
    return (
      <ScrollView>
       
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
            <View style={styles.cropSectionRows}>
              <TextInput
                placeholder="acres"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI")}
              ></TextInput>
              <TextInput
                placeholder="product"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={alert("HI") }
              ></TextInput>
              <TextInput
                placeholder="company"
                inlineImagePadding={2}
                style={styles.cropSectionEntries_v1}
                onChangeText={ alert("HI")}
              ></TextInput>
            </View>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({    
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
