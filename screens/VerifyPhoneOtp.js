import { View,Text, Button,TextInput, StyleSheet,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ConfirmPassword from "./ConfirmPassword"
import Circle from './Circles'; 
import SignIn from "./SignIn";

 
function VerifyPhoneOtp({navigation}) {
    return(
        <View>
            <Text style={{color:'#999',marginTop:30,marginLeft:10}}>Enter your OTP code here</Text>
            <View 
            style={{flexDirection:'row',
            marginLeft:50,marginRight:50,marginBottom:20,marginTop:20,
            justifyContent:'space-evenly'}}>
           <Circle diameter={50} color="#999" />
           <Circle diameter={50} color="#999" />
           <Circle diameter={50} color="#999" />
           <Circle diameter={50} color="#999" />
           <Circle diameter={50} color="#999" />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,color:'#999',textAlign:'left',marginLeft:10,}}>
                Don't recive the OTP?</Text>
            <Pressable 
            onPress={()=> navigation.navigate(SignUp)}>
            <Text style={{fontSize:16,color:'red',textAlign:'left',marginLeft:5}}>
                Resend</Text>
            </Pressable>
             </View>
           <View style={styles.button}>
            <Button  title="Verify"
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
 
export default VerifyPhoneOtp;