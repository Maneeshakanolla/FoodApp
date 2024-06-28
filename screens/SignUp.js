
import {StyleSheet, View,Text, Button,TextInput,Image,TouchableOpacity,Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignIn from "./SignIn";
 
function SignUp ({navigation}) {
    return(
        <View>
            <Text style={{marginTop:100,marginLeft:17,fontWeight:'bold',marginBottom:30}}>Sign UP</Text>
            <TextInput 
            placeholder='Name'
            style={styles.input}
      
           />
            <TextInput 
            placeholder='Email'
            style={styles.input}
      
           />
            <TextInput 
            placeholder='Password'
            style={styles.input}
      
           />
           <TextInput 
            placeholder='Confirm Password'
            style={styles.input}
      
           />
           <View style={styles.button}>
            <Button  title="Sign Up"
            onPress={ () =>  navigation.navigate(SignIn) }
            color='red'
            />
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,color:'#999',textAlign:'left',marginLeft:10,}}>
                Already have an account?</Text>
            <Pressable 
            onPress={()=> navigation.navigate(SignIn)}>
            <Text style={{fontSize:16,color:'red',textAlign:'left',marginLeft:5}}>
                SignIn</Text>
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

 
export default SignUp;

