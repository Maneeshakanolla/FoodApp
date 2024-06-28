import { View,Text, Button ,StyleSheet, TextInput, Pressable,Image,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassward";
import VerifyPhone from "./VerifyPhone";
import BottomNavigation from "./bottomNav/BottomNavigation";
 
function SignIn ({navigation}) {
    // const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text style={{marginTop:100,marginLeft:17,fontWeight:'bold',marginBottom:30}}>SignIn</Text>
            <TextInput 
            placeholder='Email'
            style={styles.input}
      
           />
            <TextInput 
            placeholder='Password'
            style={styles.input}
      
           />
           <Pressable onPress={() => navigation.navigate(ForgotPassword)}>
           <Text style={{fontSize:16,color:'red',textAlign:'right',marginRight:10}}>Forgot Passward?</Text>
           </Pressable>
            <View style={styles.button}>
            <Button  title="SignIn"
            onPress={ () =>  navigation.navigate(BottomNavigation) }
            color='red'
            />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,color:'#999',textAlign:'left',marginLeft:10,}}>
                Don't have an account?</Text>
            <Pressable 
            onPress={()=> navigation.navigate(SignUp)}>
            <Text style={{fontSize:16,color:'red',textAlign:'left',marginLeft:5}}>
                SignUP</Text>
            </Pressable>
             </View>
            <View style={{flexDirection:'row',marginLeft:100,marginTop:40}}>
         <TouchableOpacity>
          <Image
          source={require('../assets/facebookicon.png')}
          style={{ width: 50, height: 50, marginRight:10}}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          source={require('../assets/linkedin.jpg')} 
          style={{ width: 50, height: 50 }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          source={require('../assets/instagramicon.jpg')} 
          style={{ width: 50, height: 50,marginLeft:10}}
          />
          </TouchableOpacity>
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

 
export default SignIn;