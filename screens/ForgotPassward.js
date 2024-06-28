
import { View,Text, Button,TextInput, StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ConfirmPassword from "./ConfirmPassword";

//import ConfirmPassword from "./ConfirmPassword"
 
function ForgotPassword ({navigation}) {
    return(
        <View>
            <Text style={{color:'#999',marginTop:30,textAlign:'center',fontWeight:'normal',marginBottom:30,paddingLeft:20,paddingRight:20}}>
            Please enter your email address. You will receive a link to create a new password via email.
                </Text>
            <TextInput 
            placeholder='Email'
            style={styles.input}
      
           />
           <View style={styles.button}>
            <Button  title="Send"
            onPress={ () =>  navigation.navigate(ConfirmPassword) }
            color='red'
            />
            
            </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
        height: 40,
        width: '100%',
        paddingHorizontal:10,
        marginBottom:10,
        borderRadius: 20,
        marginTop:20
      },
      input: {
       
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal:10,
        marginBottom: 20,
        borderRadius: 20,

        
      },
   
  });
 
export default ForgotPassword;