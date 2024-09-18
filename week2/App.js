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

// import React from 'react';
// import { View, Text, Image, ScrollView } from 'react-native';
// import data from './data.json';

// export default function App() {
//   return (
//     <ScrollView>
//       {data.map((person, index) => (
//         <View key={index} style={{ alignItems: 'center' }}>
//           <Image source={{ uri: person.photo_url }} style={{ width: 100, height: 100 }} />
//           <Text>{person.name}</Text>
//           <Text>{person.email}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

import { Text, View, Image, ScrollView} from "react-native";
import userData from "./data.json";
import styles from "./App.styles";

export default function App() {
  return (
    <ScrollView>
      {userData.map((users) => {
        return (
          <View style={StyleSheet.container} key={users.name}>
            <View style={StyleSheet.card}>
              <Image
                source={{
                  uri: users.photo_url,
                }}
                style={StyleSheet.avatar}
                />
                <View style={StyleSheet.boldText}>
                  <Text style={StyleSheet.boldText}>{users.name}</Text>
                  <Text>{users.email}</Text>
                  </View>
                </View>
            </View>
        );
      })}
      </ScrollView>
  );
}