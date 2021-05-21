import React, { Component } from "react";
import logo from "./logo-tm.png";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput} from "react-native";
import background from "./back.jpeg";



class LoginSuccess extends React.Component{
  constructor(props) {
    super(props);
  }
  
  state={
  name:'NA',
  mobile:'NA',
  village:'NA',
  imageUri:'http://backend.beejbhandar.in/images/',

}

componentDidMount () {

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://backend.beejbhandar.in/get-data.php?mobile="+this.props.route.params.navigationData, requestOptions)
  .then(response => response.text())
  .then(result => JSON.parse(result))
  .then(
    data => (console.log(data),
    this.setState({name:data.name}),
    this.setState({mobile:data.mobile}),
    this.setState({village:data.village}),
    this.setState({imageUri:(this.state.imageUri+data.image)})))
  .catch(error => console.log('error', error));

}

  render() {
    return (
      <ImageBackground source={background}
      style={styles.backgroundContainer}>
        <Image
          source={{ uri: this.state.imageUri }}
          style={styles.images}
        />
        <View style={styles.entries}>
            <Text style={styles.textEntriesCol_1}>Name</Text>
            <Text style={styles.textEntriesCol_2}>{this.state.name}</Text>
       </View>
       <View style={styles.entries}>
            <Text style={styles.textEntriesCol_1}>Mobile</Text>
            <Text style={styles.textEntriesCol_2}>{this.state.mobile}</Text>
       </View>
       <View style={styles.entries}>
            <Text style={styles.textEntriesCol_1}>Village</Text>
            <Text style={styles.textEntriesCol_2}>{this.state.village}</Text>
       </View>
       {/* <TouchableOpacity
            style={styles.btnSection}
            onPress={() => this.refresh()}>
            <Text style={styles.btnText}>
              Farmer Login
            </Text>
          </TouchableOpacity>  */}

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
  MainContainer: {
    //flex: 1,
    padding:"2%",
    backgroundColor:"#32ff7e",
    height:"100%",
    width:"100%",
    alignItems:"center",
  },
  btnSection: {
    width:"80%",
    height: "1%",
    backgroundColor: '#16a085',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:"10%",
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  images: {
    width: "70%",
    height: "40%",
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor:'grey',
    marginLeft:"15%",
    marginRight:"15%",
    marginBottom:"1%",
    marginTop:"20%",
    borderRadius:10,
  },
  entries:{
    //flex: 1,
    flexDirection:'row',
    width:"70%",
    height:"6%",
    //marginLeft:"15%",
    marginTop:"3%",
    
   
  },
  textEntriesCol_1:{
    backgroundColor:"#16a085",
    width:"30%",
    height:"100%",
    paddingTop:"3%",
    paddingLeft:"5%",
    color: 'white',
    fontSize: 18,
    borderBottomLeftRadius:10,
  },
  textEntriesCol_2:{
    backgroundColor:"black",
    width:"70%",
    height:"100%",
    paddingTop:"3%",
    paddingLeft:"5%",
    color: 'white',
    fontSize: 18,
    borderTopRightRadius:10,
   
  },
  firstSectionRows: {
    height: "100%",
    flexDirection: "row",
    marginTop: "1%",
    marginLeft: "2%",
    marginRight: "2%",
    width:"90%",
  },
  firstSectionColumn_1: {
    fontFamily: "roboto-regular",
    fontWeight:"bold",
    color: "#121212",
    height: "100%",
    width: "30%",
    marginTop: "2%",
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
  });



export default LoginSuccess;
