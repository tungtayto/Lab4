import {Image, StyleSheet, Text, View, ScrollView, Button, TextInput, FlatList, Modal, Pressable } from 'react-native';
import { useState } from 'react';


const App = (props) => {
    const {route} = props;
    const nav = props.navigation;
    const {update} = route.params;
    const [name, setName] = useState(route.params.name);
    const [age, setAge] = useState(route.params.age);
    const [location, setLocation] = useState(route.params.location);
    const [phone, setPhone] = useState(route.params.phone);
    const [email, setEmail] = useState(route.params.email);

    const [nameForm, setShowForm] = useState(false);

    const onClose = () => {
        setName(name);
        setAge(age);
        setLocation(location);
        setPhone(phone);
        setEmail(email);
        setShowForm(false);
      };
      const onclose = () => {
        onClose();
        nav.navigate("Home");
      }
      const onSave = () => {
        update(name, age, location, phone, email);
        nav.navigate("Profile", {
          name: name,
          age: age,
          location: location,
          phone: phone,
          email: email, 
        });
  
        return onClose();
      };
      const onEdit = () => {
        setShowForm(true);
        setName(name);
        setAge(age);
        setLocation(location);   
        setPhone(phone);   
        setEmail(email);   
      };
    
    return (
        <View>
            {nameForm ? null : 
                <Text style={styles.buttonEdit} onPress={() => onEdit()}>Edit</Text>}
            <Modal visible={nameForm} animationType="slide" >
                <View style={styles.modalStyle}>
                  <TextInput placeholder="Name" onChangeText={(text) => setName(text)} value={name} style={styles.input}/>
                  <TextInput placeholder="Age" onChangeText={(text) => setAge(text)} value={age} style={styles.input}/>
                  <TextInput placeholder="Location" onChangeText={(text) => setLocation(text)} value={location} style={styles.input}/>
                  <TextInput placeholder="Phone" onChangeText={(text) => setPhone(text)} value={phone} style={styles.input}/>
                  <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} style={styles.input}/>
                  <View style={{margin: 10, flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                      <Text style={styles.btnDialog} title="Cancel" onPress={() => onclose()}>Cancel</Text>
                      <Text style={styles.btnDialog} title="Save" onPress={() => onSave()}>Save</Text>
                  </View>
                </View>
            </Modal>
            <Image 
                source={require('./assets/a8.png')}
                style={styles.productImage}
            />
            <Text style={styles.text}>Tên: {name}</Text>
            <Text style={styles.text}>Tuổi: {age}</Text>
            <Text style={styles.text}>Đại chỉ: {location}</Text>
            <Text style={styles.text}>SĐT: {phone}</Text>
            <Text style={styles.text}>Email: {email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
    },
    productImage:{
        width: 100,
        height: 100,
        alignSelf: 'center',
        margin: 10,
      },
      input: {
        borderWidth: 1, 
        width:300, 
        alignSelf: "center", 
        padding: 10, 
        marginTop: 10
     },
     buttonEdit:{
      alignSelf:'flex-end',
      marginTop: 10,
      marginRight: 20,
      fontSize: 20
     },
     modalStyle:{
      paddingTop: 100
     }
});

export default App;