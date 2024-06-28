
import { useNavigation } from "@react-navigation/native";
import { View,Button,Text, Pressable,Image,StyleSheet,TouchableOpacity } from "react-native";

import { useState } from "react";
import MyProfile from "./bottomNav/MyProfile";
 
function EditProfile ({navigation}) {
    const [press,setPress]=useState(false)


    // const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate()}>
        <Image
          source={require('../assets/snack_3227435.png')} // Replace 'image.png' with your image path
          style={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>

          
         <View> 
         <Pressable 
          onPress={()=> navigation.navigate(SignIn)}>
         <Text style={{color:'white',fontSize:42,fontWeight:'bold'}}>Hunny Food</Text>
          </Pressable>
          </View>
      
</View>
 
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welImage:{
    width:164,
    height:164,
},
});
export default EditProfile;