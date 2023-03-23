import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screen/Home';

const Drawer= createDrawerNavigator();

// function Homescreen({navigation}){
//   return(
//   <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//     <Button 
//       onPress={() => navigation.navigate('Notification Screen')}
//       title="Go to notifications"
//     />
//   </View>
//   );
// }
// function Notificationscreen({navigation}){
//   return(
//   <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//     <Button 
//       onPress={()=> navigation.navigate('About Screen')}
//       title="Go To About "
//     />
//   </View>
//   );
// }

function Notificationscreen({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button 
        onPress={()=> navigation.navigate('About Screen')}
        title="Go To About "
      />
    </View>
    );
}

function Aboutscreen({navigation}){
  return(
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Button 
      onPress={()=> navigation.navigate('Home Screen')}
      title="Go Back Home "
    />
  </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home Screen">
        <Drawer.Screen name="Home Screen" component={HomeScreen}/>
        <Drawer.Screen name="Notification Screen" component={Notificationscreen}/>
        <Drawer.Screen name="About Screen" component={Aboutscreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
