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

import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import userData from './data.json';
import styles from './styles';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      {userData.map((user) => (
        <Card style={styles.card} key={user.name}>
          <Card.Title
            title={user.name}
            subtitle={user.email}
            left={(props) => <Avatar.Image {...props} source={{ uri: user.photo_url }} />}
          />
          <Card.Content>
            <Title>{user.name}</Title>
            <Paragraph>{user.email}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}
