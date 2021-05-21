import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const Offline = () =>{
    const [isInternetReachable, setIsInternetReachable] = useState(false);
    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state =>{
            setIsInternetReachable(state.isInternetReachable);
        });
        return () =>{
            unsubscribe();
        };
    }, []);
    if(isInternetReachable){
        return null;
    }
    return(
        <View style={styles.banner}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    banner:{
        flex:0.045,
        width:"100%",
        height:"2%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red",
    },
    text:{
        color:"white",
        fontSize:15,
        alignItems:"center",
        textAlign:"center",
    }
});

export default Offline;