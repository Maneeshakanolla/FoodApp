import { View,Text, Button,TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ConfirmPassword from "./ConfirmPassword"
import VerifyPhoneOtp from "./VerifyPhoneOtp";
 
function VerifyPhone ({navigation}) {
    return(
        <View>
            <Text style={{color:'#999',padding:20}}>we have sent youan SMS with a code to number +91 0123456789.</Text>
            <TextInput 
            placeholder='Phone Number'
            style={styles.input}
      
           />
           <View style={styles.button}>
            <Button  title="Confirm"
            onPress={ () =>  navigation.navigate(VerifyPhoneOtp) }
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
 
export default VerifyPhone;