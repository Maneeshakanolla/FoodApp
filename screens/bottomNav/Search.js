import { View,Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";

function Search ({navigation, route}) {
    //const {name} = route.params
    return(
        <View>
            <Text> Search Screen </Text>
            <Button title="Home"
            onPress={ () =>  navigation.navigate(Home) }
            />
        </View>

    )
}

export default Search;