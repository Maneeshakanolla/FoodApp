import { View,Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "./Search";
import Order from "./Order";



function Home ({navigation}) {
    // const navigation = useNavigation()
    return(
        <View>
            <Text> HomeScreen</Text>
            <Button title="Search"
            onPress={ () =>  navigation.navigate(Search) }
            />
            <Button title="Order"
            onPress={ () =>  navigation.navigate(Order) }
            />
        </View>

    )
}

export default Home;