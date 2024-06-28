import { View,Text, Button,TextInput, StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewPassword from "./NewPassword";

 
function ConfirmPassword ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center',marginTop:100}}>
           <Image
          source={require('../assets/rotationlock.png')} // Replace 'image.png' with your image path
          style={{ width: 200, height: 200 }}
        />
        <Text style={{fontSize:28,color:'red',textAlign:'center',padding:50}}>Your Passward has been reset</Text>
        </View>
           <View style={styles.button}>
            <Button  title="Done"
            onPress={ () =>  navigation.navigate(NewPassword) }
            color='red'
            />
            </View>
          
        </View>
 
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
     // justifyContent:'center'
    },
    button: {
        height: 40,
        width: '100%',
        paddingHorizontal:10,
        borderRadius: 20,
        
      },
      
   
  });
 
export default ConfirmPassword;