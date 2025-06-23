import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import {Link} from "expo-router"
import { Text } from 'react-native-paper'

export default function Index() {
  
  const reminder = require('../../assets/images/reminder.png')
  const medicalRec = require('../../assets/images/medicalrecords.png')
  const medicalassist = require('../../assets/images/medicalassist.png')
  const medicines = require('../../assets/images/medicines.png')
  const profilepic = require('../../assets/images/icon.png')

  return (
    <SafeAreaView>
    
    <View style={styles.outerView}>
      <Text style={styles.heading} variant="headlineMedium">
        Profile
      </Text>
      
      <View style={styles.profile}>
        <View style={styles.textview}>
          <Text>Name: Zulkifl Ayaz</Text>
          <Text>Age: 7 years</Text>
          <Text>Gender: Boy</Text>
          <Text>Description: CP Child</Text>
        </View>
        <View>
          <Image style={styles.profilepic} source={profilepic}></Image>
        </View>
      </View>


    <View style={styles.sections}>
    <View
      style={styles.view}>
        <Link href="/auth"><Text variant="labelLarge">Reminders</Text></Link>
          <Image 
            source={reminder}
            style={[styles.icons, {resizeMode: 'contain'}]} />
    </View>
    
    <View
      style={styles.view}>
        <Link href="/auth"><Text variant="labelLarge">Medical Records</Text></Link>
          <Image 
            source={medicalRec}
            style={[styles.icons, {resizeMode: 'contain'}]} />
    </View>
    
    <View
      style={styles.view}>
        <Link href="/auth"><Text variant="labelLarge">Medicines</Text></Link>
          <Image 
            source={medicines}
            style={[styles.icons, {resizeMode: 'contain'}]} />
    </View>
    
    <View
      style={styles.view}>
        <Link href="/auth"><Text variant="labelLarge">Medical Assistant</Text></Link>
          <Image 
            source={medicalassist}
            style={[styles.icons, {resizeMode: 'contain'}]} />
    </View>
    </View>
    </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading:{
    color:'#013679'
  },
  outerView:{
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        // color:'green',
        // tintColor:'green',
  },
  profile:{
    width:400,
    height:200,
    justifyContent: 'center',
    margin: 40,
    borderColor: '#013679',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection:'row'
  },
  textview:{
    margin: 10,
    justifyContent:'center',
    
  },
  profilepic:{
    width: 100,
    height: 100,
    margin: 50
  },
  sections:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginBlock: 40,
    justifyContent: 'center',
    alignItems: "center",
    width:450
  },
  view:{
        cursor: 'pointer',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#BAD4DB',
        width:180,
        padding: 20,
        borderRadius: 15,
        margin: 15,
        flexDirection:'row',
      },
  icons:{
    width: 33,
    height: 35,
    margin: 5,
  }
})
