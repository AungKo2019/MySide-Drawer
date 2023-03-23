import React from "react";
import { View,Button } from "react-native";

function Homescreen({navigation}){
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button
             onPress={()=> navigation.navigate('Notification Screen')}
             title="Go To Notifications"
             >
            </Button>
        </View>
    );
}

export default Homescreen;