import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,Image,Modal ,Button, SafeAreaView,
  ScrollView,
  ImageBackground,
  Animated,
  useWindowDimensions,} from 'react-native';
  
import { useState } from 'react';
import React, {useRef} from 'react';


const Stack = createNativeStackNavigator();
 
const images = new Array(3).fill(
 
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
  );

export default function App() {
  const [press,setPress]=useState(false)
  
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();
  
  
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> console.log("Image pressed")}>
      <Image  source ={require("./assets/snack_3227435.png")}
        style={styles.welImage}
        resizeMode='contain'/>
     </Pressable>
     <View> 
      <Pressable onPress={()=>setPress(true)}>
     <Text style={{color:'white',fontSize:42,fontWeight:'bold'}}>Hunny Food</Text>
      </Pressable>
    
     <Modal visible={press}
     onRequestClose={()=>setPress(false)}>
   
    <SafeAreaView style={styles.container1}>
        
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            return (
              <View style={{width: windowWidth, height: 250}} key={imageIndex}>
                <ImageBackground source={{uri: image}} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                     {'Image - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {width}]}
              />
            );
          })}
           </View>
      </SafeAreaView>
   </Modal> 
    </View>
    
   
    </View>
  );
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
container1: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
scrollContainer: {
  height: 300,
  alignItems: 'center',
  justifyContent: 'center',
},
card: {
  flex: 1,
  marginVertical: 4,
  marginHorizontal: 16,
  borderRadius: 5,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
},
textContainer: {
   backgroundColor: 'rgba(0,0,0, 0.8)',
  paddingHorizontal: 24,
  paddingVertical: 8,
  borderRadius: 5,
},
infoText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
normalDot: {
  height: 8,
  width: 8,
  borderRadius: 4,
  backgroundColor: 'silver',
  marginHorizontal: 4,
},
indicatorContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
});
