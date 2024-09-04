// import {Text,view, Image} from 'react-native';

// export default function App(){
//   return (
//     <view>
//       <Text> Open up App.js to start working on you app!</Text>
//       <Image source={require('./assets/favicon.png')} />
//     </view>
//   );
// }


// import React from 'react';
// import { View, Text, Image, ScrollView } from 'react-native';
// import data from './data.json';

// export default function App() {
//   return (
//     <ScrollView>
//       {data.map((person, index) => (
//         <View key={index}>
//           <Image source={{ uri: person.photo_url }} style={{ width: 100, height: 100 }} />
//           <Text>{person.name}</Text>
//           <Text>{person.email}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import data from './data.json';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((person, index) => (
        <View key={index} style={styles.personContainer}>
          <Image source={{ uri: person.photo_url }} style={styles.photo} />
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.email}>{person.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});



