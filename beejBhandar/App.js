import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QRScanner from "./components/QRScanner";
import Registration from "./components/Registration";
import QRCodeDisplay from "./components/QRCodeDisplay";
import LoginSuccess from "./components/LoginSuccess";
import RabiDetails from "./components/RabiDetails";
import KharifDetails from "./components/KharifDetails";
import ChariDetails from "./components/ChariDetails";
import GardenDetails from "./components/GardenDetails";
import Update from "./components/Update";
import Login from "./components/Login";
import WelcomeScreenUser from "./components/WelcomeScreenUser";
import UserRegistration from "./components/UserRegistration";



const Stack = createStackNavigator();


class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <View style={styles.container}>
      //    <WelcomeScreen />
      // </View>

      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} 
          options={{
            headerShown:false
          }}/>
           <Stack.Screen name="Home" component={WelcomeScreen} 
            options={{
              headerShown:false
            }}/>
            <Stack.Screen name="WelcomeScreenUser" component={WelcomeScreenUser} 
            options={{
              headerShown:false
            }}/>
             <Stack.Screen name="UserRegistration" component={UserRegistration} 
            options={{
              headerShown:false
            }}/>
          <Stack.Screen name="Verify" component={QRScanner} 
            options={{
              headerShown:false
            }}/>
          <Stack.Screen name="Registration" component={Registration}
            options={{
              headerShown:false
            }}/>
            <Stack.Screen name="Update" component={Update}
            options={{
              headerShown:false
            }}/>
            <Stack.Screen name="RabiDetails" component={RabiDetails} 
              options={{
                headerShown:false
              }}/>
            <Stack.Screen name="KharifDetails" component={KharifDetails} 
            options={{
              headerShown:false
            }}/>
            <Stack.Screen name="ChariDetails" component={ChariDetails} 
              options={{
                headerShown:false
              }}/>
            <Stack.Screen name="GardenDetails" component={GardenDetails} 
            options={{
              headerShown:false
            }}/>
          <Stack.Screen 
            name="QRCodeDisplay"
            component={QRCodeDisplay}
            options={{
              title: 'QRCodeDisplay',
              headerShown:false,
              headerStyle: {
                backgroundColor: 'white',
                display:'none'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
            <Stack.Screen 
            name="LoginSuccess"
            component={LoginSuccess}
            options={{
              title: 'LoginSuccess',
              headerShown:false,
              headerStyle: {
                backgroundColor: 'white',
                display:'none'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom:"2%",
      backgroundColor:"#32ff7e",
      
    }
  });



export default App;
