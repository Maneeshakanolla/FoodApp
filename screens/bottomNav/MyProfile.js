import {StyleSheet, View,Text,TouchableOpacity,Image,Pressable } from "react-native";
import OrderHistory from "../OrderHistory";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import SignIn from "../SignIn";

//const Stack = createNativeStackNavigator;

function MyProfile(navigation) {
    const [press,setPress]=useState(false)
    return(
    <View style={styles.container}>
            <View style={styles.myprofiletext}>
                 <Text>My Profile</Text>
            </View>
            <View style={styles.rectangle}>
                <View style={{flexDirection:'row'}}>
                   <Image style={styles.hunnylogo} source={require("c:\Users\OrCon\Maneesha\ReactNactive\Food-App/assets/person1.png")}/>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.hunnytext}>Hunny Code</Text>
                        <TextInput style={{marginLeft:10}} placeholder="code.hunny40@gmail.com"></TextInput>
                    </View>
                    <Image style={styles.editprofile} source={require("c:\Users\OrCon\Maneesha\ReactNactive\Food-App/assets/edit.png")}/>
               
 
                </View>
               
            </View>
             
        </View>
    );
 
}
 
const styles= StyleSheet.create({
    container:{
        flex: 1,
       
    },
    myprofiletext:{
        backgroundColor:'red',
        paddingTop:30,
        paddingBottom:60,
    },
    rectangle: {
        width: '90%' ,
        height: 95,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginLeft:'5%',
        marginTop:60,
        position:'absolute'
       
    },
    hunnylogo:{
        width: 70,
        height:70,
        marginTop:20
    },
    hunnytext:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:20
    },
    editprofile:{
        width:40,
        height:40,
    }
   
 
});
export default MyProfile;