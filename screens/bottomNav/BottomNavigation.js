import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import Home from "./Home";
import Search from "./Search";
import Order from "./Order";
import MyProfile from "./MyProfile";
import { StyleSheet } from "react-native";



const Tab = createBottomTabNavigator();
 
 
 
function BottomNavigation() {
  return (

     
      <Tab.Navigator  
            screenOptions={{
               
                tabBarShowLabel: false,
                tabBarStyle: { ...StyleSheet.tab },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "red",
            }}
            >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon: () => <AntDesign name="Home" size={24} color="black" />
                }}
            />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="MyProfile" component={MyProfile}
            
            options={{
             tabBarLabel:"My Profile",
             headerStyle: {
                backgroundColor: 'red', 
                height: 200, 
              },
            tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />
                   }}
                   />
                    

        </Tab.Navigator>

    
        
   
   
  );
}
const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: 'white',
        height: 60,
    },
    size: {
        height: 24,
        width: 24,
    },
    box: {
        backgroundColor: 'white',
        width:100,
        height:100,
    }
})
export default BottomNavigation;

 