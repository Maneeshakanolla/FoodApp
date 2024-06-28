import { View,Text, Button,TextInput, StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import VerifyPhone from "./VerifyPhone";
import SignIn from "./SignIn";

 
function NewPassword ({navigation}) {
    return(
        <View>
            <Text style={{color:"#999",marginBottom:20,marginTop:20}}>
                Eneter new password and Confirm.
                </Text>
                <Text style={{color:'#999'}}>New Password</Text>
            <TextInput 
            placeholder='**********'
            style={styles.input}
            />
            <Text style={{color:'#999'}}>Confirm Password</Text>
            <TextInput 
            placeholder='**********'
            style={styles.input}
      
           />
           <View style={styles.button}>
            <Button  title="Change Password"
            onPress={ () =>  navigation.navigate(SignIn) }
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
 
export default NewPassword;