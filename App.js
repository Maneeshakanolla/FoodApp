
import { BaseNavigationContainer, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassward";
import ConfirmPassword from "./screens/ConfirmPassword";
import NewPassword from "./screens/NewPassword";
import VerifyPhoneOtp from "./screens/VerifyPhoneOtp";
import VerifyPhone from "./screens/VerifyPhone";
import BottomNavigation from "./screens/bottomNav/BottomNavigation";

const Stack = createNativeStackNavigator();

 
 
 
export default function App() {
  return (
    

   <NavigationContainer>
     <Stack.Navigator initialRouteName="Welcome"
     screenOptions={{
      headerShown:false
     }}>
      <Stack.Screen name="Welcome" component={Welcome}
 
      />
      <Stack.Screen name="SignIn" component={SignIn}
        initialParams={{name: "guest",}}
      />
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword}/>
      <Stack.Screen name="NewPassword" component={NewPassword}/>
      <Stack.Screen name="VerifyPhone" component={VerifyPhone}/>
  <Stack.Screen name="VerifyPhoneOtp" component={VerifyPhoneOtp}/>
  <Stack.Screen name="BottomNavigation" component={BottomNavigation}
   options={{ headerTitle:false }}/>
  </Stack.Navigator>
     
</NavigationContainer>  

   
  );
}
 