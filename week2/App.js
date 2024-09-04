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
import { View, Text, Image, ScrollView } from 'react-native';
import data from './data.json';

export default function App() {
  return (
    <ScrollView>
      {data.map((person, index) => (
        <View key={index} style={{ alignItems: 'center' }}>
          <Image source={{ uri: person.photo_url }} style={{ width: 100, height: 100 }} />
          <Text>{person.name}</Text>
          <Text>{person.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
};