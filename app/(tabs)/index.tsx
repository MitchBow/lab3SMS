import { Image, StyleSheet, View, Platform, Alert, Button } from 'react-native';
import * as SMS from 'expo-sms';
import {Link} from 'expo-router';

export default function HomeScreen() {

  const id = ['0123456789', '9876543210'];

  function askToSend() {
    Alert.alert('SMS Send', 'Send: ' + id, [
      {
        text:'Cancel',
      },
      {
        text: 'ok', onPress:()=> _handlePressButtonAsync()
      }
    ])
  }

  async function _handlePressButtonAsync(){
  const { result } = await SMS.sendSMSAsync(
    id,
    'LA Beast is king',
/*     {
      attachments: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Mvf%40_L.A._Beast.jpg',
        mimeType: 'image/png',
        filename: 'myfile.png',
      },
    }*/
  );
  if (result === 'sent'){
    alert("SENT");
  } else {
    alert("ERROR: random crazy error")
  }
} 



return (
  <View style = {styles.header}>
    <View style = {styles.containerRow}>
      <Button
        title = "SEND"
        onPress = {()=>askToSend()}
        />
      <Link href="./contacts" asChild>
        <Button title="Contacts"></Button>
      </Link>
    </View>
  </View>
);

}


const styles = StyleSheet.create({
  header:{
    padding: 40
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8.
  }
 
});
