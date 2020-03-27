import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<ScrollView>
  <Text>test1</Text>
  {for(let i=0; i<20; i++;) (
  <Text>
  किस्मत की कुंडली
सीरियल क्वीन
Appears to say: REPUBLIC.
  
© 2020 Republic. All rights reserved.
Appears to say: R
Don't miss another update from Republic World
You can unsubscribe from notifications anytime.
AllowLater
Powered by iZooto

  </Text>
  )}
</ScrollView>
</View>
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
