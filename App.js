import { Button, StyleSheet, Text, View } from 'react-native';
import  { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const Home = (props) => {
  const nav = props.navigation;
  const [name, setName] = useState("Kiều Thanh Tùng");
  const [age, setAge] = useState("21");
  const [location, setLocation] = useState("Hà Nội");
  const [phone, setPhone] = useState("0987654321");
  const [email, setEmail] = useState("tungktph27675@fpt.edu.vn");

  const update = (name, age, address, phone, email) => {
    setName(name);
    setAge(age);
    setLocation(location);
    setPhone(phone);
    setEmail(email);
  };

  return (
    <View>
      <Button
        title='Thông tin cá nhân'
        onPress={() => nav.navigate(
          'Profile',{
            name: name,
            age: age,
            location: location,
            phone: phone,
            email: email,
            update: update,
          }
        )}
      />
    </View>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}

        />
        <Stack.Screen name='Profile' component={Profile}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
